import { Map, marker } from "leaflet";
import { tileLayers, tileLayerSelect } from "../../config/tile-layer";

// Inicializamos el mapa en el centro especificado
const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 12 });

// Añadimos la capa base
tileLayerSelect(tileLayers.baseLayers.cartoDb.positron).addTo(map);

// Añadimos el marcador
const markerSoraluzeStadium = marker([43.18093, -2.421315]).addTo(map);

const markerIpuruaStadium = marker([43.1817416, -2.4780567]).addTo(map);

// Centrar el mapa teniendo en cuenta los dos marcadores
map.fitBounds([
  [markerIpuruaStadium.getLatLng().lat, markerIpuruaStadium.getLatLng().lng],
  [
    markerSoraluzeStadium.getLatLng().lat,
    markerSoraluzeStadium.getLatLng().lng,
  ],
]);
