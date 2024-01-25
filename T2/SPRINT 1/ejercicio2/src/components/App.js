import React from "react";
import ListaFrutas from "./ListaFrutas";

const exoticas = [
  { nombre: 'Carambola', color: 'Amarillo', imagen: 'https://www.bialarblog.com/wp-content/uploads/2018/02/carambola.jpg'},
  { nombre: 'Pitalla', color: 'Rojo/Blanco', imagen: 'https://www.bialarblog.com/wp-content/uploads/2018/02/pitaya-150x123.jpg'},
  { nombre: 'Kumquat', color: 'Naranja', imagen: 'https://www.bialarblog.com/wp-content/uploads/2018/02/im%C3%A1genes-de-frutas-kumquat.jpg'},
  { nombre: 'Lima Kaffir', color: 'Verde', imagen: 'https://www.bialarblog.com/wp-content/uploads/2018/02/imagen-fruta-Lima-Kaffir.jpg'},
  { nombre: 'Maracuyá', color: 'Morado/amarillo', imagen: 'https://www.bialarblog.com/wp-content/uploads/2018/02/Fruta-de-la-pasi%C3%B3n-o-maracuy%C3%A1-imagen.jpg'}
]

const verano = [
  { nombre: 'Sandia', color: 'Verde/Rojo', imagen: 'https://dolomagnum.net/wp-content/uploads/2022/03/sandia.png'},
  { nombre: 'Melon', color: 'Verde/Amarillo', imagen: 'https://coldstorage.com.sg/assets/easyimage/4/4fcc68c00d60b45ba2f10aa7d8d38811.jpg'},
  { nombre: 'Fresa', color: 'Rojo', imagen: 'https://cdn.icon-icons.com/icons2/1397/PNG/128/strawberry_96818.png'},
  { nombre: 'Pera', color: 'Verde', imagen: 'https://tugasicompanyia.cat/web/image/product.product/1940/image'},
  { nombre: 'Arandano', color: 'Morado', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD2VBj5qgTAQ4W57KvXpWLt0Z9RwSgYkHPqw&usqp=CAU'}
]

const App = () => {
  return (
    <div className="container">
      <div>
        <h1>Frutas Exoticas</h1>
        <ListaFrutas frutas={exoticas} />
      </div>
      <div>
        <h1>Frutas de Verano</h1>
        <ListaFrutas frutas={verano} />
      </div>
    </div>
  )
}

export default App;
