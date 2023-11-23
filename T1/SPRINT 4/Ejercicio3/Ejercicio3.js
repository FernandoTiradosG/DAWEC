document.getElementById('searchButton').addEventListener('click', function() {
  const pokemonName = document.getElementById('pokemonInput').value.toLowerCase().trim();
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => response.json())
    .then(data => {
      const pokemonId = data.id;
      const abilities = data.abilities.map(ability => ability.ability.url);

      const evolutionChainUrl = data.species.url;
      fetch(evolutionChainUrl)
        .then(response => response.json())
        .then(speciesData => {
          const evolutionChainUrl = speciesData.evolution_chain.url;
          fetch(evolutionChainUrl)
            .then(response => response.json())
            .then(evolutionData => {
              displayPokemonInfo(data, abilities, evolutionData, pokemonName);
            })
            .catch(error => console.log('Error fetching evolution data:', error));
        })
        .catch(error => console.log('Error fetching species data:', error));
    })
    .catch(error => console.log('Error fetching Pokemon data:', error));
});

function displayPokemonInfo(pokemonData, abilities, evolutionData, pokemonName) {
  const evolutionChain = getEvolutionChain(evolutionData.chain, pokemonName);
  const abilitiesList = evolutionChain.map(evolutionPokemon => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${evolutionPokemon.speciesName}`)
      .then(response => response.json())
      .then(evolutionData => {
        evolutionPokemon.imageUrl = evolutionData.sprites.front_default;
        const evolutionAbilities = evolutionData.abilities.map(ability => ability.ability.url);
        return Promise.all(evolutionAbilities.map(abilityUrl => fetchAbilityInfo(abilityUrl)));
      })
      .catch(error => console.log('Error fetching evolution Pokemon data:', error));
  });

  Promise.all(abilitiesList)
    .then(evolutionAbilities => {
      const abilitiesHTML = evolutionAbilities.map((abilities, index) => {
        const abilitiesList = abilities.map(ability => {
          return `<span class="ability" onclick="showAbilityInfo('${ability.name}')">${ability.name}</span>`;
        }).join(', ');
        return `<p>${evolutionChain[index].speciesName}: ${abilitiesList}</p>`;
      }).join('');

      const evolutionHTML = evolutionChain.map(evolution => {
        return `
          <div class="evolution">
            <p>${evolution.speciesName}</p>
            <img src="${evolution.imageUrl}" alt="${evolution.speciesName}">
          </div>
        `;
      }).join('');

      const evolutionInfoDiv = document.getElementById('evolutionInfo');
      evolutionInfoDiv.innerHTML = `
        <h2>${pokemonData.name}</h2>
        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
        <h3>Cadena de Evolución:</h3>
        <div class="evolution-chain">
        ${evolutionHTML}
        </div>
        <h3>Habilidades:</h3>
        ${abilitiesHTML}
      `;
    })
    .catch(error => console.log('Error fetching abilities data:', error));
}

function getEvolutionChain(chain, pokemonName) {
  const evolutionChain = [];
  let currentPokemon = chain;

  // Encontrar la posición del pokemon en la cadena de evolución
  while (currentPokemon.species.name !== pokemonName && currentPokemon.evolves_to && currentPokemon.evolves_to.length) {
    currentPokemon = currentPokemon.evolves_to.find(pokemon => pokemon.species.name === pokemonName) || currentPokemon.evolves_to[0];
  }

  if (currentPokemon.species.name === pokemonName) {
    const getEvolutions = (pokemon) => {
      const speciesName = pokemon.species.name;
      evolutionChain.push({ speciesName });

      if (pokemon.evolves_to && pokemon.evolves_to.length) {
        pokemon.evolves_to.forEach(evo => getEvolutions(evo));
      }
    };

    getEvolutions(currentPokemon);
  }

  evolutionChain.shift();

  return evolutionChain;
}

function fetchAbilityInfo(abilityUrl) {
  return fetch(abilityUrl)
    .then(response => response.json())
    .then(abilityData => abilityData)
    .catch(error => console.log('Error fetching ability data:', error));
}

function showAbilityInfo(abilityName) {
  fetch(`https://pokeapi.co/api/v2/ability/${abilityName}`)
    .then(response => response.json())
    .then(abilityData => {
      const englishInfo = abilityData.effect_entries.find(entry => entry.language.name === 'en');
      if (englishInfo) {
        alert(`Ability Name: ${abilityData.names.find(name => name.language.name === 'en').name}\n\nDescription: ${englishInfo.effect}`);
      } else {
        alert('No English description available.');
      }
    })
    .catch(error => console.log('Error fetching ability data:', error));
}
