const repository = require('../repositories/produto-repository');

exports.get = async (req, res, next) => {
  const data = await repository.get();
  res.status(200).send(data);
}

exports.post = async (req, res, next) => {
    try{
        await  repository.create(req.body);
        res.status(201).send({message: "Produto cadastrado com sucesso!"});
    }catch(erro){
        res.status(400).send({message: "Erro ao cadastrar produto."});
    }
}

exports.put =  async (req, res, next) => {
    const id = req.params.id;
    const body = req.body;
    try{        
        await repository.put(id, body);
        res.status(200).send({ message: "Produto atualizado com sucesso!" })       
    }catch{
        res.status(400).send({message: "Erro ao atualizar produto."})
    }
}

exports.getById = async (req, res, next) => {
    const id = req.params.id;
    const data = await repository.getById(id);
    if (data == null) {
        res.status(404).send();
    } else
        res.status(200).send(data);
}

exports.delete = async (req, res, next) => {
  const id = req.params.id;
  
  try {
        await repository.delete(id);
        res.status(200).send({ message: "Produto deletado com sucesso!" });
    } catch(erro) {
        res.status(400).send({message: "Não foi possível deletar este produto."})
    }
}