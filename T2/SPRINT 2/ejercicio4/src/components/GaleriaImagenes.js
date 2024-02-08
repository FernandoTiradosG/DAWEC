import React, { Component } from 'react';
import './style.css';

class GaleriaImagenes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imagenes: [],
      imagenSeleccionada: null,
      pagina: 1,
      cargando: false,
    };

    // Referencia al contenedor de la galería
    this.galeriaRef = React.createRef();
  }

  componentDidMount() {
    // Cargar las primeras imágenes
    this.cargarImagenes();
    // Agregar un evento de desplazamiento para detectar la carga infinita
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // Remover el evento de desplazamiento al desmontar el componente
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { cargando } = this.state;

    // Verificar si el usuario ha llegado al final de la galería y no está cargando más imágenes
    if (
      window.innerHeight + window.scrollY >= this.galeriaRef.current.offsetHeight &&
      !cargando
    ) {
      this.cargarImagenes();
    }
  };

  cargarImagenes = () => {
    const { pagina, imagenes } = this.state;
    const accessKey = 'UNbBnDi_bOTYXv-1qP9C9uoew96sNf-k5GgBl-HBI1I'; // Reemplaza con tu clave de acceso a la API de Unsplash
    const url = `https://api.unsplash.com/photos/random?count=10&page=${pagina}&client_id=${accessKey}`;

    this.setState({ cargando: true });

    // Llama a la API de Unsplash para obtener más imágenes
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const nuevasImagenes = data.map(imagen => ({
          id: imagen.id,
          url: imagen.urls.regular,
        }));

        this.setState({
          imagenes: [...imagenes, ...nuevasImagenes],
          pagina: pagina + 1,
          cargando: false,
        });
      })
      .catch(error => {
        console.error('Error al cargar las imágenes:', error);
        this.setState({ cargando: false });
      });
  };

  abrirModal = (imagen) => {
    this.setState({ imagenSeleccionada: imagen });
  }

  cerrarModal = () => {
    this.setState({ imagenSeleccionada: null });
  }

  render() {
    const { imagenes, imagenSeleccionada } = this.state;

    return (
      <div>
        <h2>Galería de Imágenes</h2>

        <div className="reel" ref={this.galeriaRef}>
          {imagenes.map(imagen => (
            <img
              key={imagen.id}
              src={imagen.url}
              alt={`Imagen ${imagen.id}`}
              onClick={() => this.abrirModal(imagen)}
            />
          ))}
        </div>

        {imagenSeleccionada && (
          <div className="modal-fondo" onClick={this.cerrarModal}>
            <div className="modal-contenido">
              <span className="cerrar" onClick={this.cerrarModal}>&times;</span>
              <img src={imagenSeleccionada.url} alt={`Imagen ${imagenSeleccionada.id}`} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default GaleriaImagenes;
