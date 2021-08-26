import { Map, tileLayer, marker, Icon, IconOptions } from "leaflet";
import { tileLayers } from "../../constants/tile-layer";
import { ATRIBUTION } from "../../constants/general";

const test = Icon.extend({
  options: {
      iconUrl: "https://vue2-leaflet.netlify.app/images/baseball-marker.png",
      shadowUrl: "leaf-shadow.png",
      iconSize:     [38, 40],
      shadowSize:   [50, 64],
      iconAnchor:   [19, 40],
      shadowAnchor: [4, 62],
      popupAnchor:  [-3, -76]
  }
});



export class MyIcon extends Icon {
  options: IconOptions = {
    iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-green.png",
    shadowUrl: "https://leafletjs.com/examples/custom-icons/leaf-shadow.png",
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76],
  };

  constructor(options: IconOptions) {
    super(options);
  }
}

// Inicializamos el mapa en el centro especificado
const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 12 });

// Añadimos la capa base
tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

/*const orangeIcon = new Icon({
  iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-orange.png",
  shadowUrl: "./default/leaf-shadow.png",
  iconSize: [50, 50], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [25, 50], // point of the icon which will correspond to marker's location
  // half of width + height respect "iconSize"
  shadowAnchor: [4, 62], // the same for the shadow
  // popupAnchor: [0 - 76], // point from which the popup should open relative to the iconAnchor
});*/

const redIcon = new Icon({
  iconUrl: "https://raw.githubusercontent.com/leaflet-maps-course/resources/main/markers/icons/custom/drink_water.png",
  iconSize: [46, 48], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [23, 48], // point of the icon which will correspond to marker's location
  // half of width + height respect "iconSize"
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

const redIconNew = new MyIcon({
  iconUrl: "https://vue2-leaflet.netlify.app/images/baseball-marker.png",
  shadowUrl: "https://leafletjs.com/examples/custom-icons/leaf-shadow.png"
});

const markerGreen = marker([43.172286, -2.4117188], {
  icon: redIconNew,
}).addTo(map);

// Añadimos el marcador
const markerSoraluzeStadium = marker([43.18093, -2.421315], {
  icon: redIcon,
}).addTo(map);


const markerIpuruaStadium = marker([43.1817416, -2.4780567],{
  icon: new test()
}).addTo(map);

// Centrar el mapa teniendo en cuenta los dos marcadores
map.fitBounds([
  [markerIpuruaStadium.getLatLng().lat, markerIpuruaStadium.getLatLng().lng],
  [
    markerSoraluzeStadium.getLatLng().lat,
    markerSoraluzeStadium.getLatLng().lng,
  ],
  [markerGreen.getLatLng().lat, markerGreen.getLatLng().lng],
]);
