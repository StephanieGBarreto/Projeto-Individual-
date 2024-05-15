var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM personagem WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT * FROM personagem`;

  return database.executar(instrucaoSql);
}

function buscarPornome(nome) {
  var instrucaoSql = `SELECT * FROM personagem WHERE nome = '${nome}'`;

  return database.executar(instrucaoSql);
}

// function cadastrar(razaoSocial, nome) {
//   var instrucaoSql = `INSERT INTO personagem (razao_social, nome) VALUES ('${razaoSocial}', '${nome}')`;

//   return database.executar(instrucaoSql);
// }

module.exports = { buscarPornome, buscarPorId, listar };
