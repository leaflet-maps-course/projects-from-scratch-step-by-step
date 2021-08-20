const map = L.map("map", { center: [43.1736976, -2.4173474], zoom: 15 });
// const map = L.map('map').fitWorld();

// Con esto eliminamos el menú contextual que se genera con el click derecho
map.on('contextmenu', (e) => e.preventDefault());

// Cuando hacemos click para mover el mapa a donde queramos
map.on('mousedown', (e) => console.log(e));
// Cuando dejamos de hacer click para dejar de mover el mapa
map.on('mouseup', (e) => console.log(e));
// Cuando entra el cursor al mapa
map.on('mouseover', (e) => console.log(e));
// Cuando sale el cursor del mapa
map.on('mouseout', (e) => console.log(e));

L.tileLayer(tileLayers.hot, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);
