import { Map, polygon } from "leaflet";
import { tileLayers, tileLayerSelect } from "../../config/tile-layer";

const map = new Map("map", {
  center: [-2.946242567775675, 43.26246553790335],
  zoom: 12,
});
tileLayerSelect(tileLayers.baseLayers.thunderForest.neighbourhood).addTo(map);

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
    [43.197199, -2.417625], // Punto de arriba
    [43.165409, -2.385702],
    [43.164378, -2.440947], // Abajo a la derecha
  ],
  // fill... es las propiedades del relleno. Sin "fill", las del borde
  { color: "red", weight: 3, fillColor: "blue", fillOpacity: 0.1 }
)
  .bindPopup("Triangulo")
  .addTo(map);

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

const sixSides = polygon(
  [
    [43.197199, -2.417625],
    [43.165409, -2.385702],
    [43.164378, -2.440947],
    [43.197199, -2.45],
    [43.217199, -2.478],
    [43.237199, -2.49],
  ],
  { color: "orange", weight: 8 }
).addTo(map);

// Al estar con un poligono, una figura que se cierra después de unir
// Hacemos zoom y centramos al área que que queremos movernos
// vamos a coger la zona que ocupa haciendo un rectangulo imaginario donde obtenemos
// las coordenadas de arriba-izquierda, arriba-derecha, abajo-izquierda y abajo-derecha
// Con coger por ejemplo Norte-Este y Sur-Oeste, ya acota el rectángulo
map.fitBounds([
  [
    sixSides.getBounds().getNorthWest().lat,
    sixSides.getBounds().getNorthWest().lng,
  ],
  [
    polygonItem.getBounds().getSouthEast().lat,
    polygonItem.getBounds().getSouthEast().lng,
  ],
]);
