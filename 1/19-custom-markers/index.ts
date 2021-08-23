import { Map, tileLayer, marker, Icon } from "leaflet";
import { tileLayers } from "./../../constants/tile-layer";
import { ATRIBUTION } from "./../../constants/general";

// Inicializamos el mapa en el centro especificado
const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 12 });

// Añadimos la capa base
tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

var greenIcon = new Icon({
  iconUrl: "https://raw.githubusercontent.com/leaflet-maps-course/projects-from-scratch-step-by-step/master/assets/markers/default/leaf-green.png?token=ABGYW4QT5AV4KAHMEXMBTNLBEPTGS",
  shadowUrl: "https://raw.githubusercontent.com/leaflet-maps-course/projects-from-scratch-step-by-step/master/assets/markers/default/leaf-shadow.png?token=ABGYW4TMBTZ4KOWJ7ZRSWATBEPTIM",
  iconSize: [38, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [19, 95], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

var redIcon = new Icon({
  iconUrl: "https://raw.githubusercontent.com/leaflet-maps-course/projects-from-scratch-step-by-step/master/assets/markers/default/leaf-red.png?token=ABGYW4T6QXSZCVVJVCXG72DBEPTMK",
  shadowUrl: "https://raw.githubusercontent.com/leaflet-maps-course/projects-from-scratch-step-by-step/master/assets/markers/default/leaf-shadow.png?token=ABGYW4TMBTZ4KOWJ7ZRSWATBEPTIM",
  iconSize: [38, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [19, 95], // point of the icon which will correspond to marker's location
  // half of width + height respect "iconSize"
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

const markerGreen = marker([43.172286, -2.4117188], {
  icon: greenIcon,
}).addTo(map);

// Añadimos el marcador
const markerSoraluzeStadium = marker([43.18093, -2.421315], {
  icon: redIcon,
}).addTo(map);

const markerIpuruaStadium = marker([43.1817416, -2.4780567]).addTo(map);

// Centrar el mapa teniendo en cuenta los dos marcadores
map.fitBounds([
  [markerIpuruaStadium.getLatLng().lat, markerIpuruaStadium.getLatLng().lng],
  [markerSoraluzeStadium.getLatLng().lat, markerSoraluzeStadium.getLatLng().lng],
  [markerGreen.getLatLng().lat, markerGreen.getLatLng().lng]
]);
