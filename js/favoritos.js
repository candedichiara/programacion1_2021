
/*
Listado de gifs favoritos
*/

// se define "favoritos" como array vacío
// por si no se creó aun en storage
let favoritos = [];

// si fue creada la clave "favoritos" en localStorage
if (localStorage.getItem("favoritoslocal")) {

  // verifica cómo las propiedades llegan como strings
  console.log(localStorage);

  // guarda datos del storage...
  let recuperoStorage = localStorage.getItem("favoritoslocal");

  // y los asigna a la variable "favoritos"
  // transformados en array
  favoritos = JSON.parse(recuperoStorage);

  // verifica en consola la transformación a array
  console.log(favoritos);

}


// Contenedor de la lista de favoritos
const seccion = document.querySelector(".Opciones1");



// si NO hay favs en la lista
if (favoritos.length == 0) {

  // muestra leyenda apropiada en un "article"
  // y un botón "volver"
  seccion.innerHTML += `
  <article>
  <h3> No hay favoritos en tu lista </h3>
  </article> 
  `

} else { // Si SI hay favoritos en el array "favoritos"

  /*
  busca cada uno de los gifs y los imprime en pantalla
  */
  for (let i = 0; i < favoritos.length; i++) {
    /*
    Para mayor prolijidad
    se define una función que lo haga
    y se ejecuta dentro del bucle "for", para cada fav.
    (la función será definida después)
    */
    buscarYMostrarFavoritos(favoritos[i]);

  }

  // muestra un botón "volver" en la sección

}

/*
definición de la función mostrar los gif favoritos
(se ejecuta dentro del bucle for. más arriba)
*/

// el parámetro de la función se usará para traer info del gif en cada endpoint
function buscarYMostrarFavoritos(id) {

  // se guarda endpoint en variable "url"
  // para que el pedido al servidor quede más claro
  let url = `https://api.themoviedb.org/3/movie/${id}?api_key=583130cf3b1ec0008be028545f8f0cff&language=en-US`

  // pedido al servidor
  fetch(url)
    .then(function (respuesta) {

      // cuando llega la respuesta
      // se transforma en datos "manejables"
      return respuesta.json();

    })
    .then(function (datos) {
      console.log(datos)
      // cuando transformó los datos,
      // guarda la parte que nos sirve en variable "info"...
      let info = datos.data
      // y la muestra en consola para verificar


      // agrega a la sección lista
      // cada gif favorito en un article con:
      // h3 con título del gif que sea vínculo a la página de detalles del mismo
      // img del gif y atributo alt con el nombre
seccion.innerHTML += `
<li class= "elemento">
<img src="https://image.tmdb.org/t/p/w500${datos.poster_path}">
<h3> ${datos.title}</h3>
</li>`

    })
    .catch(function (error) {
      console.log(error);
    });

}