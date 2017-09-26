const express = require('express');
const app = express();
const Excel = require('exceljs');

app.use(express.static('./'));
app.use(express.static('dist'));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
})

// load API routes
require('./routes/createWorkbook')(app);
require('./routes/transaction')(app);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

// It's important that this come after the main routes are registered
app.use((err, req, res, next) => {
    res.status(err.status || 500).send(err);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('app listening on', port);
});
