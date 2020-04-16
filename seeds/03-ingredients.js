
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {name: 'dark rum'},
        {name: 'banana liqueur'},
        {name: 'Kahlúa'},
        {name: 'heavy cream'},
        {name: 'bourbon'},
        {name: 'Southern Comfort'},


      ]);
    });
};
