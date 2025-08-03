exports.up = function (knex) {
  return knex.schema.createTable("categories", function (table) {
    table.increments("id").primary(); // CategoryID
    table.string("name", 50).notNullable(); // CategoryName
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE"); // Foreign key → users(id)
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("categories");
};
