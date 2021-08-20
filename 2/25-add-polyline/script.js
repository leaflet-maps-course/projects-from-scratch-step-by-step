const map = L.map("map", { center: [43.1736976, -2.4173474], zoom: 12 });
L.tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);


// Dibujando líneas con Polyline. Se necesita un array con por lo menos dos localizaciones
var latlngs = [
  [43.175663, -2.412301],
  [43.172156, -2.413997],
  [43.173683, -2.409712]
];

var polyline = L.polyline(latlngs, {color: 'red', weight: 5, }).addTo(map);

// Hacemos zoom teniendo en cuenta los puntos del polyline
map.fitBounds(polyline.getBounds());