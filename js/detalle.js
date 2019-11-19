window.addEventListener('load',function(){

  var urlSearchParams  = (new URL(document.location)).searchParams
  var idDeSerie = urlSearchParams.get('idDeSerie')
  console.log(idDeSerie);
  fetch("https://api.themoviedb.org/3/tv/" + idDeSerie + "?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US")
  .then(function(response) {
    return response.json();
  })
  .then(function(resultado){
    console.log(resultado)
    console.log(resultado.name)
    console.log(resultado.overview)
    console.log(resultado.genres)
    console.log(resultado.languages)
    console.log(resultado.poster_path)
    console.log(resultado.episode_run_time)
    console.log(resultado.next_episode_to_air)
    console.log(resultado.first_air_date)
    console.log(resultado.created_by)
    console.log(resultado.origin_country)
    console.log(resultado.original_language)
    console.log(resultado.popularity)
    console.log(resultado.seasons)
    console.log(resultado.number_of_episodes)
    console.log(resultado.number_of_seasons)
    console.log(resultado.homepage)
    console.log(resultado.status)
    console.log(resultado.vote_average)
    var li = ''
    var prepath = 'https://image.tmdb.org/t/p/original'
    var ul = document.querySelector(".poster").src = prepath + resultado.poster_path

      li += '<img src="'+prepath+ resultado.poster_path+ ' alt="">'
      console.log(li);
      document.querySelector(".tituloserie").innerHTML=resultado.name
      document.querySelector('.sinopsis').innerHTML=resultado.overview
      document.querySelector('.estreno').innerHTML=resultado.first_air_date
      document.querySelector('.language').innerHTML=resultado.original_language
      for (var i = 0; i < resultado.genres.length; i++) {
        document.querySelector(".generos ul").innerHTML+= "<li>" + resultado.genres[i].name + "</li>"

      }




  })

  fetch ("https://api.themoviedb.org/3/tv/" + idDeSerie + "/recommendations?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US&page=1" )
  .then(function(string_respuesta){
    // console.log(string_respuesta);
    return string_respuesta.json()
  })
  .then(function(objeto_respuesta){
      console.log(objeto_respuesta);
      // objeto_respuesta es un objeto
      // el objeto tiene un atributo llamado results, que es un array
      // el array tiene en cada posicion un objeto (serie)
      var arrayDeRecomendaciones = objeto_respuesta.results;
      //capturo del HTML el UL para insertar como LI cada serie.
      var ul = document.querySelector("ul.recomendaciones")
      var li = ''
      var prepath = 'https://image.tmdb.org/t/p/original'

  // arrayDeSeriesPopulares[x]
  // i++ === i = i + 1

      // tengo que acceder a cada elemnto del array, que es un objeto (serie).
      // tengo que recorrer el array, arrancando por el primero y termino en el ultimo.
      for (var i = 0; i < arrayDeRecomendaciones.length; i++) {
            li = '<li>'
            li +=   '<a href="detalle.html?idDeSerie=' +arrayDeRecomendaciones[i].id  + '">'
            li +=     '<img src="'+prepath+ arrayDeRecomendaciones[i].poster_path+'" alt="">'
            li +=     '<div class="uk-position-center uk-panel"><h1></h1></div>'
            li +=   '</a>'
            li += '</li>'
        ul.innerHTML += li
      }
  })


  //trailer

  fetch ("https://api.themoviedb.org/3/tv/" + idDeSerie+ "/videos?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US")
  .then(function(response) {
    return response.json();
  })
  .then(function(datos){
    console.log(datos);
    for (var i = 0; i < datos.results.length; i++) {
    var key = datos.results[i].key
    var youtube = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + key + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    var trailer = document.querySelector(".trailer").innerHTML += youtube
    console.log(youtube);
  }
  })


})
//recomendaciones


//Favoritos
var recuperoStorage = localStorage.getItem("seriesfavoritas");

// Si todavía no tenía gifs favoritos
if (recuperoStorage == null) {
  // Creo una lista vacia
  seriesfavoritas = [];
} else {
  // Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
  seriesfavoritas = JSON.parse(recuperoStorage);
}

var datos = new URLSearchParams(location.search);
var seriesfavoritas = datos.get("seriesfavoritas");

if (gifsFavoritos.includes(idGif)) {
  document.querySelector("button").innerHTML = "QUITAR DE FAVORITOS";
}
document.querySelector("button").onclick = function() {


  //Paso 2: Modificar la informacion
  // Si el gif ya era favorito
  if (gifsFavoritos.includes(idGif)) {
    // Lo quito
    var index = gifsFavoritos.indexOf(idGif);
    gifsFavoritos.splice(index, 1);
    document.querySelector("button").innerHTML = "AGREGAR FAVORITO";
  } else {
    //Lo agrego
    gifsFavoritos.push(idGif);
    document.querySelector("button").innerHTML = "QUITAR DE FAVORITOS";
  }


  //Paso 3: Escribir en storage
  var infoParaStorage = JSON.stringify(gifsFavoritos);
  localStorage.setItem("gifsFavoritos", infoParaStorage);
  console.log(localStorage);
}
