const router = require("express").Router();
const projectController = require("../Controller/projectController")

router.get("/", projectController.findAll)
router.put("/like/:projectId", projectController.addLike)
router.put("/unlike/:projectId", projectController.unLike)
router.put("/star/:projectId", projectController.addStar)
router.put("/unstar/:projectId", projectController.unStar)


module.exports = router 