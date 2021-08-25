import {
  Map,
  tileLayer,
  polygon,
  polyline,
  circle,
  rectangle,
  marker,
} from "leaflet";
import { tileLayers } from "../../constants/tile-layer";
import { ATRIBUTION } from "../../constants/general";

const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 16 });
tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

// Marcador
const myMarker = marker([43.17411, -2.413746])
  .bindPopup("Gila zubia")
  .addTo(map);

// Abrir el popup
myMarker.openPopup();

// Rectángulo
// Definimos el área que va  ocupar el rectángulo, dibujándolo
const bounds: [number, number][] = [
  [43.2, -2.273474],
  [43.1736979, -2.4173475],
];
// Crear un rectángulo naranja
const rectangleOne = rectangle(bounds, {
  color: "#ff7800",
  weight: 1,
  stroke: true,
}).addTo(map);

// Círculo
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
mainCircle.openPopup();

// Polígono - Triángulo
const polygonItem = polygon(
  [
    [43.197199, -2.417625],
    [43.165409, -2.385702],
    [43.164378, -2.440947],
  ],
  { color: "red", weight: 3, fillColor: "blue", fillOpacity: 0.1 }
)
  .bindPopup("Hi There!")
  .addTo(map);

map.fitBounds([
  [
    rectangleOne.getBounds().getCenter().lat,
    rectangleOne.getBounds().getCenter().lng,
  ],
  [
    mainCircle.getBounds().getCenter().lat,
    mainCircle.getBounds().getCenter().lng,
  ],
  [
    polygonItem.getBounds().getCenter().lat,
    polygonItem.getBounds().getCenter().lng,
  ],
  [myMarker.getLatLng().lat, myMarker.getLatLng().lng],
]);

// Con openPopup solo podemos tener un popup abierto

// Mediante multipolyline, haciendo una cruz (PRACTICA)

const polyLineOneLocationsPoint: [number, number][][] = [
  [
    [43.175663, -2.412301],
    [43.172156, -2.413997],
  ],
  [
    [43.174922, -2.417513],
    [43.173352, -2.40987],
  ],
];

polyline(polyLineOneLocationsPoint, {
  color: "green",
  weight: 7,
}).addTo(map);

/*const polyLineTwoLocationsPoint: [number, number][] = ;

const polyLineTwo = polyline(polyLineTwoLocationsPoint, {
  color: "green",
  weight: 7,
}).addTo(map);

const polyLinesLocationsPoint = [[], [], []];*/
