var express = require("express");
var router = express.Router();

var personagemController = require("../controllers/personagemController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    personagemController.cadastrar(req, res);
})

router.get("/buscar", function (req, res) {
    personagemController.buscarPornome(req, res);
});

router.get("/buscar/:id", function (req, res) {
  personagemController.buscarPorId(req, res);
});

router.get("/listar", function (req, res) {
  personagemController.listar(req, res);
});

module.exports = router;