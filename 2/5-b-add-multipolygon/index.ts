import { Map, polygon } from "leaflet";
import { tileLayers, tileLayerSelect } from "../../config/tile-layer";

// https://www.tutorialspoint.com/leafletjs/leafletjs_multi_polyline_and_polygon.htm
const map = new Map("map", {
  center: [-2.946242567775675, 43.26246553790335],
  zoom: 12,
});
tileLayerSelect(tileLayers.baseLayers.thunderForest.outdoors).addTo(map);

/*
  Más información
  https://leafletjs.com/reference-1.7.1.html#polygon
  */

// Figura geométrica con 3 ó más rectas
const polygonItem = polygon(
  [
    [
      [35.10418, -106.62987],
      [35.19738, -106.875],
      [35.07946, -106.80634],
    ],
    [
      [35.11654, -106.58318],
      [35.13142, -106.48876],
      [35.07384, -106.52412],
    ],
  ],
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
