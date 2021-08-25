import { Map, tileLayer, polyline } from "leaflet";
import { tileLayers } from "../../constants/tile-layer";
import { ATRIBUTION } from "../../constants/general";


const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 12 });
tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

// Dibujando líneas con + de un Polyline. Se necesita un array bidemensional con 2 posiciones
// por elemento del punto del punto Ahora como es tridemensional la información
// [number, number][][]
const multipolylineItem: [number, number][][] = [
  [
    [17.385044, 78.486671],
    [16.506174, 80.648015],
    [17.686816, 83.218482],
  ],
  [
    [13.08268, 80.270718],
    [12.971599, 77.594563],
    [15.828126, 78.037279],
  ],
];

// Dibujando líneas con Polyline mediante multipolyline. En este caso dibujamos + de una
/// línea en un array tridimensional
const polylineElements: [number, number][][] = [
  [
    [43.175663, -2.412301],
    [43.172156, -2.413997],
  ], // MINIMO HASTA AQUI
  [
    [43.181063, -2.420891],
  [43.174981, -2.403418]
  ],
  [
    [43.166945, -2.39552],
    [43.166953, -2.403341], // MINIMO HASTA AQUI
    [43.171572, -2.409777],
  ]
];



// Creamos los polylines a partir de las coordenadas especificadas
const polylineItem = polyline(polylineElements, { color: "red", weight: 5 }).addTo(
  map
);


// Hacemos zoom teniendo en cuenta los puntos delmultipolyline, para que sea más 
// exacto vamos a tener en cuenta la zona que ocupa y vamos a coger los puntos del
// rectángulo que forman poniendo las coordenas NW, NE, SW, SE
map.fitBounds([
  [
    polylineItem.getBounds().getNorthWest().lat,
    polylineItem.getBounds().getNorthWest().lng,
  ],
  [
    polylineItem.getBounds().getNorthEast().lat,
    polylineItem.getBounds().getNorthEast().lng,
  ],
  [
    polylineItem.getBounds().getSouthWest().lat,
    polylineItem.getBounds().getSouthWest().lng,
  ],
  [
    polylineItem.getBounds().getSouthEast().lat,
    polylineItem.getBounds().getSouthEast().lng,
  ],

]);
