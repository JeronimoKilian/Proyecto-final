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
      .then(function(gif) {

        document.querySelector("ul").innerHTML += "<li><h3><a href=favoritos.html?idGif=" + gif.data.id + ">" + gif.data.title + "</a></h3><img src=" + gif.data.images.original.url + "></li>";
      })
  }
}
