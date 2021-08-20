const map = L.map("map", { center: [43.1736976, -2.4173474], zoom: 12 });
L.tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION
}).addTo(map);

// + info:
// https://leafletjs.com/reference-1.7.1.html#rectangle
// ===========

// Definimos el área geográfica del que va estar en el mapa
const bounds = [
  [43.2, -2.273474],
  [43.1736979, -2.4173475],
];

// Crear un rectángulo naranja
const rectangleOne = L.rectangle(bounds, { color: "#ff7800", weight: 1, stroke: true }).addTo(map);

// Hacemos zoom y centramos al área que que queremos movernos
// Esto lo usamos si dibujamos un rectángulo, si no, usamos la ubicación inicial
// al crear el mapa
map.fitBounds(rectangleOne.getBounds());


/*
En este caso lo haríamos con dos rectángulos y centrado teniendo en cuenta los dos
const boundsTwo = [
	[42.8, -3.273474],
	[42.1736979, -2.3173475],
  ];
const rectangleTwo = L.rectangle(boundsTwo, { color: "#33FFEC", weight: 1, stroke: true }).addTo(map);

map.fitBounds([
	rectangleOne.getBounds(),
	rectangleTwo.getBounds()
]);*/