const client_id = "8002982999216703";
const client_secret = "qs8ZelPRDDgJXXWKJjFI8rcfv48jmfmc";

const MP = require ("mercadopago");
const mp = new MP (client_id, client_secret);

const Excel = require('exceljs');

module.exports = (app) => {

  app.post('/api/comprar', (req, res) => {

    try {
      let preference = {
        "items": [
          {
            "title": "Promotion item",
            "quantity": 1,
            "currency_id": "UYU",
            "unit_price": 50
          }
        ],
        "back_urls" : {
          "success": "localhost",
          "pending": "localhost",
          "failure": "localhost"
        },
        "notification_url": "localhost",
        "auto_return": "all"
      };

      // We create Mercadopago preference
      mp.createPreference(preference)
      .then((preferenceMP) => {
        res.send(preferenceMP.response["sandbox_init_point"]);
      })


    } catch (e) {
      throw new Error("Ha ocurrido un error inesperado");
    }


  });

}
