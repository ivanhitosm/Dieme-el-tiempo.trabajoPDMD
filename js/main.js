window.onload = function () {
  
  
  document.getElementById("Id_dimeElTiempo").addEventListener("click", getApiDatos );
  
    
};
function getApiDatos(evt) {
  evt.preventDefault();
  const Nombre =document.getElementById("Id_Nombre").value;
  if (Nombre.isNaN) {
    
  }
  const ciudad=document.getElementById("Id_Ciudad").value;
  const pais=document.getElementById("Id_Pais").value;
  const key = "0e8995adc473b7c7b7f328e59e7d93db";
  console.log(
    "https://api.openweathermap.org/data/2.5/weather?q= p" + {ciudad}+"," +{pais} +"&appid=" +{key} +"&lang=es"
  );
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      ciudad +
      "," +
      pais +
      "&appid=" +
      key +
      "&lang=es"
  )
    .then(function (resp) {
      return resp.json();
    }) // Convierte datos a json
    .then(function (datos) {
      escribeEnPantalla(datos); //activa la funcion para escribir los datos en pantalla
    })
    .catch((error) => {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Asegurate de que tu Pais y Ciudad son correctos',
        
      })
    });
}
function getUrl(Url){
  const ciudad=document.getElementById("IdCiudad").value;
  const pais=document.getElementById("IdPais").value;
  const key = "0e8995adc473b7c7b7f328e59e7d93db";
  console.log(Url);
  Url="https://api.openweathermap.org/data/2.5/weather?q=" +
  {ciudad }+
  "," +
  {pais} +
  "&appid=" +
  {key} +
  "&lang=es"
}
function escribeEnPantalla(d) {
  let celcius = Math.round(parseFloat(d.main.temp) - 273.15);
  let celciusmin = Math.round(parseFloat(d.main.temp_min) - 273.15);
  let celciusmax = Math.round(parseFloat(d.main.temp_max) - 273.15);
  document.getElementById("location").innerHTML ="Tiempo en : "+  d.name;
  document.getElementById("description").innerHTML =d.weather[0].description;
  document.getElementById("temp").innerHTML = celcius + "&deg; C";
  document.getElementById("min").innerHTML ="Min:"+ celciusmin + "&deg; C";
  document.getElementById("max").innerHTML ="Max:"+ celciusmax + "&deg; C";
  
  
  
}