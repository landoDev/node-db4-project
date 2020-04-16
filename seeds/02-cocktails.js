
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cocktails').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cocktails').insert([
        {name: 'King Creole', description: 'As dark as the soul music that gave birth to the blues, here\'s a rock\'n\'roll flavor to savor', category_id: 1},
        {name: 'Kentucky Kiss', description: null, category_id: 2}
      ]);
    });
};
