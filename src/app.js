const express = require('express');
const nodemailer = require('nodemailer');
const smtpTransport = require("nodemailer-smtp-transport");
const bodyParser = require('body-parser');

const emailUsername = 'pedrinho020202@gmail.com'
const emailPassword = 'zwilucsaiwqowypf'

//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";



const app = express();

app.post('/send-email', function (req, res) {
  const transporter = nodemailer.createTransport(smtpTransport({
      secure : true,
      host : "smtp.gmail.com",
      port: 587,
      auth : {
          user : emailUsername,
          pass : emailPassword
      }

  }));

  const mailOptions = req.body;
  console.log('----------Displaying post body msg field----------');
  console.log(mailOptions);
  console.log('----------End of display----------');

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
	console.log(error);
      res.end(JSON.stringify(error));
    } else {
	console.log(info.response)
      res.end(info.response);
    }
  });
});

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