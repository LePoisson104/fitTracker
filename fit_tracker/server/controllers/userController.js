const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const Users = require("../models/userModels");
const jwt = require("jsonwebtoken");

const getAllUsers = (req, res) => {
  const { email } = req.body;
  const getUsers = Users.queryGetAllUsers(email);
  getUsers.then((data) => {
    if (data.length === 0) {
      return res.status(400).json({ message: "User Not Found" });
    }
    res.status(200).json({ data: data });
  });
};

const createNewlUser = (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({ message: "All fields are require" });
  }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  const userId = uuidv4();
  const createUser = Users.queryCreateNewUser(
    userId,
    email,
    hashedPassword,
    name
  );
  createUser
    .then((status) => {
      if (!status) {
        return res.status(400).json({ message: "Duplicate Email" });
      }
      if (status.affectedRows === 1) {
        return res.status(200).json({ message: "User Created Successfully!" });
      }
    })
    .catch((err) => console.error(err));
};

const updateUser = (req, res) => {
  const { userId } = req.params;
  const { password, name } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashed_password = bcrypt.hashSync(password, salt);
  const updateUser = Users.queryUpdateUser(userId, hashed_password, name);
  updateUser
    .then((status) => {
      if (status.affectedRows !== 1) {
        return res.status(400).json({ message: "Invalid User ID" });
      }
      res.status(200).json({ message: "User Updated Successfully!" });
    })
    .catch((err) => console.error(err));
};

const deleteUser = (req, res) => {
  const { userId } = req.params;
  const deleteUser = Users.queryDeleteUser(userId);
  deleteUser
    .then((status) => {
      if (status.affectedRows !== 1) {
        return res.status(400).json({ message: "Invalid User Id" });
      }
      res.status(200).json({ message: "User Deleted Successfully!" });
    })
    .catch((err) => console.error(err));
};

module.exports = { getAllUsers, createNewlUser, updateUser, deleteUser };
