// Añadimos en los types, lo relacionado a KML
/// <reference path="../../custom_typings/leaflet.plugins/index.d.ts"/>
import { tileLayers, tileLayerSelect } from "../../config/tile-layer";
import { Map, polygon } from "leaflet";
import "leaflet-path-drag/dist/L.Path.Drag";

const map = new Map("map", {
  center: [51.505, -10],
  zoom: 6,
});

tileLayerSelect(tileLayers.baseLayers.cartoDb.positron).addTo(map);

const polygonItem = polygon(
  [
    [35.10418, -106.62987],
    [35.19738, -106.875],
    [35.07946, -106.80634],
  ],
  { color: "red", weight: 3, fillColor: "blue", fillOpacity: 0.1, draggable: true}
)
  .bindPopup("Estoy aquí!")
  .addTo(map);

const polygonTwoItem = polygon([
  [35.11654, -106.58318],
  [35.13142, -106.48876],
  [35.07384, -106.52412],
],
{ color: "red", weight: 3, fillColor: "blue", fillOpacity: 0.1, draggable: true}).addTo(map);

// Al estar con un poligono, una figura que se cierra después de unir
// vamos a coger la zona que ocupa haciendo un rectangulo imaginario donde obtenemos
// ñas ccoordenadas de arriba-izquierda, arriba-derecha, abajo-izquierda y abajo-derecha
// Con coger la esquina superior de un lado y la inferior del lado contrario, ya acota y
// es suficiente
map.fitBounds([
  [
    polygonItem.getBounds().getNorthWest().lat,
    polygonItem.getBounds().getNorthWest().lng,
  ],
  [
    polygonTwoItem.getBounds().getSouthEast().lat,
    polygonTwoItem.getBounds().getSouthEast().lng,
  ],
]);
