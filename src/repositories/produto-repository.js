const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');

exports.get = async () => {
  const result = await Produto.find({}, '_id title description price active');

  return result;
}

exports.create = async (data) => {
  let produto = Produto(data);
  await produto.save();
}

exports.update = async (id, data) => {
  await Produto.findByIdAndUpdate(id, {
    $set: {
      title: data.title,
      description: data.description,
      price: data.price,
      active: data.active
    }
  });
}

exports.getById = async (id) => {
  const result = await Produto.findOne({_id: id}, '_id title description price active');

  return result;
}

exports.delete = async(id) => {
  await Produto.findByIdAndUpdate(id, {
    $set: {  
      active: false
    }
  });
}