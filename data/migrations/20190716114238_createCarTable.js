
exports.up = function(knex) {
    return knex.schema.createTable('cars', table => {
        table.increments();
        table.string('make', 128).notNullable();
        table.string('model', 128).notNullable();
        table.integer("mileage", 20);
        table.string('vin').notNullable();
        table.enu('status',['clean', 'salvage']).defaultTo('clean');
        table.enu('transmission_type',['automatic', 'manual']).defaultTo('manual');
      });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
