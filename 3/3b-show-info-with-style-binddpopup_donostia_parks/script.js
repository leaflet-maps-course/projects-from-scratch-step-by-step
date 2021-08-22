function bindPopup(feature, layer) {
  layer.bindPopup('<h4 style="text-align: center">'+feature.properties.name+'</h4>');
}

function getColor(d) {
  return d.indexOf('Jard') >  -1 ? "#35F114" : "#FFC300";
}

function style(feature) {
  return {
    fillColor: getColor(feature.properties.nombre_cas),
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.7,
  };
}

const map = L.map("map", { center: [43.315547, -1.984636], zoom: 13 });
L.tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

// Para crear información con el popup
// https://leafletjs.com/reference-1.7.1.html#geojson-oneachfeature
L.geoJSON(ssParks, {
  onEachFeature: bindPopup,
  style: style
}).addTo(map);


