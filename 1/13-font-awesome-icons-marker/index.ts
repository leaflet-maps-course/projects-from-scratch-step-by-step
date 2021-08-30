import { Map, marker, divIcon } from "leaflet";
import { tileLayers, tileLayerSelect } from "../../config/tile-layer";
// Inicializamos el mapa en el centro especificado
const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 12 });

// Añadimos la capa base
tileLayerSelect(tileLayers.baseLayers.osmManik).addTo(map);
tileLayerSelect(tileLayers.overlayers.wayMarkedTrails.hiking).addTo(map);

// Documentación asociada:
// https://leafletjs.com/reference-1.7.1.html#icon
const divIconDrinkWater = divIcon({
  className: "custom-div-icon",
  // Añadir el contenido HTML del marcador con el icono, podría ser cualquier sigla
  html: "<div class='marker-pin blue'></div><i class=\"fas fa-faucet\"></i>",
  iconSize: [30, 42],
  iconAnchor: [15, 42], // Recordad que eje x del anchor será la mitad que el tamaño del icono
});

const divIConFootball = divIcon({
  className: "custom-div-icon",
  html: "<div class='marker-pin green'></div><i class=\"far fa-futbol\"></i>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
});

const townCentre = divIcon({
  className: "custom-div-icon",
  html: "<div class='marker-pin purple'></div><span>TC</span>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
})

const markerGreen = marker([43.172286, -2.4117188], {
  icon: divIconDrinkWater,
}).addTo(map);

// Añadimos el marcador
const markerSoraluzeStadium = marker([43.18093, -2.421315], {
  icon: divIConFootball,
}).addTo(map);

const markerIpuruaStadium = marker([43.1817416, -2.4780567], {
  icon: divIConFootball,
}).addTo(map);

// Usando icono con texto
marker([43.1736976, -2.4173474], {
  icon: townCentre,
}).addTo(map);

// Centrar el mapa teniendo en cuenta los dos marcadores
map.fitBounds([
  [markerIpuruaStadium.getLatLng().lat, markerIpuruaStadium.getLatLng().lng],
  [
    markerSoraluzeStadium.getLatLng().lat,
    markerSoraluzeStadium.getLatLng().lng,
  ],
  [markerGreen.getLatLng().lat, markerGreen.getLatLng().lng],
]);
