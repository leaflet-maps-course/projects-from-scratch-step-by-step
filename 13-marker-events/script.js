// Inicializamos el mapa en el centro especificado
const map = L.map("map", { center: [43.1736976, -2.4173474], zoom: 12 });

// Añadimos la capa base
L.tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

// Añadimos el marcador
const marker = L.marker([43.180930, -2.421315], {
  draggable: true
}).addTo(map);

/** Eventos del marcador - no heredados */
// Estos funcionan si el marcador es "draggable"
marker.on('dragstart', () => {
  console.log('Empezamos a arrastrar (se ejecuta una vez)');
});

marker.on('drag', () => {
  console.log('Mientras se está arrastrando se va mostrando');
});

marker.on('dragend', () => {
  console.log('Finalizamos arrastrar (se ejecuta una vez)');
});

marker.on('movestart', () => {
  console.log('Empezamos a mover (se ejecuta una vez)');
});

marker.on('moveend', () => {
  console.log('Finalizamos de mover (se ejecuta una vez)');
});

// Eventos heredados (Trabajando con el ratón)

marker.on('click', () => {
  console.log('Un click');
});

marker.on('dblclick', () => {
  console.log("Dos clicks seguidos");
});

marker.on('mousedown', () => {
  console.log("Haciendo click sobre el marcador");
});

marker.on('mouseup', () => {
  console.log("Dejar de estar pulsando sobre el marcador");
});

marker.on('mouseover', () => {
  console.log("Cursor sobre el marcador");
});

marker.on('mouseout', () => {
  console.log("Cursor fuera del marcador");
});


// Centrar el mapa teniendo en cuenta el marcador
map.fitBounds([marker.getLatLng()]);