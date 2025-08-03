const Tag = require("../models/tag.model");

const getAll = async (req, res) => {
  let results = await Tag.getAll();
  return res.render("user.ejs", { listUsers: results });
};

module.exports = {
  getAll,
};
