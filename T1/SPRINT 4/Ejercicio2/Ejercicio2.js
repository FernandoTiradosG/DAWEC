document.getElementById('compareButton').addEventListener('click', comparePokemons);

async function comparePokemons() {
  const pokemonInput1 = document.getElementById('pokemonInput1').value;
  const pokemonInput2 = document.getElementById('pokemonInput2').value;
  const pokemonComparisonContainer = document.getElementById('pokemonComparison');

  try {
    const pokemon1 = await getPokemonData(pokemonInput1);
    const pokemon2 = await getPokemonData(pokemonInput2);

    // Crear la tabla de comparación
    const tableHtml = `
      <table>
        <thead>
          <tr>
            <th>Estadística</th>
            <th>${pokemon1.name}</th>
            <th>${pokemon2.name}</th>
          </tr>
        </thead>
        <tbody>
          ${generateStatRow('Velocidad', pokemon1.stats[0].base_stat, pokemon2.stats[0].base_stat)}
          ${generateStatRow('Defensa especial', pokemon1.stats[1].base_stat, pokemon2.stats[1].base_stat)}
          ${generateStatRow('Ataque especial', pokemon1.stats[2].base_stat, pokemon2.stats[2].base_stat)}
          ${generateStatRow('Defensa', pokemon1.stats[3].base_stat, pokemon2.stats[3].base_stat)}
          ${generateStatRow('Ataque', pokemon1.stats[4].base_stat, pokemon2.stats[4].base_stat)}
          ${generateStatRow('PS', pokemon1.stats[5].base_stat, pokemon2.stats[5].base_stat)}
        </tbody>
      </table>
    `;

    // Comparar estadísticas y obtener el ganador
    const winner = compareStats(pokemon1, pokemon2);

    // Mostrar la tabla y el ganador en el contenedor
    pokemonComparisonContainer.innerHTML = tableHtml + `<p>El Pokémon con mejores estadísticas generales es:</p><h3>${winner.name}</h3><img src="${winner.image}" alt="${winner.name}">`;

  } catch (error) {
    // Mostrar mensaje de error
    pokemonComparisonContainer.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

function generateStatRow(statName, value1, value2) {
  return `
    <tr>
      <td>${statName}</td>
      <td>${value1}</td>
      <td>${value2}</td>
    </tr>
  `;
}

async function getPokemonData(pokemonName) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
    
    if (!response.ok) {
      throw new Error('Pokemon no encontrado');
    }

    const data = await response.json();
    return {
      name: data.name,
      stats: data.stats,
      image: data.sprites.front_default || 'URL de la imagen para el empate',
    };
  } catch (error) {
    throw new Error(`No se pudo obtener la información del Pokémon: ${error.message}`);
  }
}

function compareStats(pokemon1, pokemon2) {
  // Calcular estadística total para cada Pokémon
  const totalStats1 = pokemon1.stats.reduce((total, stat) => total + stat.base_stat, 0);
  const totalStats2 = pokemon2.stats.reduce((total, stat) => total + stat.base_stat, 0);

  // Determinar al ganador
  if (totalStats1 > totalStats2) {
    return {
      name: pokemon1.name,
      image: pokemon1.image,
    };
  } else if (totalStats2 > totalStats1) {
    return {
      name: pokemon2.name,
      image: pokemon2.image,
    };
  } else {
    return {
      name: 'Empate',
      image: 'URL de la imagen para el empate',
    };
  }
}