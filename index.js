poke_container = document.getElementById('poke-container');
console.log(poke_container);
const pokemon_count = 150;

// pokeapi.co  - is wehre we will get out datat
// https://pokeapi.co/docs/v2#pokemon-section
// get familiar with the site and the api 's that it provides
// we need Pokemon (endpoint)
// https://pokeapi.co/api/v2/pokemon/{id or name}

const fetchPokemons = async() => {
    for(let id = 1; id <= pokemon_count; id++) {
        // call a function to get Pokemon
        await getPokemon(id)
    }
}

const getPokemon = async (id) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const response = await fetch(url);
        const pokemon = await response.json();
        console.log(pokemon);

    } catch (error) {
        console.log(error)
    }

}

fetchPokemons()