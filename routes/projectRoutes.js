const router = require("express").Router();
const projectController = require("../Controller/projectController")

router.get("/", projectController.findAll)
router.get("/solo", projectController.findSolo)
router.get("/team", projectController.findTeam)
router.get("/id/:projectId",projectController.findOne)
router.put("/like/:projectId", projectController.addLike)
router.put("/unlike/:projectId", projectController.unLike)
router.put("/star/:projectId", projectController.addStar)
router.put("/unstar/:projectId", projectController.unStar)
router.post("/", projectController.add)

module.exports = router 