import { Map, marker, Point } from "leaflet";
import { tileLayers, tileLayerSelect } from "../../config/tile-layer";

// Inicializamos el mapa en el centro especificado
const map =new Map("map", { center: [43.1736976, -2.4173474], zoom: 18 });

// Añadimos la capa base
tileLayerSelect(tileLayers.baseLayers.hikeBike).addTo(map);

const soraStadiumPhoto =
  "https://raw.githubusercontent.com/leaflet-maps-course/resources/main/img/football-stadiums/ezozia.jpeg";

// Añadimos el marcador
const markerSoraluzeStadium = marker([43.180930, -2.421315]).bindTooltip(
    `
  <h2 style="text-align=center">Ezozia Futbol Zelaia</h2>
  <img src="${soraStadiumPhoto}" />
  `
  ).addTo(map);

  const ipuruaStadiumPhoto =
  "https://raw.githubusercontent.com/leaflet-maps-course/resources/main/img/football-stadiums/ipurua.jpg";
const markerIpuruaStadium = marker([43.1817416,-2.4780567]).bindTooltip(
  `
  <h2 style="text-align=center">Ipurua Futbol Zelaia</h2>
  <img src="${ipuruaStadiumPhoto}" />,
  `
, { direction: 'top').addTo(map);

// Centrar el mapa teniendo en cuenta los dos marcadores
map.fitBounds([
    [markerIpuruaStadium.getLatLng().lat, markerIpuruaStadium.getLatLng().lng], 
    [markerSoraluzeStadium.getLatLng().lat, markerSoraluzeStadium.getLatLng().lng]
]);