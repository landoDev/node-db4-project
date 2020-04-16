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
    return db('cocktails').where({id}).first();
}
function getInstructions(id){
    return db
}
