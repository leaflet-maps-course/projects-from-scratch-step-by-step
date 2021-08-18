
// Inicializamos el map en Soraluze (Gipuzkoa)
const map = L.map('map').setView([43.1736976,-2.4173474 ], 13);

// const map = L.map("map", { center: [43.1736976, -2.4173474], zoom: 12 });
L.tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

map.on('click', function(){alert("You clicked the map");});