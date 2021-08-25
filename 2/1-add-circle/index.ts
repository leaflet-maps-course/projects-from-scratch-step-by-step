import { Map, tileLayer, circle } from "leaflet";
import { tileLayers } from "./../../constants/tile-layer";
import { ATRIBUTION } from "./../../constants/general";

const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 12 });
tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution:
    ATRIBUTION
}).addTo(map);

// + info:
// https://leafletjs.com/reference-1.7.1.html#circle
// ===========================================================
// Crear un circulo naranja y añadirllo en el mapa
/**
 * radius: Radio del círculo en metros
 * stroke: borde
 * color: Color de borde
 * weight: Ancho del borde
 */
const optionsCircle = { radius: 20, color: "#ff7800", weight: 3, stroke: true };
const mainCircle = circle([43.1998468 , -2.2865083], optionsCircle).addTo(map);
map.fitBounds([
	[mainCircle.getBounds().getCenter().lat, mainCircle.getBounds().getCenter().lng]
]);