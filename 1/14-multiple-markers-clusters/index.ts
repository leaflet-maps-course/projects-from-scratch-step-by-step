import {
  Map,
  marker,
  LatLng,
  MarkerClusterGroup,
  circleMarker
} from "leaflet";
import "leaflet.markercluster";
import { addressPointsMore } from "../../assets/data/markers/real-world-25002";
import { tileLayers, tileLayerSelect } from "../../config/tile-layer";
// Inicializamos el mapa en el centro especificado
const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 12 });

// Añadimos la capa base
tileLayerSelect(tileLayers.baseLayers.stadiaAlidadeSmooth).addTo(map);

// Inicializamoss para agrupar los marcadores
const markers = new MarkerClusterGroup();

// Recorremos los marcadores para agruparlos
for (let i = 0; i < addressPointsMore.length; i++) {
  const location = addressPointsMore[i];
  const title = location[2].toString();
  let markerLocation;
  if (i % 2 === 0) {
    markerLocation = marker(new LatLng(+location[0], +location[1]));
  } else {
    // Hacemos con un marcador circular de una ubicación cercana
    markerLocation = circleMarker( new LatLng(+location[0], +location[1]), {
      radius: 20,
      fillColor: "green",
      fillOpacity: 0.7,
      color: "purple"
    })
  }
  markerLocation.bindPopup(`Ubicación(${title}): ${+location[0]}, ${+location[1]}`);
  markers.addLayer(markerLocation);
}

markers.addTo(map);
map.fitBounds([
  ...addressPointsMore.map((location) => [location[0], location[1]] as [number, number]),
]);
