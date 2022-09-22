const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    ownerRef : {
    type: String,
    required: true,
    trim: true
  },
  emailFrom: {
    type: String,
    required: true,
    trim: true
  },
  emailTo: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true,
    default: true
  },
  text: {
    type: String,
    required: true,
    default: true
  },
  sendDateEmail: {
    type: Date
  },
  statusEmail: {
    type: String,
    enum : ['SEND','ERROR']  }
});

module.exports = mongoose.model('Email', schema);