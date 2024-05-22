var database = require("../database/config")

function getQuiz() {
    var instrucao = `SELECT qtdAcertos, qtsErros FROM usuarioquiz;`

    return database.executar(instrucao)
}

module.exports = {
    getQuiz
};