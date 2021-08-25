import {
  Map,
  tileLayer,
  marker,
  LatLng,
  MarkerClusterGroup,
} from "leaflet";
import "leaflet.markercluster";
import { addressPoints } from "./../../assets/data/markers/real-world-1000";
import { tileLayers } from "../../constants/tile-layer";
import { ATRIBUTION } from "../../constants/general";
// Inicializamos el mapa en el centro especificado
const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 12 });

// Añadimos la capa base
tileLayer(tileLayers.default, {
  maxZoom: 18,
  attribution: ATRIBUTION,
}).addTo(map);

/*addressPoints.map((drinkWater) => L.marker(drinkWater).addTo(map));

// Centrar el mapa teniendo en cuenta los dos marcadores (ahora tenemos que hacerlo respecto a todos)
// map.fitBounds([markerIpuruaStadium.getLatLng(), markerSoraluzeStadium.getLatLng()]);

// Con todos centramos y se visualiza correctamente

map.fitBounds([...addressPoints.map((location) => location)]);*/
// Inicializamoss para agrupar los marcadores
const markers = new MarkerClusterGroup();

// Recorremos los marcadores para agruparlos
for (let i = 0; i < addressPoints.length; i++) {
  const location = addressPoints[i];
  const title = location[2].toString();
  const markerItem = marker(new LatLng(+location[0], +location[1]));
  markerItem.bindPopup(`Ubicación(${title}): ${+location[0]}, ${+location[1]}`);
  markers.addLayer(markerItem);
}

markers.addTo(map);
map.fitBounds([
  ...addressPoints.map((location) => [location[0], location[1]] as [number, number]),
]);
