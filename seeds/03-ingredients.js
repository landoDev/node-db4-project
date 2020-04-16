
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'dark rum'},
        {name: 'banana liqueur'},
        {name: 'Kahlúa'},
        {name: 'heavy cream'},
        {name: 'bourbon'},
        {name: 'Southern Comfort'},


      ]);
    });
};
