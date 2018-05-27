const router = require("express").Router();
const noteController = require("../Controller/noteController")

router.get("/", noteController.findAll)
router.post("/:projectId", noteController.add)

module.exports = router 