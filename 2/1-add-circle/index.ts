import { Map, circle } from "leaflet";
import { tileLayers, tileLayerSelect } from "./../../config/tile-layer";

const map = new Map("map", { center: [43.1998468 , -2.2865083], zoom: 17 });

tileLayerSelect(tileLayers.baseLayers.hikeBike).addTo(map);


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
circle([43.1998468 , -2.2865083], optionsCircle)
.bindTooltip("Xoxote (912m)", {
  direction: 'top'
}).addTo(map);


