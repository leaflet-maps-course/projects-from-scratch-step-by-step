import { Map, polyline, marker, rectangle, circle } from "leaflet";
import { tileLayers, tileLayerSelect } from "../../config/tile-layer";

const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 16 });
tileLayerSelect(tileLayers.baseLayers.thunderForest.mobileAtlas).addTo(map);

const myMarker = marker([43.17411, -2.413746])
  .bindPopup("Gila zubia")
  .addTo(map);

// Abrir el popup
myMarker.openPopup();

const polylineItem = polyline(
  [
    [43.197199, -2.417625],
    [43.165409, -2.385702],
    [43.164378, -2.440947],
  ] as [number, number][],
  { color: "red", weight: 3, fillColor: "blue", fillOpacity: 0.1 }
)
  .bindTooltip("Hi There!", {direction: 'bottom'})
  .addTo(map);

// Definimos el área geográfica del que el rectángulo va estar en el mapa
const bounds: [number, number][] = [
  [43.2, -2.273474],
  [43.1736979, -2.4173475],
];
// Crear un rectángulo naranja
const rectangleOne = rectangle(bounds, {
  color: "#ff7800",
  weight: 1,
  stroke: true,
}).bindTooltip("Soraluze-Azkoitia zona peligrosa", {direction: 'top'}).addTo(map);

// Hacemos zoom y centramos al área que que queremos movernos
// Esto lo usamos si dibujamos un rectángulo, si no, usamos la ubicación inicial
// al crear el mapa

const optionsCircle = {
  radius: 450,
  color: "red",
  weight: 3,
  stroke: true,
  fillColor: "blue",
};
const mainCircle = circle([43.18, -2.373474], optionsCircle)
  .bindPopup("Zona de inundaciones")
  .addTo(map);
mainCircle.openPopup(); // Para que aparezca abierto por defecto

// Centramos teniendo en cuenta los elementos (Primero hacerlo asi, para ver que es incorrecto)
map.fitBounds([
  [
    polylineItem.getBounds().getCenter().lat,
    polylineItem.getBounds().getCenter().lng,
  ],
  [
    rectangleOne.getBounds().getCenter().lat,
    rectangleOne.getBounds().getCenter().lng,
  ],
  [
    mainCircle.getBounds().getCenter().lat,
    mainCircle.getBounds().getCenter().lng,
  ],
]);

// Mejorando la ubicación
// Esto se puede mejorar cogiendo el punto izquierdo abajo más lejano y el superior
// más lejano a la derecha.
// Cogemos el polyline, en el Sur-Oeste con su latitud y longitud
// El rectangulo, al ser el elemento que va más lejos a la derecha (y altura)
// Cogemos el punto del Norte-Este
map.fitBounds([
  [
    polylineItem.getBounds().getSouthWest().lat,
    polylineItem.getBounds().getSouthWest().lng,
  ],
  [
    rectangleOne.getBounds().getNorthEast().lat,
    rectangleOne.getBounds().getNorthEast().lng,
  ],
]);

// Con openPopup solo podemos tener un popup abierto
