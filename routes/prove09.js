const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const bookObject = []


router.get('/',(req, res, next) => {
    var pokemon = [];
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')
    .then(response => response.json())
    .then((out) => {
        out.results.forEach(poke => {
            pokemon.push(poke);
        });
        // console.log(pokemon);
        res.render('pages/prove09', { 
            title: 'Prove Activity 09', 
            path: '/prove09', // For pug, EJS 
            activeTA03: true, // For HBS
            contentCSS: true, // For HBS
            data: pokemon,
            url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10',
        });
    });
});

module.exports = router;