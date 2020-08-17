 
 import data from './data/pokemon/pokemon.js';

let pokemon =data.pokemon;
 

 const funciones = {
 list: function (pokemon){
   return pokemon;
 },

 filterData: function (pokemon, condition) {
    let filtro = [];
    for (let i = 0; i < pokemon.length; i++) {
      for (let j = 0; j < pokemon[i].type.length; j++) {
        if (pokemon[i].type[j] === condition) {
          console.log(filtro);
          filtro.push(pokemon[i]);
        }
      }
    }
    return filtro;
  },
 }
 export  default{funciones};

