import React, { Component } from 'react';
import Buscador from './Buscador.js';
import Reel from './Reel.js';
import Modal from './Modal.js';
import './style.css';

class GaleriaImagenesAvanzada extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagenes: [],
      pagina: 1,
      cargando: false,
      selectedImage: null,
      searchTerm: ''
    };
  }

  componentDidMount() {
    this.cargarImagenes();
  }

  cargarImagenes = () => {
    const { pagina, searchTerm } = this.state;
    const accessKey = 'UNbBnDi_bOTYXv-1qP9C9uoew96sNf-k5GgBl-HBI1I';
    let url = `https://api.unsplash.com/photos/random?count=10&page=${pagina}&client_id=${accessKey}`;

    if (searchTerm) {
      url += `&query=${searchTerm}`;
    }

    this.setState({ cargando: true });

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.length === 0) {
          this.setState({ cargando: false });
          return;
        }

        const nuevasImagenes = data.map(imagen => ({
          id: imagen.id,
          url: imagen.urls.regular,
          description: imagen.alt_description
        }));

        this.setState(prevState => ({
          imagenes: [...prevState.imagenes, ...nuevasImagenes],
          pagina: prevState.pagina + 1,
          cargando: false,
        }));
      })
      .catch(error => {
        console.error('Error al cargar las imágenes:', error);
        this.setState({ cargando: false });
      });
  };

  handleSearch = (query) => {
    this.setState({ searchTerm: query, imagenes: [], pagina: 1 }, () => {
      this.cargarImagenes();
    });
  };

  handleImageClick = (image) => {
    this.setState({ selectedImage: image });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { imagenes, selectedImage } = this.state;
    return (
      <div>
        <div className="buscador-container">
          <Buscador onSearch={this.handleSearch} />
        </div>
        <Reel imagenes={imagenes} onImageClick={this.handleImageClick} />
        {selectedImage && (
          <Modal image={selectedImage} onCloseModal={this.handleCloseModal} />
        )}
      </div>
    );
  }
}

export default GaleriaImagenesAvanzada;
