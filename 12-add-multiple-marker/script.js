// Inicializamos el mapa en el centro especificado
const map = L.map("map", { center: [43.1736976, -2.4173474], zoom: 12 });

// Añadimos la capa base
L.tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

console.log(drinkWaterSoraluze);

drinkWaterSoraluze.map((drinkWater) => L.marker([drinkWater.lat, drinkWater.lon]).bindPopup([drinkWater.lat, drinkWater.lon].toString()).addTo(map));
// Añadimos el marcador
const markerSoraluzeStadium = L.marker([43.180930, -2.421315]).addTo(map);

const markerIpuruaStadium = L.marker([43.1817416,-2.4780567], {draggable: true}).addTo(map);

// Centrar el mapa teniendo en cuenta los dos marcadores (ahora tenemos que hacerlo respecto a todos)
// map.fitBounds([markerIpuruaStadium.getLatLng(), markerSoraluzeStadium.getLatLng()]);

// Con todos centramos y se visualiza correctamente

map.fitBounds([
  markerIpuruaStadium.getLatLng(), 
  markerSoraluzeStadium.getLatLng(),
  ...drinkWaterSoraluze.map((location) => [location.lat, location.lon])
]);

