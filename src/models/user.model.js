const db = require("../config/database");

const getAll = async () => {
  return await db("users").select("*");
};

const getById = async (id) => {
  return await db("users").where({ id }).first();
};

const create = async (data) => {
  return await db("users").insert(data);
};

const update = async (id, data) => {
  return await db("users").where({ id }).update(data);
};

const deleteById = async (id) => {
  return await db("users").where({ id }).del();
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
};
