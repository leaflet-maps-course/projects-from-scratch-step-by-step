import { Map, tileLayer, marker, Icon } from "leaflet";
import { tileLayers } from "../../constants/tile-layer";
import { ATRIBUTION } from "../../constants/general";

// Inicializamos el mapa en el centro especificado
const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 12 });

// Añadimos la capa base
tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

var greenIcon = new Icon({
  iconUrl: 'https://github.com/pointhi/leaflet-color-markers/blob/master/img/marker-icon-2x-green.png?raw=true',
  shadowUrl: 'https://github.com/pointhi/leaflet-color-markers/blob/master/img/marker-shadow.png?raw=true',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var redIcon = new Icon({
  iconUrl: 'https://github.com/pointhi/leaflet-color-markers/blob/master/img/marker-icon-2x-red.png?raw=true',
  shadowUrl: 'https://github.com/pointhi/leaflet-color-markers/blob/master/img/marker-shadow.png?raw=true',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const markerGreen = marker([43.172286, -2.4117188], {icon: greenIcon}).addTo(map);

// Añadimos el marcador
const markerSoraluzeStadium = marker([43.180930, -2.421315], {icon: redIcon}).addTo(map);

const markerIpuruaStadium = marker([43.1817416,-2.4780567]).addTo(map);

// Centrar el mapa teniendo en cuenta los dos marcadores
map.fitBounds([
    [markerIpuruaStadium.getLatLng().lat, markerIpuruaStadium.getLatLng().lng], 
    [markerSoraluzeStadium.getLatLng().lat, markerSoraluzeStadium.getLatLng().lng], 
    [markerGreen.getLatLng().lat, markerGreen.getLatLng().lng]
]);