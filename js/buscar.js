window.addEventListener('load', function(){

  var urlSearchParams  = (new URL(document.location)).searchParams
  var busqueda = urlSearchParams.get('busqueda')
  console.log(busqueda);

  // searchParameters: obtener lo que el usuario ingreso en el input "busqueda"
  var hola = "lkjasdkjldsajkldasjkldsjlkasa;"
  var url = "https://api.themoviedb.org/3/search/tv?api_key=64473b4750029f7eee1095d5f01e52e7&query=" + busqueda
  fetch(url)
  .then(function(respuesta) {
    return respuesta.json();
  })
  .then(function(informacion) {
    console.log(informacion.results);
    var arrayDeSeries =informacion.results

    for (var i=0; i < arrayDeSeries.length; i++) {
      var titulo = arrayDeSeries[i].original_name
      var poster = arrayDeSeries[i].poster_path
      var id = arrayDeSeries[i].id
      var resumen = arrayDeSeries[i].overview
      var fecha = arrayDeSeries[i].first_air_date
      var puntos = arrayDeSeries[i].vote_average


      var prepath = 'https://image.tmdb.org/t/p/original'
var ul = document.querySelector(".busqueda-contenedor ul")
            var li = '<li>'
            li +=   '<a href="detalle.html?idDeSerie=' +id + '">'
            li +=     '<img src="'+ prepath + poster+'" alt="">'
            li +=     '<div class="uk-position-center uk-panel"><h1></h1></div>'
            li +=   '</a>'
            li += '</li>'
        ul.innerHTML += li




 }
  })
});
