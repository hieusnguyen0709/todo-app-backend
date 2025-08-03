exports.up = function (knex) {
  return knex.schema.createTable("task_statuses", function (table) {
    table.increments("id").primary(); // StatusID
    table.string("name", 50).notNullable().unique(); // StatusName: "Pending", "Completed",...
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("task_statuses");
};
