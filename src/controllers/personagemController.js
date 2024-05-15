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

// function cadastrar(req, res) {
//   var nome = req.body.nome;
//   var razaoSocial = req.body.razaoSocial;

//   personagemModel.buscarPornome(nome).then((resultado) => {
//     if (resultado.length > 0) {
//       res
//         .status(401)
//         .json({ mensagem: `a personagem com o nome ${nome} já existe` });
//     } else {
//       personagemModel.cadastrar(razaoSocial, nome).then((resultado) => {
//         res.status(201).json(resultado);
//       });
//     }
//   });
// }

module.exports = {
  buscarPornome,
  buscarPorId,
  // cadastrar,
  listar,
};
