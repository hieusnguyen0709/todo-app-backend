exports.up = function (knex) {
  return knex.schema.createTable("tags", function (table) {
    table.increments("id").primary(); // TagID
    table.string("name", 50).notNullable().unique(); // TagName
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tags");
};
