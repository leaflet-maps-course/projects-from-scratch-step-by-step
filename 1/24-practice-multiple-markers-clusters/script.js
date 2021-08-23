function groupMarkers(data, markers) {
  for (let i = 0; i < data.length; i++) {
    const location = data[i];
    const title = (location.tags.name) ? location.tags.name : 'No especificado';
    const elevation = (location.tags.ele) ? ` (${location.tags.ele}m.)` : '';
    const marker = L.marker(new L.LatLng(location.lat, location.lon), { title: title });
    marker.bindPopup(title.concat(elevation));
    markers.addLayer(marker);
  }
}
// Inicializamos el mapa en el centro especificado
const map = L.map("map", { center: [43.1736976, -2.4173474], zoom: 12 });

// Añadimos la capa base
L.tileLayer(tileLayers.default, {
  maxZoom: 18,
  attribution: ATRIBUTION,
}).addTo(map);

const markers = L.markerClusterGroup();

// Recorremos los marcadores y los agrupamos
groupMarkers(gipuzkoaPeaks, markers);
groupMarkers(bizkaiaPeaks, markers);
groupMarkers(arabaPeaks, markers);
groupMarkers(nafarroaPeaks, markers);

map.addLayer(markers);

map.fitBounds([
  ...gipuzkoaPeaks.map((location) => location), 
  ...bizkaiaPeaks.map((location) => location),
  ...arabaPeaks.map((location) => location), 
  ...nafarroaPeaks.map((location) => location)
]);

