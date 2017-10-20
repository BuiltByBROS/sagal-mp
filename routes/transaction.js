const config = require("../config/config.json");

const mp = require ("mercadopago");
const mpClient = new mp (config.mercadopago.client_id, config.mercadopago.client_secret);

const redisClient = require("../persistence/redis");

module.exports = (app) => {

  app.post('/api/comprar/:item', (req, res) => {

    // TODO: validate params
    const item = req.params.item;

    let data = req.body;

    // We asign the purchase date
    data.date = new Date();
    // We asign the order id
    data.orderId = config[`${item}`].order_number;

    // We create the mercadopago payment preference object

    let preference = {
      "items": [
        {
          "title": config[`${item}`].title,
          "quantity": config[`${item}`].quantity,
          "currency_id": config[`${item}`].currency_id,
          "unit_price": config[`${item}`].unit_price
        }
      ],
      "back_urls" : config.mercadopago.back_urls,
      "notification_url": config.mercadopago.notification_url,
      "auto_return": "all",
      "external_reference": null,
      "shipments": {
        "cost": config[`${item}`].shippingCost
      }
    };

    let transactionId;

    /**
      We increment id of transaction manually
      By doing this, INCR automatically locks the "id" key,
      increments it, unlocks it, and returns it to you.
      Thus, there is no way for anyone to get a duplicate id.
    */
    redisClient.incrAsync('id')
    .then((id) => {
      // We save id to get it on the next promise step scope.
      transactionId = id;
      // We save transaction object in redis.
      return redisClient.setAsync(`transaction:${transactionId}`, JSON.stringify(data))
    })
    .then((transaction) => {
      /**
        Before we create the preference, we assign it the id of the transaction that we just save on redis,
        that way when a payment it's made for this transaction
        we can assign it to the object stored on redis.
      */
      preference.external_reference = transactionId;
      // We crete the preference on mercadopago
      return mpClient.createPreference(preference)
    })
    .then((preferenceMP) => {
      // We respond with the URL to make the payment
      res.status(200).send(preferenceMP.response["init_point"]);
    })
    .catch((error) => {
      throw new Error(`Ha ocurrido un error inesperado: ${error.message}`)
    })

  });

}
