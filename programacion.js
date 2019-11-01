window.onload = function(){
  fetch("https://api.themoviedb.org/3/tv/popular?api_key=310e7e56f84e1bd28bcf90582689ab22&language=en-US&page=1")
  .then(function(r){
    return r.json()
  })
  .then(function(data){
    console.log(data);
  })
  .catch(function(e){
    console.log(e);
  })
}
window.onload = function(){
  fetch("")
  .then(function(r){
    return r.json()
  })
  .then(function(data){
    console.log(data);
  })
  .catch(function(e){
    console.log(e);
  })
}
