import { Map, tileLayer, polyline } from "leaflet";
import { tileLayers } from "../../constants/tile-layer";
import { ATRIBUTION } from "../../constants/general";

const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 12 });
tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);


// Dibujando líneas con Polyline. Se necesita un array con por lo menos dos localizaciones
// Un elemento
var latlngs: [number, number][] = [
  [43.175663, -2.412301],
  [43.172156, -2.413997],
  [43.173683, -2.409712]
]; 
// Dibujando líneas con + de un Polyline. Se necesita un array bidemensional con 2 posiciones
// por elemento del punto del punto Ahora como es tridemensional la información
// [number, number][][]
var latlang: [number, number][][] = [
    [[17.385044, 78.486671], [16.506174, 80.648015], [17.686816, 83.218482]],
    [[13.082680, 80.270718], [12.971599, 77.594563],[15.828126, 78.037279]]
 ];

var polylineItem = polyline(latlngs as [number, number][], {color: 'red', weight: 5, }).addTo(map);

var secondPolylineItem = polyline(latlang as [number, number][][], {color: 'blue', weight: 5, }).addTo(map);
// Hacemos zoom teniendo en cuenta los puntos del polyline
map.fitBounds(polylineItem.getBounds());