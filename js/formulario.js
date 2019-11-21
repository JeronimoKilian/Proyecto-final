window.addEventListener("load", function() {

  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta) {
    for (var i = 0; i < respuesta.genres.length; i++) {
      var selectGeneros = document.querySelector(".campoGenero");
      selectGeneros.innerHTML += "<option value= >" + respuesta.genres[i].name + "</option>";

    }

    for (var i = 0; i < respuesta.genres.length; i++) {
      var selectGeneros = document.querySelector(".campoGeneroExcluir");
      selectGeneros.innerHTML += "<option value= >" + respuesta.genres[i].name + "</option>";

    }

  })



  document.querySelector("form").onsubmit = function(e) {

    //Para etiquetas de tipo input
    var valorDelCampoInput = document.querySelector('input.blabla').value;

//para etiqueta select
    var e = document.querySelector(".ddlViewBy");
    var strUser = e.options[e.selectedIndex].value;

//     if (campoGenero == null && campoOrden == null ...) {
// window.alert("error");
// e.preventDefault();
//     }

    if (campoGenero = campoExcluido) {

    }

  }
})

//
// fetch ("https://api.themoviedb.org/3/discover/tv?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false")
// .then(function(response) {
//   return response.json();
// })
// .then(function(respuesta) {
//   for (var i = 0; i < respuesta.genres.length; i++) {
//     var listadoGeneros = document.querySelector(".listado-generos");
//     listadoGeneros.innerHTML += "<li><a href='genero.html?genero=" + respuesta.genres[i].id + "'>" + respuesta.genres[i].name + "</a></li>";
//     if(respuesta.genres[i].id == idGenero){
//       // console.log('hola');
//       var h1 = document.querySelector('.genreTitle')
//       h1.innerHTML = respuesta.genres[i].name
//     }
//   }
//
// })
