import data from './data/pokemon/pokemon.js';
import funciones from './data.js';
let pokemons = data.pokemon;
console.log(2,data);
console.log(funciones);

pokemons.forEach(pokemon => {
  
    const contenedor = document.getElementById('pokemon');
    const pokemonContainer = document.createElement('div');
    pokemonContainer.classList.add('pokemon');
    const image = document.createElement('img');
    image.src=pokemon.img;
    image.classList.add('imgPokemon');
    pokemonContainer.appendChild(image);
    const nombre = document.createElement('h2');
    nombre.innerHTML= pokemon.name;
    pokemonContainer.appendChild(nombre);
    pokemonContainer.addEventListener('click',function(evento){console.log(pokemon.name)})
    contenedor.appendChild(pokemonContainer);
    
    
    });

