var express = require("express");
var router = express.Router();

var getQuizController = require("../controllers/getQuizController")

router.get("/listar", function (req, res) {
    getQuizController.listar(req, res)
});

module.exports = router;