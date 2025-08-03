exports.up = function (knex) {
  return knex.schema.createTable("task_tags", function (table) {
    table
      .integer("task_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("tasks")
      .onDelete("CASCADE");

    table
      .integer("tag_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("tags")
      .onDelete("CASCADE");

    table.primary(["task_id", "tag_id"]); // Composite primary key
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("task_tags");
};
