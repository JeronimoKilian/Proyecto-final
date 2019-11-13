window.addEventListener('load',function(){
  var URL_POPULARES = "https://api.themoviedb.org/3/tv/popular?api_key=310e7e56f84e1bd28bcf90582689ab22&language=en-US&page=1"
  fetch(URL_POPULARES)
  .then(function(string_respuesta){
    // console.log(string_respuesta);
    return string_respuesta.json()
  })
  .then(function(objeto_respuesta){
      console.log(objeto_respuesta);
      // objeto_respuesta es un objeto
      // el objeto tiene un atributo llamado results, que es un array
      // el array tiene en cada posicion un objeto (serie)
      var arrayDeSeriesPopulares = objeto_respuesta.results;
      //capturo del HTML el UL para insertar como LI cada serie.
      var ul = document.querySelector("ul.listado-populares")
      var li = ''
      var prepath = 'https://image.tmdb.org/t/p/original'

// arrayDeSeriesPopulares[x]
// i++ === i = i + 1

      // tengo que acceder a cada elemnto del array, que es un objeto (serie).
      // tengo que recorrer el array, arrancando por el primero y termino en el ultimo.
      for (var i = 0; i < arrayDeSeriesPopulares.length; i++) {
            li = '<li>'
            li +=   '<a href="detalle.html?idDeSerie=' +arrayDeSeriesPopulares[i].id  + '">'
            li +=  '<img src="'+prepath+ arrayDeSeriesPopulares[i].poster_path+'" alt="">'
            li +=  '<div class="uk-position-center uk-panel"><h1></h1></div>'
            li +=   '</a>'
            li += '</li>'
        ul.innerHTML += li
      }
  })
  .catch(function(e){
    alert("Lo sentimos, hubo un error. Por favor, vuelve a intentarlo nuevamente en unos segundos.")
  })




})
