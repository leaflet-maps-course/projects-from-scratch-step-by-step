// Inicializamos el mapa en el centro especificado
const map = L.map("map", { center: [43.1736976, -2.4173474], zoom: 12 });

// Añadimos la capa base
L.tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

addressPoints.map((drinkWater) =>
  L.marker(drinkWater).addTo(map)
);

// Centrar el mapa teniendo en cuenta los dos marcadores (ahora tenemos que hacerlo respecto a todos)
// map.fitBounds([markerIpuruaStadium.getLatLng(), markerSoraluzeStadium.getLatLng()]);

// Con todos centramos y se visualiza correctamente

map.fitBounds([
  ...addressPoints.map((location) => location),
]);
