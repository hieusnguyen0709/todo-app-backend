const db = require("../config/database");

const getAll = async () => {
  return await db("tasks").select("*");
};

const getById = async (id) => {
  return await db("tasks").where({ id }).first();
};

const create = async (data) => {
  return await db("tasks").insert(data);
};

const update = async (id, data) => {
  return await db("tasks").where({ id }).update(data);
};

const deleteById = async (id) => {
  return await db("tasks").where({ id }).del();
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
};
