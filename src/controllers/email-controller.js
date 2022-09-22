const repository = require('../repositories/email-repository');

exports.post = async (req, res, next) => {
    
    try{
        await  repository.create(req.body);
        res.status(201).send({message: "Email enviado com sucesso!"});
    }catch(erro){
        res.status(400).send({message: "Erro ao enviar email."});
    }
}
