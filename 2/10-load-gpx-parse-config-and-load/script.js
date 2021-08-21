console.log("Kaixo");

// 1.- Abrir el ccontenido del fichero y convertirlo a un string
const openGPXFile = new Promise((resolve, reject) => {
  fetch("./track.gpx").then(function (response) {
      //
    resolve(response.text());
  }).catch((error) => reject(error));
});

// 9.- Dibujar en el mapa los puntos (en el siguiente proyecto)


openGPXFile.then((gpxData) => {
  // 2.- Resultado de la carga del fichero
  console.log("FICHERO GPX");
  console.log("==============");
  // 3.- console.log(gpxData);

  // 4.- Parsear con GPX Parse
  let gpx = new gpxParser();
  gpx.parse(gpxData);
  // 5.- Analizar la información de gpx
  console.log(gpx);
  // 6.- Ahora que ya sabemos que la información del track está en "tracks[0]" lo analizamos
  console.log(gpx.tracks[0]);
  // 7.- Cogemos los puntos para analizarlo
  const points = gpx.tracks[0].points;
  // 8.- Visualizamos los puntos
  var paragraph = document.getElementById("points");
  points.map((point) => {
    console.log(point.lat, point.lon)
    
    var text = document.createTextNode(`${point.lat}, ${point.lon}`);

    paragraph.appendChild(text);
  });
});

