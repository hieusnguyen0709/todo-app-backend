exports.up = function (knex) {
  return knex.schema.createTable("task_comments", function (table) {
    table.increments("id").primary(); // CommentID

    table
      .integer("task_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("tasks")
      .onDelete("CASCADE");

    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");

    table.text("comment_text").notNullable(); // CommentText
    table.timestamp("created_at").defaultTo(knex.fn.now()); // CreatedAt
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("task_comments");
};
