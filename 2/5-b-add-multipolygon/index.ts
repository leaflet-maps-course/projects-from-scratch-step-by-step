import { Map, tileLayer, polygon } from "leaflet";
import { tileLayers } from "../../config/tile-layer";
import { ATRIBUTION } from "../../constants/general";

// TODO Añadir dinámicamente para trabajar con el centrado con los límites

// https://www.tutorialspoint.com/leafletjs/leafletjs_multi_polyline_and_polygon.htm
const map = new Map("map", {
  center: [-2.946242567775675, 43.26246553790335],
  zoom: 12,
});
tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

/*
  Más información
  https://leafletjs.com/reference-1.7.1.html#polygon
  Triangle (3)
  • Hexagon (6)
  • Octagon (8)
  */

// Figura geométrica con 3 ó más rectas
const polygonItem = polygon(
  [
    [43.197199, -2.417625],
    [43.165409, -2.385702],
    [43.164378, -2.440947],
  ],
  // fill... es las propiedades del relleno. Sin "fill", las del borde
  { color: "red", weight: 3, fillColor: "blue", fillOpacity: 0.1 }
)
  .bindPopup("Estoy aquí!")
  .addTo(map);

// Al estar con un poligono, una figura que se cierra después de unir
// vamos a coger la zona que ocupa haciendo un rectangulo imaginario donde obtenemos
// ñas ccoordenadas de arriba-izquierda, arriba-derecha, abajo-izquierda y abajo-derecha
// Con coger la esquina superior de un lado y la inferior del lado contrario, ya acota y
// es suficiente
map.fitBounds([
  [
    polygonItem.getBounds().getNorthEast().lat,
    polygonItem.getBounds().getNorthEast().lng,
  ],
  [
    polygonItem.getBounds().getSouthWest().lat,
    polygonItem.getBounds().getSouthWest().lng,
  ],
]);

// Más polígonos
polygon(
  [
    [43.169294, -2.403593],
    [43.180748, -2.372523],
    [43.206292, -2.435324],
    [43.164378, -2.440947],
  ],
  { color: "yellow", weight: 3 }
).addTo(map);

polygon(
  [
    [43.197199, -2.417625],
    [43.165409, -2.385702],
    [43.164378, -2.440947],
    [43.197199, -2.45],
  ],
  { color: "green", weight: 10 }
).addTo(map);

