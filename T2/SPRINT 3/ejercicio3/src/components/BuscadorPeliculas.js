// BuscadorPeliculas.js
import React, { useState } from 'react';

function BuscadorPeliculas() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=cae8cff6`);
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      const data = await response.json();
      if (data.Error) {
        throw new Error(data.Error);
      }
      setSearchResults(data.Search || []);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Buscar películas..."
        />
        <button type="submit">Buscar</button>
      </form>
      {loading && <p className="loading">Cargando...</p>}
      {error && <p>{error}</p>}
      <div className="movie-container">
        {searchResults.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <img src={movie.Poster} alt={movie.Title} />
            <p>{movie.Title} ({movie.Year})</p>
          </div>
        ))}
      </div>
    </div>
  );  
}

export default BuscadorPeliculas;
