const connection = require("../config/database");

const getHomePage = async (req, res) => {
  return res.render("homepage.ejs");
};

module.exports = {
  getHomePage,
};
