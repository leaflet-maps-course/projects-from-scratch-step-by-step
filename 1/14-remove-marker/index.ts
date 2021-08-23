import { Map, tileLayer, marker } from "leaflet";
import { tileLayers } from "./../../constants/tile-layer";
import { ATRIBUTION } from "./../../constants/general";

// Inicializamos el mapa en el centro especificado
const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 12 });

// Añadimos la capa base
tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

// Añadimos el marcador
const markerSoraluzeStadium = marker([43.180930, -2.421315], {draggable: true}).addTo(map);

const markerIpuruaStadium = marker([43.1817416,-2.4780567], {draggable: true}).addTo(map);

// Centrar el mapa teniendo en cuenta los dos marcadores
map.fitBounds([
  [markerIpuruaStadium.getLatLng().lat, markerIpuruaStadium.getLatLng().lng], 
  [markerSoraluzeStadium.getLatLng().lat, markerSoraluzeStadium.getLatLng().lng]
]);

// Podría ser lo mismo con "dragend"
markerIpuruaStadium.on('moveend', () => map.removeLayer(markerIpuruaStadium));
markerSoraluzeStadium.on('moveend', () => map.removeLayer(markerSoraluzeStadium));