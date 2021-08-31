import { Map, marker, circleMarker } from "leaflet";
import { tileLayers, tileLayerSelect } from "../../config/tile-layer";
import { drinkWaterSoraluze } from "../../assets/data/markers/drink_water_soraluze";

// Inicializamos el mapa en el centro especificado
const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 12 });

// Añadimos la capa base
tileLayerSelect(tileLayers.baseLayers.openTopoMap).addTo(map);

// Añadimos el marcador
const markerSoraluzeStadium = circleMarker([43.18093, -2.421315]);

const markerIpuruaStadium = circleMarker([43.1817416, -2.4780567],{
  radius: 30,
  color: "red",       // Bordes, puede ser hex
  fillColor: "yellow" // Color del relleno, puede ser hex
}).addTo(map);

const soraluzeCenter =  circleMarker([43.1736976, -2.4173474], {
  radius: 40,
  color: "green"
}).bindPopup("En Soraluze <br/>43.1736976, -2.4173474").addTo(map);

// Estadio Ipurua con marcador normal para centrarlo en el marcador circular
marker([43.1817416, -2.4780567]).addTo(map);

// Cargando desde una variable con mil registros
drinkWaterSoraluze.map((drinkWater) => {
  marker([drinkWater.lat, drinkWater.lon]).addTo(map);
});

// Centrar el mapa teniendo en cuenta los dos marcadores
// Centrar el mapa teniendo en cuenta los dos marcadores 
// Obtenieendo de su LatLng, un array numérico de dos elementos con lat y lng

// Con todos centramos y se visualiza correctamente
// Es importante añadir los elementos en arrays numéricos (number[]) con su
// latitud y longitud
// Formato
// [ [lat, lng], [lat, lng], [lat, lng], [lat, lng]]
map.fitBounds([
  [markerIpuruaStadium.getLatLng().lat, markerIpuruaStadium.getLatLng().lng],
  [
    markerSoraluzeStadium.getLatLng().lat,
    markerSoraluzeStadium.getLatLng().lng,
  ],
  ...drinkWaterSoraluze.map(value => [value.lat, value.lon] as [number, number]),
  [
    soraluzeCenter.getLatLng().lat,
    soraluzeCenter.getLatLng().lng,
  ]
]);