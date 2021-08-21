
// 1.- Abrir el ccontenido del fichero y convertirlo a un string
const openGPXFile = new Promise((resolve, reject) => {
  fetch("./etapa_1_2_hh.gpx").then(function (response) {
      //
    resolve(response.text());
  }).catch((error) => reject(error));
});

// 9.- Inicializar mapa con lo básico
function initializeMap() {
  const mapLayout = L.map("map", { center: [43.1736976, -2.4173474], zoom: 15 });

  L.tileLayer(tileLayers.hot, {
    maxZoom: 20,
    attribution: ATRIBUTION,
  }).addTo(mapLayout);
  return mapLayout;
}

// 10.- Dibujar en el mapa los puntos (en el siguiente proyecto)
function drawTrack(trackPoints) {
  const mapLayout = initializeMap();
  let coordinates = trackPoints.map(p => [p.lat.toFixed(5), p.lon.toFixed(5)]);

  var polyline = L.polyline(coordinates, { weight: 2, color: 'black' }).addTo(mapLayout);

  // zoom the map to the polyline
  mapLayout.fitBounds(polyline.getBounds());
}

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
  // points.map((point) => console.log(point.lat, point.lon));

  drawTrack(points);
});

