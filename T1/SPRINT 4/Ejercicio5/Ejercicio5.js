const API_KEY = 'f0f615d5c0f8d277b443704ff7b31360';
const baseURL = 'https://api.themoviedb.org/3';
const imageBaseURL = 'https://image.tmdb.org/t/p/w500';

const searchInput = document.getElementById('searchInput');
const genreSelect = document.getElementById('genreSelect');
const searchBtn = document.getElementById('searchBtn');
const resultsContainer = document.getElementById('resultsContainer');
const pagination = document.getElementById('pagination');

searchBtn.addEventListener('click', searchMovies);


let currentPage = 1;

function searchMovies() {
  const query = searchInput.value.trim();
  const selectedGenre = genreSelect.value;

  resultsContainer.style.display = 'flex';
  favoritesContainer.style.display = 'none';
  pagination.style.display = 'block';

  currentPage = 1;
  fetchMovies(query, currentPage, selectedGenre);
}

// Obtener lista de géneros disponibles
fetch(`${baseURL}/genre/movie/list?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        displayGenres(data.genres);
    })
    .catch(error => console.error('Error:', error));

function displayGenres(genres) {
    genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre.id;
        option.textContent = genre.name;
        genreSelect.appendChild(option);
    });
}

function fetchMovies(query, page, genre) {
  let url;

  if (!query) {
      url = `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=${genre}&page=${page}&language=es`;
  } else {
      url = `${baseURL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}&language=es`;
  }

  fetch(url)
        .then(response => response.json())
        .then(data => {
            let moviesToDisplay = data.results;

            if (genre !== 'all') {
                // Filtrar por género si no es 'all'
                moviesToDisplay = moviesToDisplay.filter(movie => {
                    const movieGenres = movie.genre_ids || movie.genre_ids;
                    return movieGenres.includes(parseInt(genre));
                });
            }

            displayMovies(moviesToDisplay);
            showPagination(data.total_pages);
        })
        .catch(error => console.error('Error:', error));
}

function displayMovies(movies) {
  resultsContainer.innerHTML = '';

  movies.forEach(movie => {
    const movieCard = createMovieCard(movie);

    const favoriteBtn = createFavoriteButton(movie); // Función específica para botones de favoritos
    movieCard.querySelector('.overlay-info').appendChild(favoriteBtn);

    resultsContainer.appendChild(movieCard);
  });
}

//Crea la logica del contenedor de las peliculas
function createMovieCard(movie) {
  const movieCard = document.createElement('div');
  movieCard.classList.add('movie-card');

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');

  const image = document.createElement('img');
  image.src = `${imageBaseURL}${movie.poster_path}`;
  image.alt = movie.title;

  imageContainer.appendChild(image);
  movieCard.appendChild(imageContainer);

  const overlayInfo = document.createElement('div');
  overlayInfo.classList.add('overlay-info');

  const title = document.createElement('h3');
  title.textContent = movie.title;

  const releaseDate = document.createElement('p');
  releaseDate.textContent = `Release Date: ${movie.release_date}`;

  const overview = document.createElement('p');
  overview.textContent = movie.overview;

  overlayInfo.appendChild(title);
  overlayInfo.appendChild(releaseDate);
  overlayInfo.appendChild(overview);

  imageContainer.appendChild(overlayInfo);
  movieCard.appendChild(imageContainer);

  return movieCard;
}

// Función para crear un botón de favoritos
function createFavoriteButton(movie) {
  const favoriteBtn = document.createElement('button');
  favoriteBtn.classList.add('favorite-btn'); // Agrega la clase base del botón

  const isFavorite = favorites.some(favMovie => favMovie.id === movie.id);

  if (isFavorite) {
    favoriteBtn.textContent = 'Quitar de Favoritos';
    favoriteBtn.classList.add('remove-favorite'); // Aplica el estilo de quitar de favoritos
  } else {
    favoriteBtn.textContent = 'Agregar a Favoritos';
    favoriteBtn.classList.add('add-favorite'); // Aplica el estilo de agregar a favoritos
  }

  favoriteBtn.addEventListener('click', () => {
    toggleFavorite(movie);
    updateFavoriteButton(favoriteBtn, movie); // Actualiza el estado del botón después del clic
  });

  return favoriteBtn;
}

// Función para actualizar el estado y el texto del botón de favoritos
function updateFavoriteButton(button, movie) {
  const isFavorite = favorites.some(favMovie => favMovie.id === movie.id);

  if (isFavorite) {
    button.textContent = 'Quitar de Favoritos';
    button.classList.remove('add-favorite');
    button.classList.add('remove-favorite');
  } else {
    button.textContent = 'Agregar a Favoritos';
    button.classList.remove('remove-favorite');
    button.classList.add('add-favorite');
  }
}

//Creacion de la paginación
function showPagination(totalPages) {
  pagination.innerHTML = '';

  const firstPageBtn = createPaginationButton('First', 1);
  const prevPageBtn = createPaginationButton('Prev', currentPage - 1 > 0 ? currentPage - 1 : 1);

  pagination.appendChild(firstPageBtn);
  pagination.appendChild(prevPageBtn);

  const maxPages = 5;
  const startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
  const endPage = Math.min(totalPages, startPage + maxPages - 1);

  for (let i = startPage; i <= endPage; i++) {
    const pageBtn = createPaginationButton(i, i);
    pagination.appendChild(pageBtn);
  }

  const nextPageBtn = createPaginationButton('Next', currentPage + 1 < totalPages ? currentPage + 1 : totalPages);
  const lastPageBtn = createPaginationButton('Last', totalPages);

  pagination.appendChild(nextPageBtn);
  pagination.appendChild(lastPageBtn);
}

function createPaginationButton(text, page) {
  const button = document.createElement('button');
  button.textContent = text;

  button.addEventListener('click', () => {
    currentPage = page;
    const query = searchInput.value.trim();
    const selectedGenre = genreSelect.value;
    fetchMovies(query, currentPage, selectedGenre);
  });

  return button;
}

// Función para cargar los favoritos almacenados en localStorage al inicio
function loadFavorites() {
  const storedFavorites = localStorage.getItem('favorites');
  console.log('Stored Favorites:', storedFavorites);
  if (storedFavorites) {
    favorites = JSON.parse(storedFavorites);
    //showFavorites(); // Vuelve a mostrar los favoritos al cargar la página
  }
}

let favorites = [];

// Llama a loadFavorites al cargar la página para cargar los favoritos almacenados
window.addEventListener('load', loadFavorites);

function saveFavorites() {
  localStorage.setItem('favorites', JSON.stringify(favorites));
  console.log('Favoritos guardados en localStorage:', favorites);
}

// Modifica la función toggleFavorite para agregar/quitar de favoritos y guardar en localStorage
function toggleFavorite(movie) {
  const isFavorite = favorites.some(favMovie => favMovie.id === movie.id);

  if (isFavorite) {
    const index = favorites.findIndex(favMovie => favMovie.id === movie.id);
    favorites.splice(index, 1); // Eliminar de favoritos si ya existe

    // Mostrar favorites después de eliminar el favorito (solo para verificar)
    console.log('Favorites después de eliminar:', favorites);
  } else {
    favorites.push(movie); // Agregar a favoritos si no está en la lista

    // Mostrar favorites después de agregar el favorito (solo para verificar)
    console.log('Favorites después de agregar:', favorites);
  }

  saveFavorites(); // Guardar los cambios en localStorage

  console.log(localStorage.getItem('favorites'));

}

// Función para mostrar todas las películas favoritas
function showFavorites() {
  const resultsContainer = document.getElementById('resultsContainer');
  const favoritesContainer = document.getElementById('favoritesContainer');
  const favoriteResultsContainer = document.getElementById('favoriteResults');
  
  // Ocultar los resultados anteriores y el contenedor de favoritos
  resultsContainer.style.display = 'none';
  favoritesContainer.style.display = 'block';
  pagination.style.display= 'none';
  
  favoriteResultsContainer.innerHTML = ''; // Limpiar resultados previos

  favorites.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const title = document.createElement('h3');
    title.textContent = movie.title;

    const releaseDate = document.createElement('p');
    releaseDate.textContent = `Release Date: ${movie.release_date}`;

    const overview = document.createElement('p');
    overview.textContent = movie.overview;

    const image = document.createElement('img');
    image.src = `${imageBaseURL}${movie.poster_path}`;
    image.alt = movie.title;

    imageContainer.appendChild(image);
    movieCard.appendChild(imageContainer);

    const overlayInfo = document.createElement('div');
    overlayInfo.classList.add('overlay-info');
    overlayInfo.appendChild(title);
    overlayInfo.appendChild(releaseDate);
    overlayInfo.appendChild(overview);

    // Botón para quitar de favoritos
    const removeFavoriteBtn = document.createElement('button');
    removeFavoriteBtn.textContent = 'Quitar de Favoritos';
    removeFavoriteBtn.addEventListener('click', () => removeFromFavorites(movie));
    removeFavoriteBtn.classList.add('remove-favorite');
    
    overlayInfo.appendChild(removeFavoriteBtn);

    imageContainer.appendChild(overlayInfo);
    movieCard.appendChild(imageContainer);

    favoriteResultsContainer.appendChild(movieCard);
  });
}

// Función para quitar película de favoritos individualmente
function removeFromFavorites(movie) {
  const index = favorites.findIndex(favMovie => favMovie.id === movie.id);
  favorites.splice(index, 1);

  saveFavorites(); // Guardar los cambios en localStorage
  showFavorites(); // Mostrar los favoritos actualizados en la sección de favoritos
}

// Botón para mostrar todas las películas favoritas
const viewFavoritesBtn = document.getElementById('viewFavoritesBtn');
viewFavoritesBtn.addEventListener('click', showFavorites);

// Botón para eliminar todas las películas favoritas
const deleteAllFavoritesBtn = document.createElement('button');
deleteAllFavoritesBtn.classList.add('remove-All-favorite');
deleteAllFavoritesBtn.textContent = 'Eliminar Todos los Favoritos';
deleteAllFavoritesBtn.addEventListener('click', () => {
  favorites.length = 0;
  showFavorites();
  resultsContainer.innerHTML = ''; // Limpiar la sección de resultados
});
const favoritesContainer = document.getElementById('favoritesContainer');
favoritesContainer.appendChild(deleteAllFavoritesBtn);