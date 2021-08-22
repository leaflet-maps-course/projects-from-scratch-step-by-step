function getColor(d) {
  console.log(d.substring(2));
  let numberValue = parseInt(d.substring(2));
  return numberValue > 0 && numberValue <= 5
    ? "#800026"
    : numberValue > 5 && numberValue <= 9
    ? "#BD0026"
    : numberValue > 9 && numberValue <= 12
    ? "#E31A1C"
    : numberValue > 12 && numberValue <= 16
    ? "#FC4E2A"
    : numberValue > 16 && numberValue <= 22
    ? "#FD8D3C"
    : numberValue > 22 && numberValue <= 25
    ? "#FEB24C"
    : numberValue > 25 && numberValue <= 30
    ? "#FED976"
    : "#FFEDA0";
}

function style(feature) {
  console.log(feature);
  return {
    fillColor: getColor(feature.properties.CODIGO),
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.7,
  };
}

function bindPopup(feature, layer) {
  layer.bindPopup(
    "<h1>" +
      feature.properties.CODIGO +
      "</h1><p>name: " +
      feature.properties.ESTADO +
      "</p>"
  );
}

const map = L.map("map", { center: [19.39068, -99.2836986], zoom: 5 });
L.tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

// Para crear información con el popup
// https://leafletjs.com/reference-1.7.1.html#geojson-oneachfeature
L.geoJSON(mexicoStatesGeoJSON, {
  onEachFeature: bindPopup,
  style: style,
}).addTo(map);
