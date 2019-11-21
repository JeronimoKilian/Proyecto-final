window.onload = function() {
  //Paso 1: Leo Storage

  var recuperoStorage = localStorage.getItem("seriesfavoritas");
console.log(recuperoStorage);
  // Si todavía no tenía gifs favoritos
  if (recuperoStorage == null) {
    // Creo una lista vacia
   seriesfavoritas = [];
  } else {
    // Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
     seriesfavoritas = JSON.parse(recuperoStorage);
  }
  console.log(recuperoStorage);
  for (var i = 0; i < seriesfavoritas.length; i++) {
    // BUSCAR ESE GIF Y MOSTRARLO
    fetch("https://api.themoviedb.org/3/tv/" + seriesfavoritas[i] + "?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US")
      .then(function(response) {
        return response.json();
      })
      .then(function(serie) {

          console.log(serie);
          // var laSerie = '<div>'
          var prepath = 'https://image.tmdb.org/t/p/original'
          //  laSerie += '<a href="detalle.html?idDeSerie='+'">'
          // laSerie   +=     '<img src="'+prepath+laSerie.poster_path+'" alt="">'
          // laSerie   +=     '</a> </div>'




        var ul = document.querySelector(".uk-slider-items")
          var li = '<li>'
          li +=   '<a href="favoritos.html?idDeSerie=' +serie.id + '">'
          li +=     '<img src="'+ prepath + serie.poster_path+'" alt="">'
          li +=     '<div class="uk-position-center uk-panel"><h1></h1></div>'
          li +=   '</a>'
          li += '</li>'
          ul.innerHTML += li
      })
  }
}
