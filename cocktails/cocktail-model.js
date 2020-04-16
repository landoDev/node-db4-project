const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db('schemes');
}
function getShoppingList(id){
    return db('schemes').where({id}).first();
}
function getInstructions(id){
    return db('steps as stp')
    .join('schemes as sch', 'sch.id', 'stp.scheme_id')
    .where('sch.id', id)
    .select('stp.step_number', 'stp.instructions', 'sch.scheme_name')
    .orderBy('stp.step_number');
}
