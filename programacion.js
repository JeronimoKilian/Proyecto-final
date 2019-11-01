window.onload = function(){
  fetch("https://api.themoviedb.org/3/tv/popular?api_key=310e7e56f84e1bd28bcf90582689ab22&language=en-US&page=1")
  .then(function(r){
    return r.json()
  })
  .then(function(data){
      var populares = data.genres;
      for (var i = 0; i < populares.length; i++) {
          document.querySelector("ul.listado-series").innerHTML += '<li><a href="#">' + series[i].name + '</a></li>'
      }
  })
  .catch(function(e){
    console.log(e);
  })

  fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=310e7e56f84e1bd28bcf90582689ab22&language=en-US&page=1")
  .then(function(r){
    return r.json()
  })

    .then(function(data){
        var mejorespunteadas = data.genres;
        for (var i = 0; i < mejorespunteadas.length; i++) {
            document.querySelector("ul.listado-series").innerHTML += '<li><a href="#">' +series[i].name + '</a></li>'
          }
  })
  .catch(function(e){
    console.log(e);
  })

  fetch(
"https://api.themoviedb.org/3/tv/airing_today?api_key=310e7e56f84e1bd28bcf90582689ab22&language=en-US&page=1")
  .then(function(r){
    return r.json()
  })

    .then(function(data){
        var envivo = data.genres;
        for (var i = 0; i < envivo.length; i++) {
            document.querySelector("ul.listado-series").innerHTML += '<li><a href="#">' +series[i].name + '</a></li>'
          }
  })
  .catch(function(e){
    console.log(e);
  })


  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=310e7e56f84e1bd28bcf90582689ab22&language=en-US")
  .then(function(r){
    return r.json()
  })
  .then(function(resultado){
    var genres = resultado.genres;
    for (var i = 0; i < genres.length; i++) {
        document.querySelector("ul.listado-generos").innerHTML += '<li><a href="#">' + genres[i].name + '</a></li>'
    }
  })
  .catch(function(e){
    console.log(e);
  })
}
