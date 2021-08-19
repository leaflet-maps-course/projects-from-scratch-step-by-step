// Inicializamos el mapa en el centro especificado
const map = L.map("map", { center: [43.1736976, -2.4173474], zoom: 12 });

// Añadimos la capa base
L.tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

// Añadimos el marcador
const markerSoraluzeStadium = L.marker([43.180930, -2.421315], {draggable: true}).addTo(map);

const markerIpuruaStadium = L.marker([43.1817416,-2.4780567], {draggable: true}).addTo(map);

// Centrar el mapa teniendo en cuenta los dos marcadores
map.fitBounds([
  markerIpuruaStadium.getLatLng(), 
  markerSoraluzeStadium.getLatLng()
]);

// Podría ser lo mismo con "dragend"
markerIpuruaStadium.on('moveend', () => map.removeLayer(markerIpuruaStadium));
markerSoraluzeStadium.on('moveend', () => map.removeLayer(markerSoraluzeStadium));

