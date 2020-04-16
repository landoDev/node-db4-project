
exports.up = function(knex) {
  return knex.schema.createTable('category', tbl => {
      tbl.increments();
      tbl.string('category_name', 255).unique().notNullable(); 
  })
  .createTable('cocktails', tbl => {
    tbl.increments();
    tbl.string('name', 255).unique().notNullable();
    tbl.string('description', 255);
    
    tbl.integer('category_id', 100)
    .unsigned()
    .references('id')
    .inTable('category')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE');
    // I don't know what these do
  })
  .createTable('ingredients', tbl => {
    tbl.increments();
    tbl.string('name', 255).unique().notNullable();
    tbl.string('description', 255);
  })
  .createTable('cocktail_ingredient', tbl => {
    tbl.increments();
    tbl.decimal('measurement', 100).notNullable();
    
    tbl.integer('cocktailId', 100)
    .unsigned()
    .references('id')
    .inTable('cocktails')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE');
    // I don't know what these do
    tbl.integer('ingredientId', 100)
    .unsigned()
    .references('id')
    .inTable('ingredients')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE');
    // I don't know what these do
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('cocktail_ingredient')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('cocktails')
  .dropTableIfExists('category');
};
