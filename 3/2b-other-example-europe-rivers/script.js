const map = L.map("map", { center: [43.1736976, -2.4173474], zoom: 12 });
L.tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

// Para crear información con el popup
// https://leafletjs.com/reference-1.7.1.html#geojson-oneachfeature
L.geoJSON(europeRiversGeoJSON, {
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<h4 style="text-align: center">'+feature.properties.NAME+'</h4>');
  }
}).addTo(map);


