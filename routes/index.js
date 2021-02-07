const router = require("express").Router()
const auth = require("../middlewares/index")
const controller = require("../controllers/index")
router.get("/", auth, controller.index)
router.get("/login", controller.login)
router.post("/login", controller.loginPost)

module.exports = router