window.onload = function () {

  var query = new URLSearchParams(location.search)

 var genreId = query.get('id')

 fetch("https://api.themoviedb.org/3/discover/tv?api_key=310e7e56f84e1bd28bcf90582689ab22&with_genres="+genreId)
 .then(function(r){
   return r.json()
 })
 .then(function(resultado){
   console.log(resultado)
   for (var i = 0; i < resultado.results.length; i++) {
     console.log(resultado.results[i].name)
   }
 })
 .catch(function(e){
   console.log(e);
 })

 window.alert("Error");
 alert("Error");







}
