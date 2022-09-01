const mongoose = require('mongoose');
const Categoria = mongoose.model('Categoria');

exports.listAll = async () => {
  const result = await Categoria.find({}, '_id category niche tag active');

  return result;
}

exports.create = async (data) => {
  let categoria = Categoria(data);
  await categoria.save();
}

exports.update = async (id, data) => {
  await Categoria.findByIdAndUpdate(id, {
    $set: {
      category: data.category,
      niche: data.niche,
      tag: data.tag,
      active: data.active
    }
  });
}

exports.getById = async (id) => {
  const result = await Categoria.findOne({_id: id}, '_id category niche tag active');

  return result;
}

exports.delete = async(id) => {
  await Categoria.findByIdAndUpdate(id, {
    $set: {  
      active: false
    }
  });
}