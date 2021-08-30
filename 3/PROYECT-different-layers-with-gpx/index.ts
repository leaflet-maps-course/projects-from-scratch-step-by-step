import { ATRIBUTION } from "../../constants/general";
import { tileLayers } from "../../config/tile-layer";
import gpxParser from "gpxparser";
import axios from "axios";
import { tileLayer, Map, polyline } from "leaflet";

// 1.- Abrir el contenido del fichero y enviarlo como string
axios
  .get(
    "https://raw.githubusercontent.com/leaflet-maps-course/resources/main/tracks/jabali_trail_2016_1.gpx"
  )
  .then((result) => addPoints(result.data));

// add Point in view
function addPoints(gpxData: string) {
  // 2.- Resultado de la carga del fichero
  console.log("FICHERO GPX");
  console.log("==============");
  // 3.- console.log(gpxData);

  // 4.- Parsear con GPX Parse
  const gpx = new gpxParser();
  gpx.parse(gpxData);
  // 5.- Analizar la información de gpx
  console.log(gpx);
  // 6.- Ahora que ya sabemos que la información del track está en "tracks[0]" lo analizamos
  console.log(gpx.tracks[0]);
  // 7.- Cogemos los puntos para analizarlo
  const points = gpx.tracks[0].points;
  // 8.- Visualizamos los puntos
  drawTrack(points);
}

// 9.- Ahora lo que nos queda es mostrarlo en un mapa bieen dibujado con polylines
// 9.- Inicializar mapa con lo básico
function initializeMap() {
  const mapLayout = new Map("map", {
    center: [43.1736976, -2.4173474],
    zoom: 15,
  });

  tileLayer(tileLayers.hot, {
    maxZoom: 20,
    attribution: ATRIBUTION,
  }).addTo(mapLayout);
  return mapLayout;
}

// 10.- Dibujar en el mapa los puntos (en el siguiente proyecto)
function drawTrack(trackPoints: Array<{lat: number, lon: number}>) {
  const mapLayout = initializeMap();
  const coordinates: [number, number][] = trackPoints.map((p) => [
    +p.lat.toFixed(5),
    +p.lon.toFixed(5),
  ]);

  const polylineItem = polyline(coordinates, { weight: 5, color: "green", lineJoin: "bevel" }).addTo(
    mapLayout
  );

  // zoom the map to the polyline
  mapLayout.fitBounds(polylineItem.getBounds());
}
