
let pokemon1, pokemon2;
let name1, name2;
let ataque1, ataque2;
let defensa1, defesensa2;
let fondofondo, fondofondo2;

const colors = {
	fire: '#fca311',
	grass: '#606c38',
	electric: '#deff0a',
	water: '#219ebc',
	ground: '#283618',
	rock: '#dda15e', 
	fairy: '#ccd5ae',
	poison: '#023047',
	bug: '#f4a261',
	dragon: '#ffb703',
	psychic: '#ccc5b9',
	flying: '#8ecae6',
	fighting: '#ee6c4d',
	normal: '#e09f3e',
    ghost: '#e8dab2',
};


function duelo(){
    let aleatorio = Math.round(Math.random()*(100-1)+parseInt(1));;
    let aleatorio2 = Math.round(Math.random()*(100-2)+parseInt(1));;
    pokemon1 = document.getElementById("duelo1");
    name1 = document.getElementById("duelo1p");
    pokemon2 = document.getElementById("duelo2");
    name2 = document.getElementById("duelo2p");
    ataque1 = document.getElementById("dueloa");
    ataque2 = document.getElementById("dueloa2");
    defensa1 = document.getElementById("duelod");
    defensa2 = document.getElementById("duelod2");
    fondofondo = document.getElementById("f");
    fondofondo2 = document.getElementById("f2");
    traerDatos(pokemon1,name1,ataque1,defensa1,aleatorio);
    traerDatos(pokemon2,name2,ataque2,defensa2,aleatorio2);
    fondo(fondofondo, aleatorio);
    fondo(fondofondo2, aleatorio2);
}

function traerDatos(contenedor,nombre,ataque,defensa,id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(data => {
      contenedor.src = data.sprites.front_default;
      nombre.innerHTML = data.name;
      ataque.innerHTML = "Attack: " + data.stats[1].base_stat;
      defensa.innerHTML = "Defense: " + data.stats[2].base_stat;
     })
}


function fondo(contenedor,id){

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(data => {
        const {types} = data;
        console.log(data)
        setCardColor(types);
     })

    const setCardColor = types => {
        const colorOne = colors[types[0].type.name];
        contenedor.style.backgroundColor =  colorOne;
    }
}

window.onload = function recargar(){
    duelo();
    equipo();
    poketotal();
}
