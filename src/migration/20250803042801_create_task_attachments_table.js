exports.up = function (knex) {
  return knex.schema.createTable("task_attachments", function (table) {
    table.increments("id").primary(); // AttachmentID

    table
      .integer("task_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("tasks")
      .onDelete("CASCADE"); // Liên kết với tasks

    table.string("file_path", 255).notNullable(); // FilePath
    table.timestamp("created_at").defaultTo(knex.fn.now()); // CreatedAt
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("task_attachments");
};
