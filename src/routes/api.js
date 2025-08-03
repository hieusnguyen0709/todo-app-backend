const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.get("/user/list", userController.list);
router.post("/user/create", userController.create);
router.post("/user/update/:id", userController.update);
router.get("/user/detail/:id", userController.getById);
router.delete("/user/delete/:id", userController.deleteById);

module.exports = router;
