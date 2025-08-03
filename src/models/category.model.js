const db = require("../config/database");

const getAll = async () => {
  return await db("categories").select("*");
};

const getById = async (id) => {
  return await db("categories").where({ id }).first();
};

const create = async (data) => {
  return await db("categories").insert(data);
};

const update = async (id, data) => {
  return await db("categories").where({ id }).update(data);
};

const deleteById = async (id) => {
  return await db("categories").where({ id }).del();
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
};
