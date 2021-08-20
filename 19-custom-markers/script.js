// Inicializamos el mapa en el centro especificado
const map = L.map("map", { center: [43.1736976, -2.4173474], zoom: 12 });

// Añadimos la capa base
L.tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

var greenIcon = new L.Icon({
  iconUrl: "./../assets/markers/default/leaf-green.png",
  shadowUrl: "./../assets/markers/default/leaf-shadow.png",
  iconSize: [38, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

var redIcon = new L.Icon({
  iconUrl: "./../assets/markers/default/leaf-red.png",
  shadowUrl: "./../assets/markers/default/leaf-shadow.png",
  iconSize: [38, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

const markerGreen = L.marker([43.172286, -2.4117188], {
  icon: greenIcon,
}).addTo(map);

// Añadimos el marcador
const markerSoraluzeStadium = L.marker([43.18093, -2.421315], {
  icon: redIcon,
}).addTo(map);

const markerIpuruaStadium = L.marker([43.1817416, -2.4780567]).addTo(map);

// Centrar el mapa teniendo en cuenta los dos marcadores
map.fitBounds([
  markerIpuruaStadium.getLatLng(),
  markerSoraluzeStadium.getLatLng(),
  markerGreen.getLatLng(),
]);
