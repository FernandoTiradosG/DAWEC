// Función para realizar la búsqueda al hacer clic en el botón
const searchPokemon = () => {
    getPokemonData();
  };
  
  // Asociar la función al evento click del botón
  document.getElementById('searchButton').addEventListener('click', searchPokemon);
  // Asociar la función al evento keypress del campo de entrada
  document.getElementById('pokemonInput').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      searchPokemon();
    }
  });
  
  // Función para obtener los datos del Pokémon
  const getPokemonData = async () => {
    const pokemonInput = document.getElementById('pokemonInput').value;
    const pokemonInfoContainer = document.getElementById('pokemonInfo');
  
    try {
      // Hacer la solicitud a la PokeAPI
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInput.toLowerCase()}`);
      
      // Verificar si la solicitud fue exitosa
      if (!response.ok) {
        throw new Error('Pokemon no encontrado');
      }
  
      // Obtener los datos en formato JSON
      const data = await response.json();
  
      // Extraer la información que necesitas
      const pokemonInfo = {
        name: data.name,
        id: data.id,
        types: data.types.map(type => type.type.name),
        image: data.sprites.front_default,
      };
  
      // Construir el HTML para mostrar la información
      const html = `
        <p>Nombre: ${pokemonInfo.name}</p>
        <p>ID: ${pokemonInfo.id}</p>
        <p>Tipos: ${pokemonInfo.types.join(', ')}</p>
        <img src="${pokemonInfo.image}" alt="${pokemonInfo.name}">
      `;
  
      // Mostrar la información en el contenedor
      pokemonInfoContainer.innerHTML = html;
  
    } catch (error) {
      // Mostrar mensaje de error
      pokemonInfoContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    }
  };