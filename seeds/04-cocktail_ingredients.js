
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cocktail_ingredient').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cocktail_ingredient').insert([
        {measurement: 1, cocktailId: 1, ingredientId: 1},
        {measurement: 0.5, cocktailId: 1, ingredientId: 2},
        {measurement: 0.5, cocktailId: 1, ingredientId: 3},
        {measurement: 1, cocktailId: 1, ingredientId: 4},
        {measurement: 2, cocktailId: 2, ingredientId: 5},
        {measurement: 0.33, cocktailId: 2, ingredientId: 6}
      ]);
    });
};
