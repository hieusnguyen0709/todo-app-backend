const User = require("../models/user.model");

const list = async (req, res) => {
  try {
    const results = await User.getAll();
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const create = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const result = await User.create({
      email: email,
      username: username,
      password: password,
    });
    res
      .status(201)
      .json({ message: "User created successfully!", createdId: result[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const update = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const { id } = req.params;

    if (!email || !username || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const result = await User.update(id, {
      email: email,
      username: username,
      password: password,
    });
    res
      .status(201)
      .json({ message: "User updated successfully!", updatedId: result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const result = await User.getById(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteById = async (req, res) => {
  try {
    const result = await User.deleteById(req.params.id);
    res.json({ message: "User deleted successfully!", deletedId: result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  list,
  create,
  update,
  getById,
  deleteById,
};
