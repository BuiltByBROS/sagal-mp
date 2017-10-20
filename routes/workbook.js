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
          { header: 'Pedido', key: 'orderId', width: 10 },
          { header: 'Bocaditos', key: 'snacks', width: 8 },
          { header: 'Sabor 1', key: 'sabor1', width: 7 },
          { header: 'Sabor 2', key: 'sabor2', width: 7 },
          { header: 'Sabor 3', key: 'sabor3', width: 7 },
          { header: 'Sabor 4', key: 'sabor4', width: 7 },
          { header: 'Sabor 5', key: 'sabor5', width: 7 },
          { header: 'Sabor 6', key: 'sabor6', width: 7 },
          { header: 'Sabor 7', key: 'sabor7', width: 7 },
          { header: 'Nombre de Destinatario', key: 'addresseeName', width: 20 },
          { header: 'Teléfono de contacto', key: 'addresseePhone', width: 20 },
          { header: 'Email de contacto', key: 'addresseeEmail', width: 20 },
          { header: 'Dirección de envío', key: 'shippingAddress', width: 25 },
          { header: 'Barrio', key: 'addresseeNeighborhood', width: 10 },
          { header: 'Comentarios', key: 'comments', width: 30},
          { header: 'Pago', key: 'payment', width: 10},
          { header: 'Estado', key: 'status', width: 10}
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
