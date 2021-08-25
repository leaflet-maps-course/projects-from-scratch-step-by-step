import { Map, tileLayer, polyline } from "leaflet";
import { tileLayers } from "../../constants/tile-layer";
import { ATRIBUTION } from "../../constants/general";

const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 12 });
tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);


// Dibujando líneas con Polyline. Se necesita un array con por lo menos dos localizaciones
// mínimo para formar Un elemento de línea
const lineOneItem: [number, number][] = [
  [43.175663, -2.412301],
  [43.172156, -2.413997], // MINIMO HASTA AQUI
]; 

const lineTwoItem: [number, number][] = [
  [43.181063, -2.420891],
  [43.174981, -2.403418], // MINIMO HASTA AQUI
]; 

const lineThreeItem: [number, number][] = [
  [43.166945, -2.395520],
  [43.166953, -2.403341], // MINIMO HASTA AQUI
  [43.171572, -2.409777]
]; 

// Creamos los polylines a partir de las coordenadas especificadas
const polylineItem = polyline(lineOneItem, {color: 'red', weight: 5, }).addTo(map);
const polylineTwoItem = polyline(lineTwoItem, {color: 'blue', weight: 10, }).addTo(map);
const polylineThreeItem = polyline(lineThreeItem, {color: 'green', weight: 3, }).addTo(map);


// Hacemos zoom teniendo en cuenta los puntos del polyline
map.fitBounds([
  
  [polylineItem.getBounds().getCenter().lat, polylineItem.getBounds().getCenter().lng],
  [polylineTwoItem.getBounds().getCenter().lat, polylineTwoItem.getBounds().getCenter().lng],
  [polylineThreeItem.getBounds().getCenter().lat, polylineThreeItem.getBounds().getCenter().lng]
]);