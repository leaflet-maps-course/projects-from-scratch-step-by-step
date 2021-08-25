import { Map, tileLayer, polyline, marker, rectangle, circle } from "leaflet";
import { tileLayers } from "../../constants/tile-layer";
import { ATRIBUTION } from "../../constants/general";


const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 16 });
tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION
    
}).addTo(map);

const myMarker = marker([43.174110, -2.413746]).bindPopup('Gila zubia').addTo(map);

// Abrir el popup
myMarker.openPopup();

const polygon = polyline(
  [
    [43.197199, -2.417625],
    [43.165409, -2.385702],
    [43.164378, -2.440947],
  ] as [number, number][],
  { color: "red", weight: 3, fillColor:'blue',fillOpacity:0.1}
).bindPopup('Hi There!').addTo(map);


// Definimos el área geográfica del que va estar en el mapa
const bounds: [number, number][] = [
  [43.2, -2.273474],
  [43.1736979, -2.4173475],
];
// Crear un rectángulo naranja
const rectangleOne = rectangle(bounds, { color: "#ff7800", weight: 1, stroke: true }).addTo(map);

// Hacemos zoom y centramos al área que que queremos movernos
// Esto lo usamos si dibujamos un rectángulo, si no, usamos la ubicación inicial
// al crear el mapa

const optionsCircle = { radius: 450, color: "red", weight: 3, stroke: true, fillColor: "blue" };
const mainCircle = circle([43.18, -2.373474], optionsCircle).bindPopup('Zona de inundaciones').addTo(map);
mainCircle.openPopup(); // Para que aparezca abierto por defecto

// Centramos teniendo en cuenta los elementos
map.fitBounds([
    [polygon.getBounds().getCenter().lat,  polygon.getBounds().getCenter().lng],
    [rectangleOne.getBounds().getCenter().lat,  rectangleOne.getBounds().getCenter().lng],
    [mainCircle.getBounds().getCenter().lat, mainCircle.getBounds().getCenter().lng ],
]);

// Con openPopup solo podemos tener un popup abierto