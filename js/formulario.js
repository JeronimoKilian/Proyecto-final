window.addEventListener("load", function() {

  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta) {
    for (var i = 0; i < respuesta.genres.length; i++) {
      var selectGeneros = document.querySelector(".campoGenero");
      selectGeneros.innerHTML += "<option value='"+respuesta.genres[i].id+"' >" + respuesta.genres[i].name + "</option>";

    }

    for (var i = 0; i < respuesta.genres.length; i++) {
      var selectGeneros = document.querySelector(".campoGeneroExcluir");
      // PONGO EN ATRIBUTO DEL OPTION EL VALUE PARA PODER DESPUES LEVANTARLO EN LA VALIDACION
      selectGeneros.innerHTML += "<option value='"+respuesta.genres[i].id+"' >" + respuesta.genres[i].name + "</option>";

    }

  })


  document.getElementById('busqueda-avanzada').onclick = function(){
    document.querySelectorAll(".buscAvanzada").forEach((element)=>{
      element.style.display= "block";
    })

  }
document.getElementById('form-avanzado').onsubmit= function (event){
  event.preventDefault();

  var genero1 = document.querySelector(".campoGenero")
  var genero1opciones = genero1.options; // ES UN ARRAY
  var indexgenero1elegido = genero1.selectedIndex; // EL INDEX DE ESE ARRAY QUE ESTA ELEGIDO
  var genero1optionelement = genero1opciones[indexgenero1elegido];
  var genero1optionelementvalue = genero1optionelement.value;//VALOR!!
  console.log('OPCIONES DEL SELECT')
  console.log(genero1opciones)
  console.log('INDEX ELEGIDO')
  console.log(indexgenero1elegido)
  console.log('ELEMENTO OPTION')
  console.log(genero1optionelement)
  console.log('EL VALOR ELEGIDO')
  console.log(genero1optionelementvalue)

  var genero2 =document.querySelector(".campoGeneroExcluir")
  var genero2opciones = genero2.options;
  var indexgenero2elegido= genero2.selectedIndex;
  var genero2optionelement= genero2opciones [indexgenero2elegido];
  var genero2optionelementvalue= genero2optionelement.value;//VALOR!!

  var orden = document.querySelector (".Orden")
  var ordenopciones = orden.options;
  var indexordenelegido= orden.selectedIndex;
  var ordenoptionelement= ordenopciones [indexordenelegido];
  var ordenoptionelementvalue= ordenoptionelement.value;//VALOR!!

  var anoestreno = document.querySelector(".Anoestreno");
  var anoestrenovalue =  anoestreno.value; //VALOR!!
  // igual a nada Y igual a nada Y igual a nada ....
  if(genero1optionelementvalue == '' &&
    genero2optionelementvalue == '' &&
    ordenoptionelementvalue == '' &&
    anoestrenovalue == ''
  ){
     alert('NO PUEDEN SER TODOS LOS CAMPOS VACIOS')
     return;
  }

  if(genero1optionelementvalue != '' &&
    genero2optionelementvalue != ''){
      alert('ELIJA SOLO UN CAMPO DE GENERO');
      return;
  }

  // ACA ESTA TODO OK VALIDADO Y MANDO EL FORM
  document.getElementById('form-avanzado').submit();

}

fetch("https://api.themoviedb.org/3/discover/tv?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US&with_genres="+ idGenero)
.then(function(r){
return r.json()
})
.then(function(data){
  // console.log(data)
  var series = data.results
  var prepath = 'https://image.tmdb.org/t/p/original/'
  // console.log(pelis);
  var ul = document.querySelector(".slide-series")
  for (var i = 0; i < series.length; i++) {
    var a = '<a href="detalle.html?idDeSerie='+ series[i].id + '">'
    a += '<li>'
    a += '<img src="'+prepath+series[i].poster_path+'" alt="">'
    a += '<div class="uk-position-center uk-panel"><h1>'+'</h1></div>'
    a += '</li>'
    a += '</a>'
    ul.innerHTML += a;
  }
})




/*

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
  */
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
/*
var theSelect = document.querySelector("select");
var allTheOptions = theSelect.options;
var optionSelected= theSelect.selectedIndex;
console.log (optionSelected);
console.log (allTheOptions[optionSelected]);
console.log (this.options [this.selectedIndex].value);

//theSelect.addEventListener ("change", function()



fetch ("https://api.themoviedb.org/3/discover/tv?api_key=64473b4750029f7eee1095d5f01e52e7&<<api_key>>&sort_by=vote_average.asc&first_air_date_year=12345&with_genres=234567&without_genres=34567&include_null_first_air_dates=false")
*/
//function validacion() {
  //if () {
    //alert('[ERROR] Debes escribir algo en los campos');
    //return false;
  //}
  //else if () {
    //alert('[ERROR] Debes escribir algo en los campos');
  //  return false;
  //}
  //else if () {
  //  alert('[ERROR] Debes escribir algo en los campos');
    //return false;
  //}

  //return true;
//}
