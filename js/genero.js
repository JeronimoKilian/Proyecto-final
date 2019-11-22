window.onload = function(){

  var generosObj = new URLSearchParams(location.search);

  var idGenero = generosObj.get('genero');
  //getpedir info de un recurso especifico
//var generosObj
//json es un formato de intercambio de datos
// fetch es un pedido asincronico,esta basado en promesas que en algun momento me va responder .
//el metodo asincronico devuelve la promesa  de suministrar informacion  solicitadda en algun momento
//fetch recibe como parametro url  del seridor externo que recibe data asincronica
    fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US")
    .then(function(response) {
////recibe Un callback. este callback es una función que recibe como argumento otra función (response) y la ejecuta. form json
return response.json();
    })//response para enviar datos

    .then(function(respuesta) {
      //el cual hara lo que le pidamos con la respuesta obtenida en formato json
        //2)recibe un calleback, de ahi se ejecuta una funcion(respuesta)


//1)inicio ciclo var: 2)limite de repeticion, mientras se cumpla, el ciclo se repite,;dice en cuanto se incrementa con cada ciclo
//la cariable inicial
  for (var i = 0; i < respuesta.genres.length; i++) {
    //crea bucles, donde el codigo se repitee.




 var listadoGeneros = document.querySelector(".listado-generos");
listadoGeneros.innerHTML += "<li><a href='genero.html?genero="  + respuesta.genres[i].id + "'>" + respuesta.genres[i].name + "</a></li>";
//modificar una lista que va a tener un link a genero.html, esa lista va a provocar una respuesta,genres[i] con un id
if(respuesta.genres[i].id == idGenero){
//console.log('hola');
  var h1 = document.querySelector('.genreTitle') //para agarrar algo del html
h1.innerHTML = respuesta.genres[i].name // replaza el  contenido de una etiqueta HTML
////console.log(h1)//lista  genero nombre de los generos
        }  }  })
//The addition assignment operator (+=) adds a value to a variable.

//tenemos la lista de generos pero sin contenido, sin peliculas que tenga
//caracteristicas definidas para el genero
  fetch("https://api.themoviedb.org/3/discover/tv?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US&with_genres="+ idGenero)
.then(function(r){
////recibe Un callback. este callback es una función que recibe como argumento otra función (response) y la ejecuta.en formato json
  return r.json()
})
  .then(function(data){
    //2)recibe un calleback, de ahi se ejecuta una funcion(data)
    //el cual hara lo que le pidamos con la respuesta obtenida en formato json
  //  console.log(data) muestra data
  var series = data.results
    var prepath = 'https://image.tmdb.org/t/p/original/'
    // console.log(pelis);
    var ul = document.querySelector(".slide-series")
for (var i = 0; i < series.length; i++) {
  //ciclos que cumplen condiciones
  //1)inicio ciclo var: 2)limite de repeticion, mientras se cumpla, el ciclo se repite,;dice en cuanto se incrementa con cada ciclo
  //la cariable inicial
      var a = '<a href="detalle.html?idDeSerie='+ series[i].id + '">'//me lleva al detalle de la peli q aprete, mas id que e muestra el id
      a += '<li>'
      a += '<img src="'+prepath+series[i].poster_path+'" alt="">'   //insertar imagen
      a += '<div class="uk-position-center uk-panel"><h1>'+'</h1></div >'
      a += '</li>'
      a += '</a>'
      ul.innerHTML += a;
    }  })}
