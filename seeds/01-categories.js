
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('category').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {category_name: 'Rum'},
        {category_name: 'Whiskey'}
      ]);
    });
};
