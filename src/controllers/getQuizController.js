var getQuizModel = require("../models/getQuizModel")

function listar(req, res) {
    // separar os dados da requisição
    // e colocar dentro dos parenteses do get
    getQuizModel.getQuiz().then(function (resultado) {
        res.status(200).json(resultado);
    })
}

module.exports = {
    listar
}