import { tileLayers, tileLayerSelect } from "../../config/tile-layer";
import { LatLng, Map, polygon, polyline } from "leaflet";
import { drinkWaterSoraluze } from "../../assets/data/markers/drink_water_soraluze";
import { antPath } from "leaflet-ant-path";

const map = new Map("map", {
  center: [43.175663, -2.412301],
  zoom: 6,
});

tileLayerSelect(tileLayers.baseLayers.cartoDb.positron).addTo(map);

const polygonElements: [number, number][] =[
  [43.197199, -2.417625], // Punto de arriba
  [43.165409, -2.385702],
  [43.164378, -2.440947], // Abajo a la derecha
];

const options = {
  use: polygon,
  delay: 400,
  dashArray: [10, 20],
  weight: 5,
  color: "#0000FF",
  pulseColor: "#FFFFFF",
};
const path = antPath(polygonElements, options);
path.addTo(map);

map.on("click", function (e: { latlng: LatLng }) {
  console.log(`Estoy en la posición: ${e.latlng.toString()}`)
});
/**
 * 43.17992, -2.447373)
index.ts:31 Estoy en la posición: LatLng(43.180924, -2.379127)
index.ts:31 Estoy en la posición: LatLng(43.169962, -2.372646
 */
const polylinesExample: [number, number][] = [
  [43.17992, -2.447373],
  [43.180924, -2.379127],
  [43.169962, -2.372646]
];
// Sin darle vida con el trazado
// polyline(polylinesExample).addTo(map);

const optionsPolylines = {
  use: polyline,
  delay: 1000,
  dashArray: [10, 20],
  weight: 5,
  color: "#8A1123",
  pulseColor: "#BDB739",
};
const pathPolylines = antPath(polylinesExample, optionsPolylines);
pathPolylines.addTo(map);

map.fitBounds([
  ...polygonElements
])