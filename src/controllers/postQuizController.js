var postQuizModel = require('../models/postQuiz')

function guardar(req, res) {
    // separar os dados da requisição
    // e colocar dentro dos parenteses do postQuiz
    var fkUsuario = req.body.fkUsuarioServer
    var qtdAcertos = req.body.qtdAcertosServer
    var qtdErros = req.body.qtdErrosServer 

    postQuizModel.postQuiz(fkUsuario, qtdAcertos, qtdErros).then(function (resultado) {
        res.status(200).json(resultado);
    })
}

module.exports = {
    guardar
}
