import { Map, tileLayer, marker } from "leaflet";
import { tileLayers } from "./../../constants/tile-layer";
import { ATRIBUTION } from "./../../constants/general";
// Inicializamos el mapa en el centro especificado
const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 12 });

// Añadimos la capa base
tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

// Añadimos el marcador
const markerItem = marker([43.180930, -2.421315], {
  draggable: true
}).addTo(map);

/** Eventos del marcador - no heredados */
// Estos funcionan si el marcador es "draggable"
markerItem.on('dragstart', () => {
  console.log('Empezamos a arrastrar (se ejecuta una vez)');
});

markerItem.on('drag', () => {
  console.log('Mientras se está arrastrando se va mostrando');
});

markerItem.on('dragend', () => {
  console.log('Finalizamos arrastrar (se ejecuta una vez)');
});

markerItem.on('movestart', () => {
  console.log('Empezamos a mover (se ejecuta una vez)');
});

markerItem.on('moveend', () => {
  console.log('Finalizamos de mover (se ejecuta una vez)');
});

// Eventos heredados (Trabajando con el ratón)

markerItem.on('click', () => {
  console.log('Un click');
});

markerItem.on('dblclick', () => {
  console.log("Dos clicks seguidos");
});

markerItem.on('mousedown', () => {
  console.log("Haciendo click sobre el marcador");
});

markerItem.on('mouseup', () => {
  console.log("Dejar de estar pulsando sobre el marcador");
});

markerItem.on('mouseover', () => {
  console.log("Cursor sobre el marcador");
});

markerItem.on('mouseout', () => {
  console.log("Cursor fuera del marcador");
});


// Centrar el mapa teniendo en cuenta el marcador
map.fitBounds([
    [markerItem.getLatLng().lat, markerItem.getLatLng().lng]
]);