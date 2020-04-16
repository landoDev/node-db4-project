
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {step_number: 1, instructions: 'In a shaker filled with ice, pour all ingredients except cream.', cocktail_id: 1},
        {step_number: 2, instructions: 'Strain into a coupe and gently float the cream over the top.', cocktail_id: 1},
        {step_number: 1, instructions: 'In a mixing glass filled with ice, pour both ingridients and stir.', cocktail_id: 2},
        {step_number: 2, instructions: 'Strain into rocks glass filled with ice.', cocktail_id: 2},

      ]);
    });
};
