const express = require('express');

const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gigibenedetti:28022002@cluster0.jkbp3mz.mongodb.net/test');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
  next();
});

require('./models/produto')
require('./models/categoria')

const produtoRouter = require('./routes/produto-router');

const categoriaRouter = require('./routes/categoria-router');

app.use('/produto', produtoRouter);
app.use('/categoria', categoriaRouter);

module.exports = app;