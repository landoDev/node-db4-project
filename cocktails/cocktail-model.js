const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db('cocktails');
}
function getShoppingList(id){
    // SELECT ingredients.name from cocktails
    // join cocktail_ingredient on cocktail_ingredient.cocktailId = cocktails.id
    // join ingredients on cocktail_ingredient.ingredientId = ingredients.id
    // WHERE cocktail_ingredient.cocktailId =1
    // ;
    return db('cocktails')
    .join('cocktail_ingredient as ci', 'ci.cocktailId', 'cocktails.id')
    .join('ingredients as i', 'ci.ingredientId', 'i.id')
    .where('cocktails.id', id)
    .select('i.name');
}
function getInstructions(id){
    return db
}
