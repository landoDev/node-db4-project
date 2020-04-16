
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('category').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {category_id: 1, category_name: 'Rum'},
        {category_id: 2, category_name: 'Whiskey'}
      ]);
    });
};
