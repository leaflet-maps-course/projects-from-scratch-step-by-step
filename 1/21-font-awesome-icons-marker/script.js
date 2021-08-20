// Inicializamos el mapa en el centro especificado
const map = L.map("map", { center: [43.1736976, -2.4173474], zoom: 12 });

// Añadimos la capa base
L.tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

const divIconDrinkWater = L.divIcon({
  className: "custom-div-icon",
  html: "<div class='marker-pin blue'></div><i class=\"fas fa-faucet\"></i>",
  iconSize: [30, 42],
  iconAnchor: [15, 42], // Recordad que
});

const divIConFootball = L.divIcon({
  className: "custom-div-icon",
  html: "<div class='marker-pin green'></div><i class=\"far fa-futbol\"></i>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
});


const markerGreen = L.marker([43.172286, -2.4117188], {
  icon: divIconDrinkWater,
}).addTo(map);

// Añadimos el marcador
const markerSoraluzeStadium = L.marker([43.18093, -2.421315], {
  icon: divIConFootball,
}).addTo(map);

const markerIpuruaStadium = L.marker([43.1817416, -2.4780567], {icon: divIConFootball}).addTo(map);

// Centrar el mapa teniendo en cuenta los dos marcadores
map.fitBounds([
  markerIpuruaStadium.getLatLng(),
  markerSoraluzeStadium.getLatLng(),
  markerGreen.getLatLng(),
]);
