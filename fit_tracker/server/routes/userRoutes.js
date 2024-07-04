const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createNewlUser);

router.patch("/:userId", userController.updateUser);
router.delete("/:userId", userController.deleteUser);

module.exports = router;
