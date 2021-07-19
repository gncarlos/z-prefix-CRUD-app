
exports.up = function(knex) {
  return knex.schema.createTable('quotes', table => {
    table.increments('id'); // adds an auto incrementing PK column
    table.string('quote').notNullable();
    table.string('author');
    table.timestamps(true, true); // adds created_at and updated_at
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('quotes');
};
