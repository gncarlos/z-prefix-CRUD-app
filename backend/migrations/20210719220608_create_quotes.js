
exports.up = function(knex) {
  return knex.schema.createTable('quotes', table => {
    table.increments('id').primary(); // adds an auto incrementing PK column
    table.string('quote');
    table.string('author');
    table.boolean('user_created')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('quotes');
};
