import { Map, tileLayer, marker, Icon } from "leaflet";
import { tileLayers } from "../../config/tile-layer";
import { ATRIBUTION } from "../../constants/general";

// Inicializamos el mapa en el centro especificado
const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 12 });

// Añadimos la capa base
tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

const greenIcon = new Icon({
  iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-green.png",
  shadowUrl: "https://leafletjs.com/examples/custom-icons/leaf-shadow.png",
  iconSize: [38, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [19, 95], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

const redIcon = new Icon({
  iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-red.png",
  shadowUrl: "https://leafletjs.com/examples/custom-icons/leaf-shadow.png",
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
  [
    markerSoraluzeStadium.getLatLng().lat,
    markerSoraluzeStadium.getLatLng().lng,
  ],
  [markerGreen.getLatLng().lat, markerGreen.getLatLng().lng],
]);
