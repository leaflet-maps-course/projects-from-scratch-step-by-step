import { Map, marker } from "leaflet";
import { tileLayers, tileLayerSelect } from "../../config/tile-layer";

// Inicializamos el mapa en el centro especificado
const map =new Map("map", { center: [43.1736976, -2.4173474], zoom: 18 });

// Añadimos la capa base
tileLayerSelect(tileLayers.baseLayers.hikeBike).addTo(map);


// Añadimos el marcador
const markerSoraluzeStadium = marker([43.180930, -2.421315]).bindPopup(
  `
  <h2 style="text-align=center">Ezozia Futbol Zelaia</h2>
  `
).addTo(map);

const markerIpuruaStadium = marker([43.1817416,-2.4780567]).bindPopup(
  `
  <h2 style="text-align=center">Ipurua Futbol Zelaia</h2>
  `
).addTo(map);

// Centrar el mapa teniendo en cuenta los dos marcadores
map.fitBounds([
    [markerIpuruaStadium.getLatLng().lat, markerIpuruaStadium.getLatLng().lng], 
    [markerSoraluzeStadium.getLatLng().lat, markerSoraluzeStadium.getLatLng().lng]
]);