const map = L.map("map", { center: [43.2736976, -2.4173474], zoom: 12 });
// const map = L.map('map').fitWorld();

function onLocationFound(e) {
  const radius = e.accuracy;
  L.circle(e.latlng, radius).addTo(map);
  L.marker(e.latlng).addTo(map)
      .bindPopup("You are within " + radius + " meters from this point").openPopup();
  map.flyTo(e.latlng, 16, {
    // https://leafletjs.com/reference-1.7.1.html#zoom-options
    animate: true,
    duration: 2.5,
  });
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
  alert(e.message);
}

map.on('locationerror', onLocationError);

L.tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

map.locate({zoom: 12});