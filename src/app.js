const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.get('/', (req, res) => {
  res.status(200).send({
    message: 'API Emballer está rodando! 📦',
    version: '1.0.0'
  });
});

module.exports = app;