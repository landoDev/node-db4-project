const express = require('express');
const db = require('./cocktail-model');

const router = express.Router();

router.get('/', (req, res) =>{
    db.getRecipes()
    .then(cocktails => {
        res.status(200).json(cocktails)
    })
    .catch(err => {
        res.status(500).json({message: 'Couldn\'t get cocktails'})
    })
});

router.get('/:id/list', (req, res) =>{
    const { id } = req.params;
    console.log(id)
    db.getShoppingList(id)
    .then(list => {
        if(list){
            res.status(200).json(list)
        }
        else {
            res.status(404).json({message: 'list not found'})
        }
        
    })
    .catch(err => {
        res.status(500).json({message: 'Couldn\'t get cocktails'})
    })
})

module.exports = router;