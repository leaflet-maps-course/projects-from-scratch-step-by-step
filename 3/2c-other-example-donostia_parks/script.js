function bindPopup(feature, layer) {
  layer.bindPopup('<h4 style="text-align: center">'+feature.properties.name+'</h4>');
}

const map = L.map("map", { center: [43.315547, -1.984636], zoom: 13 });
L.tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

// Para crear información con el popup
// https://leafletjs.com/reference-1.7.1.html#geojson-oneachfeature
L.geoJSON(ssParks, {
  onEachFeature: bindPopup
}).addTo(map);


