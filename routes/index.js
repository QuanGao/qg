const router = require("express").Router();

const contactRouter = require("./contactRoutes");
const projectRouter = require("./projectRoutes");
// const noteRouter = require("./noteRoutes")

router.use("/contact", contactRouter);
router.use("/project", projectRouter);
// router.use("/note", noteRouter);


module.exports = router;
