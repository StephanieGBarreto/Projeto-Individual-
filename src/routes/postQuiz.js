var express = require("express");
var router = express.Router();

var postQuizController = require("../controllers/postQuizController")

router.post("/guardar", function (req, res) {
    postQuizController.guardar(req, res)
});

module.exports = router;