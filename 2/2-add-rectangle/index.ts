import { Map, tileLayer, rectangle, LatLngBounds } from "leaflet";
import { tileLayers } from "../../config/tile-layer";
import { ATRIBUTION } from "../../constants/general";

const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 12 });
tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

// + info:
// https://leafletjs.com/reference-1.7.1.html#rectangle

// Definimos el área geográfica del que va estar en el mapa
// Importante tener en cuenta lo siguiente
// https://leafletjs.com/reference-1.7.1.html#latlngbounds
const bounds = new LatLngBounds([
  [43.2, -2.273474],
  [43.1736979, -2.4173475],
]);

// Crear un rectángulo naranja a partir de los límites especificados
const rectangleOne = rectangle(bounds, {
  color: "#ff7800",
  weight: 1,
  stroke: true,
}).addTo(map);

// Hacemos zoom y centramos al área que que queremos movernos
// Esto lo usamos si dibujamos un rectángulo, si no, usamos la ubicación inicial
// al crear el mapa
// Al estar con un rectángulo,
// vamos a coger la zona que ocupa haciendo un rectangulo imaginario donde obtenemos
// las coordenadas de arriba-izquierda, arriba-derecha, abajo-izquierda y abajo-derecha
// Con coger por ejemplo Norte-Este y Sur-Oeste, ya acota el rectángulo
map.fitBounds([
  [
    rectangleOne.getBounds().getNorthEast().lat,
    rectangleOne.getBounds().getNorthEast().lng,
  ],
  [
    rectangleOne.getBounds().getSouthWest().lat,
    rectangleOne.getBounds().getSouthWest().lng,
  ],
]);

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
