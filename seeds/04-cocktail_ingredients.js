
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {measurement: 1},
        {measurement: 0.5},
        {measurement: 0.5},
        {measurement: 1},
        {measurement: 2},
        {measurement: 0.33}
      ]);
    });
};
