exports.up = function (knex) {
  return knex.schema.createTable("tasks", function (table) {
    table.increments("id").primary(); // TaskID

    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");

    table
      .integer("category_id")
      .unsigned()
      .references("id")
      .inTable("categories")
      .onDelete("SET NULL"); // liên kết category_id

    table
      .integer("status_id")
      .unsigned()
      .references("id")
      .inTable("task_statuses")
      .onDelete("SET NULL"); // liên kết status_id

    table.string("name", 100).notNullable();
    table.text("description").nullable();

    table.date("due_date").nullable();

    table
      .enu("priority", ["low", "medium", "high"], {
        useNative: true,
        enumName: "tasks_priority_enum",
      })
      .defaultTo("medium");

    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .raw("DROP TYPE IF EXISTS tasks_priority_enum");
};
