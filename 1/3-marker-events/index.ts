import { Map, marker } from "leaflet";
import { tileLayers } from "../../config/tile-layers/data";
import { tileLayerSelect } from "../../config/tile-layers/functions";

// Inicializamos el mapa en el centro especificado
// Chamonix
const map = new Map("map", { center: [45.9295043,6.7890115], zoom: 12 });

// Añadimos la capa base
tileLayerSelect(tileLayers.baseLayers.osmHot.map).addTo(map);

// Añadimos el marcador y lo hacemos arrastrable
const markerItem = marker([45.9224106,6.8656577], {
  draggable: true
}).addTo(map);

/** Eventos del marcador - no heredados */
// https://leafletjs.com/reference-1.7.1.html#marker
// Estos funcionan si el marcador es "draggable"
markerItem.on("dragstart", () => {
  console.log("Empezamos a arrastrar (se ejecuta una vez)");
});

markerItem.on("drag", () => {
  console.log("Mientras se está arrastrando se va mostrando");
});

markerItem.on("dragend", () => {
  console.log("Finalizamos arrastrar (se ejecuta una vez)");
});

markerItem.on("movestart", () => {
  console.log("Empezamos a mover (se ejecuta una vez)");
});

markerItem.on("moveend", () => {
  console.log("Finalizamos de mover (se ejecuta una vez)");
});

// Eventos heredados (Trabajando con el ratón)

markerItem.on("click", () => {
  console.log("Un click");
});

markerItem.on("dblclick", () => {
  console.log("Dos clicks seguidos");
});

markerItem.on("mousedown", () => {
  console.log("Haciendo click sobre el marcador");
});

markerItem.on("mouseup", () => {
  console.log("Dejar de estar pulsando sobre el marcador");
});

markerItem.on("mouseover", () => {
  console.log("Cursor sobre el marcador");
});

markerItem.on("mouseout", () => {
  console.log("Cursor fuera del marcador");
});


map.fitBounds([
  [markerItem.getLatLng().lat, markerItem.getLatLng().lng]
]);