const mongoose = require('mongoose');
const Email = mongoose.model('Email');

exports.create = async (data) => {
  let email = Email(data);
  await email.save();
}
