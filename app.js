const express = require('express');
let pokemons = require('./mock-pokemon')

const app = express();
const port = 8000;

app.get('/', (req, res) => res.send('Bienvenue sur mon serveur express !'));

app.get('/api/pokemons', (req,res) =>{
    res.send(`Il y a ${pokemons.length} pokemons`)
});

app.get('/api/pokemon/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
    res.send(`Vous avez demandé le pokémon ${pokemon.name}`)
});



app.listen(port, () => console.log(`Le serveur est démarré et écoute sur le port ${port}`));
