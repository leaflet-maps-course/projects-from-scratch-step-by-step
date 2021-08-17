const map = L.map("map", { center: [43.1736976, -2.4173474], zoom: 16 });
L.tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION
    
}).addTo(map);

const myMarker = L.marker([43.174110, -2.413746],
  { draggable:true }).bindPopup('Hi There!').addTo(map);

// Abrir el popup
// myMarker.openPopup();