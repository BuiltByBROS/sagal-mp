const Excel = require('exceljs');

module.exports = (app) => {

  app.post('/api/workbook/create', (req, res) => {

    try {

      const workbook = new Excel.Workbook();

      workbook.xlsx.readFile(__dirname + "/../files/transactions.xlsx")
      .then((workbook) => {
        // use workbook
        res.send("El archivo ya existe")
      })
      .catch((err) => {

        workbook.creator = 'Stadium';
        workbook.created = new Date();

        const worksheet = workbook.addWorksheet('Transactions', {
          properties: {
            tabColor: {
              argb:'FFC0000'
            }
          }
        });

        worksheet.columns = [
          { header: 'Fecha', key: 'date', width: 25 },
          { header: 'Número de pedido', key: 'orderId', width: 10 },
          { header: 'Nombre', key: 'name', width: 10 },
          { header: 'Email', key: 'email', width: 20 },
          { header: 'Teléfono', key: 'phone', width: 5 },
          { header: 'Nombre Destinatario', key: 'addresseeName', width: 10 },
          { header: 'Dirección envío', key: 'shippingAddress', width: 25 },
          { header: 'Teléfono envío', key: 'addresseePhone', width: 5 },
          { header: 'Comentarios', key: 'comments', width: 30},
          { header: 'Pago', key: 'payment', width: 10}
        ];

        workbook.xlsx.writeFile(__dirname + "/../files/transactions.xlsx")
        .then(() => {
          res.send("Archivo creado con éxito")
        });
      })
    } catch (error) {
      throw new Error(`Ha ocurrido un error inesperado: ${error.message}`);
    }

  });

}
