import { Map, marker } from "leaflet";
import { tileLayers } from "../../config/tile-layers/data";
import { tileLayerSelect } from "../../config/tile-layers/functions";


// Inicializamos el mapa en el centro especificado
const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 12 });

// Añadimos la capa base
tileLayerSelect(tileLayers.baseLayers.cartoDb.map.positron).addTo(map);

// Añadimos el marcador
const markerEiffel = marker([48.8588336,2.276995]).addTo(map);

const markerNotreDame = marker([48.8502366,2.3196071]).addTo(map);

// Centrar el mapa teniendo en cuenta los dos marcadores
// Da igual cual sea la ubicación inicial
// Función de los mapas
map.fitBounds([
  [markerNotreDame.getLatLng().lat, markerNotreDame.getLatLng().lng],
  [
    markerEiffel.getLatLng().lat,
    markerEiffel.getLatLng().lng,
  ],
]);
