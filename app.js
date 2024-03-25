const express = require('express');
const {success} = require('./helper.js')
let pokemons = require('./mock-pokemon')

const app = express();
const port = 8000;

app.get('/', (req, res) => res.send('Bienvenue sur mon serveur express !'));

app.get('/api/pokemons', (req,res) =>{
    const message = 'tous les pokemons ont bien été trouvés'
    res.json(success(message,pokemons))
});

app.get('/api/pokemon/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
    const message = 'Un pokemon a bien été trouvé.'
    res.json(success(message,pokemon))
});



app.listen(port, () => console.log(`Le serveur est démarré et écoute sur le port ${port}`));
