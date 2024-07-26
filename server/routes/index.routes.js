const router = require("express").Router();

const topicRoutes = require("./api/topic.routes");
const askRoutes = require("./api/ask.routes");

router.use("/api/topics", topicRoutes);
router.use("/api/asks", askRoutes);

module.exports = router;