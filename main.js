console.log("tarea 1");

async function pedirPersonajes() {
  const pokemones = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  );
  const response = await pokemones.json();

  const nombresDePokemon = response.results.map((personaje) =>
    console.log(personaje.name)
  );
}

pedirPersonajes(); 
//Tarea 2 -- se ejecuta y la trata como promesa
//  response{     1,2,3,results:[  {},{},{}]     }
//
//
//
console.log("tarea 3");
