const router = require("express").Router();
const projectController = require("../Controller/projectController")

router.get("/", projectController.findAll)

module.exports = router 