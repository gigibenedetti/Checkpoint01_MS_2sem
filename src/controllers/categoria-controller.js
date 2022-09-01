const repository = require('../repositories/categoria-repository');

exports.get = async (req, res, next) => {
  const data = await repository.listAll();
  res.status(200).send(data);
}

exports.post = async (req, res, next) => {
    try{
        await  repository.create(req.body);
        res.status(201).send({message: "Categoria cadastrada com sucesso!"});
    }catch(erro){
        res.status(400).send({message: "Erro ao cadastrar categoria."});
    }
}

exports.put =  async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;

  try {        
        await repository.put(id, body);
        res.status(200).send({ message: "Categoria atualizada com sucesso!"})       
    } catch {
        res.status(400).send({message: "Erro ao atualizar categoria."})
    }
}

exports.getById = async (req, res, next) => {
  const id = req.params.id;
  
  const data = await repository.getById(id);

  if(data == null) 
    res.status(404).send();

  res.status(200).send(data);
}

exports.delete = async (req, res, next) => {
  const id = req.params.id;

  try {
        await repository.delete(id);
        res.status(200).send({ message: "Categoria deletada com sucesso!" });
    } catch(erro) {
        res.status(400).send({message: "Erro ao deletar essa categoria."})
    }
}