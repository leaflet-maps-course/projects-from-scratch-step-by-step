import { Map, tileLayer, polyline } from "leaflet";
import { tileLayers } from "../../config/tile-layer";
import { ATRIBUTION } from "../../constants/general";


const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 12 });
tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

// Dibujando líneas con Polyline mediante multipolyline. En este caso dibujamos + de una
/// línea en un array tridimensional
// Esto se usa, por si queremos pintar lineas con las mismas caracteristicas y asi hacerlo todo
// en un polyline
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

// Hacemos zoom teniendo en cuenta los puntos del multipolyline, para que sea más 
// exacto vamos a tener en cuenta la zona que ocupa y vamos a coger los puntos del
// rectángulo que forman poniendo las coordenas NW, NE, SW, SE.
// Es suficiente con poner una esquina del norte y poner la contraria del sur
// Por ejemplo, NE, SO
map.fitBounds([
  [
    polylineItem.getBounds().getNorthEast().lat,
    polylineItem.getBounds().getNorthEast().lng,
  ],
  [
    polylineItem.getBounds().getSouthWest().lat,
    polylineItem.getBounds().getSouthWest().lng,
  ]
]);
