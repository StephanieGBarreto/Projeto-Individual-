var personagemModel = require("../models/personagemModel");

function buscarPornome(req, res) {
  var nome = req.query.nome;

  personagemModel.buscarPornome(nome).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  personagemModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  personagemModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

module.exports = {
  buscarPornome,
  buscarPorId,
  // cadastrar,
  listar,
};
