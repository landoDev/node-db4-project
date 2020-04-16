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
})

module.exports = router;