const Excel = require('exceljs');

module.exports = (app) => {

  app.post('/api/createWorkbook', (req, res) => {

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
          { header: 'Id', key: 'id', width: 10 },
          { header: 'Fecha', key: 'date' },

          { header: 'Fecha', key: 'date' },
          { header: 'Nombre', key: 'name' },
          { header: 'Email', key: 'email' },
          { header: 'Teléfono', key: 'phone' },
          { header: 'Nombre Destinatario', key: 'addresseeName' },
          { header: 'Dirección envío', key: 'shippingAddress' },
          { header: 'Teléfono envío', key: 'addresseePhone' },
          { header: 'Comentarios', key: 'comments' }
        ];

        workbook.xlsx.writeFile(__dirname + "/../files/transactions.xlsx")
        .then(() => {
          res.send("Archivo creado con éxito")
        });
      })

    } catch (e) {
      throw new Error("Ha ocurrido un error inesperado");
    }

  });

}
