var database = require("../database/config")

function postQuiz(fkUsuario, qtdAcertos, qtdErros) {

    var insertQuizUsuario = `
        INSERT INTO usuarioquiz (fkUsuario, fkQuiz, dataTentativa, qtdAcertos, qtsErros) VALUES
            (${fkUsuario}, 3, default, ${qtdAcertos}, ${qtdErros});
        `
        // colocar o id do usuario que fez o quiz
        
    return database.executar(insertQuizUsuario)
}

module.exports = {
    postQuiz
};