import {
  Map,
  DomEvent,
} from "leaflet";
import { tileLayers, tileLayerSelect } from "../../config/tile-layer";

const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 15 });
// https://leafletjs.com/reference-1.7.1.html#map-mousedown
// Con esto eliminamos el menú contextual que se genera con el click derecho
map.on("contextmenu", (e) => DomEvent.stopPropagation(e));

// Cuando hacemos click sobre el mapa
map.on("mousedown", (e) => console.log(e));
// Cuando dejamos de hacer click
map.on("mouseup", (e) => console.log(e));
// Cuando entra el cursor al mapa
map.on("mouseover", (e) => console.log(e));
// Cuando sale el cursor del mapa
map.on("mouseout", (e) => console.log(e));

tileLayerSelect(tileLayers.baseLayers.hikeBike).addTo(map);
