const config = require("../config/config.json");

const mp = require("mercadopago");
const mpClient = new mp (config.mercadopago.client_id, config.mercadopago.client_secret);

const Excel = require('exceljs');

const redisClient = require("../persistence/redis");

module.exports = (app) => {

  let addToExcel = (transaction) => {
    const workbook = new Excel.Workbook();
    workbook.xlsx.readFile(__dirname + "/../files/transactions.xlsx")
    .then((workbook) => {
        let worksheet = workbook.getWorksheet("Transactions");
        worksheet.addRow([
          transaction.date,
          transaction.orderId,
          transaction.name,
          transaction.email,
          transaction.phone,
          transaction.addresseeName,
          transaction.shippingAddress,
          transaction.addresseePhone,
          transaction.comments,
          transaction.payment
        ]).commit();
        return workbook.xlsx.writeFile(__dirname + "/../files/transactions.xlsx")
    })
  }

  app.post('/api/notification', (req, res) => {

    const { id, topic } = req.query;

    if (topic === "payment") {

      let paymentId;
      let external_reference;
      let transaction;

      // We get the payment from mercadopago
      mpClient.getPayment(id)
      .then((mpPayment) => {
        // We save paymentId and external_reference to get them on the next promise step scope.
        paymentId = mpPayment.response.collection.id;
        external_reference = mpPayment.response.collection.external_reference;
        /** We obtain or transaction object using the external reference
          that we pass on preference creation
          */
        return redisClient.getAsync(`transaction:${external_reference}`)
      })
      .then((response) => {
        // parsing redis object
        response = JSON.parse(response);
        response.payment = paymentId;
        // we save the transaction again with the associated payment
        transaction = response;
        return redisClient.setAsync(`transaction:${external_reference}`, JSON.stringify(response))
      })
      .then((response) => {
        return addToExcel(transaction)
      })
      .then((response) => {
        res.status(200).send();
      })
      .catch((error) => {
        throw new Error(`Ha ocurrido un error inesperado: ${error.message}`);
      });
    }
  });
}
