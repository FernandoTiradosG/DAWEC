"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Variables globales para elementos del DOM
const searchBtn = document.getElementById('search-btn');
const nameInput = document.getElementById('name-input');
const mainScreen = document.getElementById('main-screen');
const nameScreen = document.getElementById('name-screen');
const idScreen = document.getElementById('id-screen');
const aboutScreen = document.getElementById('about-screen');
const typeScreen = document.getElementById('type-screen');
// Evento para buscar un Pokémon al hacer clic en el botón de búsqueda
searchBtn.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    const pokemonName = nameInput.value.toLowerCase();
    try {
        const response = yield fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error('Pokemon not found');
        }
        const data = yield response.json();
        displayPokemon(data);
    }
    catch (error) {
        displayNotFoundError();
    }
}));
// Función para buscar y mostrar datos del Pokémon en la Pokédex
function displayPokemonData(pokemonName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            if (!response.ok) {
                throw new Error('Pokemon not found');
            }
            const data = yield response.json();
            displayPokemon(data);
        }
        catch (error) {
            displayNotFoundError();
        }
    });
}
// Función para mostrar la información del Pokémon en la Pokédex
function displayPokemon(data) {
    return __awaiter(this, void 0, void 0, function* () {
        mainScreen.style.backgroundImage = `url(${data.sprites.front_default})`;
        nameScreen.textContent = data.name;
        idScreen.textContent = `#${data.id}`;
        aboutScreen.textContent = `Height: ${data.height} | Weight: ${data.weight}`;
        typeScreen.textContent = data.types.map((type) => type.type.name).join(', ');
        yield displayStats(data.stats);
        displayAbilities(data.abilities); // Mostrar solo las habilidades del Pokémon buscado
        yield displayEvolutions(data.species.url);
    });
}
// Función para mostrar un mensaje de error si el Pokémon no se encuentra
function displayNotFoundError() {
    alert('Pokemon not found');
    // Add your code here to display a visual warning for not found Pokémon
}
// Función para mostrar las estadísticas del Pokémon
function displayStats(stats) {
    return __awaiter(this, void 0, void 0, function* () {
        const statsList = document.getElementById('stats-list');
        if (statsList) {
            statsList.innerHTML = '';
            stats.forEach(stat => {
                const listItem = document.createElement('li');
                listItem.textContent = `${stat.stat.name}: ${stat.base_stat}`;
                statsList.appendChild(listItem);
            });
        }
    });
}
// Función para mostrar los movimientos del Pokémon
function displayAbilities(abilities) {
    const abilitiesList = document.getElementById('moves-list');
    abilitiesList.innerHTML = '';
    abilities.forEach(ability => {
        const listItem = document.createElement('li');
        listItem.textContent = ability.ability.name;
        abilitiesList.appendChild(listItem);
    });
}
// Función para mostrar las evoluciones del Pokémon
function displayEvolutions(speciesUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(speciesUrl);
            if (!response.ok) {
                throw new Error('Species not found');
            }
            const speciesData = yield response.json();
            const evolutionChainUrl = speciesData.evolution_chain.url;
            const chainResponse = yield fetch(evolutionChainUrl);
            if (!chainResponse.ok) {
                throw new Error('Evolution chain not found');
            }
            const chainData = yield chainResponse.json();
            const evolutions = parseEvolutions(chainData.chain);
            yield displayEvolutionsList(evolutions);
        }
        catch (error) {
            console.error(error);
        }
    });
}
// Función para analizar la cadena de evolución y obtener los nombres de Pokémon
function parseEvolutions(chain) {
    const evolutions = [];
    const processChain = (item) => {
        evolutions.push(item.species.name);
        if (item.evolves_to.length > 0) {
            item.evolves_to.forEach((evolution) => processChain(evolution));
        }
    };
    processChain(chain);
    return evolutions;
}
// Función para mostrar las evoluciones del Pokémon en la Pokédex
function displayEvolutionsList(evolutions) {
    return __awaiter(this, void 0, void 0, function* () {
        const evolutionsList = document.getElementById('evolutions-list');
        if (evolutionsList) {
            evolutionsList.innerHTML = '';
            for (const pokemonName of evolutions) {
                try {
                    const response = yield fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                    if (!response.ok) {
                        throw new Error('Pokemon not found');
                    }
                    const data = yield response.json();
                    const evolutionItem = document.createElement('li');
                    const evolutionImage = document.createElement('img');
                    evolutionImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
                    evolutionImage.alt = pokemonName;
                    const evolutionName = document.createElement('span');
                    evolutionName.textContent = pokemonName;
                    evolutionItem.appendChild(evolutionImage);
                    evolutionItem.appendChild(evolutionName);
                    evolutionsList.appendChild(evolutionItem);
                }
                catch (error) {
                    console.error(error);
                }
            }
        }
    });
}
// Llamada inicial para mostrar los datos de un Pokémon específico
const pokemonName = 'bulbasaur'; // Cambia esto por el nombre del Pokémon que quieras mostrar
displayPokemonData(pokemonName);
