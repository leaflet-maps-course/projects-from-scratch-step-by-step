const map = L.map("map", { center: [43.1736976, -2.4173474], zoom: 12 });
L.tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution:
    ATRIBUTION
}).addTo(map);

// + info:
// https://leafletjs.com/reference-1.7.1.html#rectangle
// ===========================================================
// Crear un circulos naranjas y añadirllo en el mapa
const optionsCircle = { radius: 450, color: "#ff7800", weight: 3, stroke: true };
const mainCircle = L.circle([43.2, -2.273474], optionsCircle).addTo(map);
map.fitBounds([
	mainCircle.getBounds()
]);

/**
 * Añadimos un segundo circulo y centramos el mapa respecto a los dos circulos
 
optionsCircle.color = "#C70039";
const secondCircle = L.circle([43.1736976, -2.4173474], optionsCircle).addTo(map);

// Hacemos zoom y centramos a la mitad de todos los puntos del área

map.fitBounds([
	mainCircle.getBounds(),
	secondCircle.getBounds()
]);

 */

optionsCircle.color = "#C70039";
const secondCircle = L.circle([43.1736976, -2.4173474], optionsCircle).addTo(map);

// Hacemos zoom y centramos a la mitad de todos los puntos del área

map.fitBounds([
	mainCircle.getBounds(),
	secondCircle.getBounds()
]);
