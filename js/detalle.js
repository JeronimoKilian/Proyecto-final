window.addEventListener('load',function(){

var urlSearchParams  = (new URL(document.location)).searchParams
var idDeSerie = urlSearchParams.get('idDeSerie')
console.log(idDeSerie);
fetch("https://api.themoviedb.org/3/tv/" + id + "?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US")
.then(function(response) {
  return response.json();
})















})
