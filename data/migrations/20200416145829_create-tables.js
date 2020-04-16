
exports.up = function(knex) {
  return knex.schema.createTable('category', tbl => {
      tbl.increments('category_id').primary();
      tbl.string('category_name').unique().notNullable(); 
  })
  .createTable('cocktails', tbl => {
    tbl.increments('cocktail_id').primary();
    tbl.string('name').unique().notNullable();
    tbl.string('description');
    
    tbl.foreign('cocktail_id')
    .references('category_id')
    .inTable('category')
    // .onDelete('RESTRICT')
    // .onUpdate('CASCADE');
    // I don't know what these do
  })
  .createTable('ingredients', tbl => {
    tbl.increments('ingredient_id').primary();
    tbl.string('name').unique().notNullable();
    tbl.string('description');
  })
  .createTable('cocktail_ingredient', tbl => {
    tbl.increments('id').primary();
    tbl.decimal('name').notNullable();
    
    tbl.foreign('id')
    .references('cocktail_id')
    .inTable('cocktails');
    // .onDelete('RESTRICT')
    // .onUpdate('CASCADE');
    // I don't know what these do
    tbl.foreign('id')
    .references('ingredient_id')
    .inTable('ingredients');
    // .onDelete('RESTRICT')
    // .onUpdate('CASCADE');
    // I don't know what these do
  })
};

exports.down = function(knex) {
  
};
