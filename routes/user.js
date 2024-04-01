const express = require("express");
const router = express.Router();

const {getAllUsers, getUserById, createUser , updateUser, deleteUser} = require("../controllers/user.js");

// get all users
router.route("/").get(getAllUsers);
// get user by id
router.route("/:id").get(getUserById);
// create user
router.route("/").post(createUser);
// update user
router.route("/:id").put(updateUser);
// delete user
router.route("/:id").delete(deleteUser);


module.exports = router;

