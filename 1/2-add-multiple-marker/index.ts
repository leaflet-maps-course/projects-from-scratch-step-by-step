import { Map, marker, LayerGroup } from "leaflet";

import { drinkWaterSoraluze } from "../../assets/data/markers/drink_water_soraluze";
import { tileLayers } from "../../config/tile-layers/data";
import { tileLayerSelect } from "../../config/tile-layers/functions";

// Inicializamos el mapa en el centro especificado
const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 12 });

// Añadimos la capa base
tileLayerSelect(tileLayers.baseLayers.cartoDb.map.voyager).addTo(map);

// Añadimos la capa de los marcadores mediante un LayerGroup
// https://leafletjs.com/reference-1.7.1.html#layergroup
// Esto lo usamos para tenerlo más accesible para poner / quitar los contenidos
const markersLayerGroup = new LayerGroup();

// Añadimos el marcador
const markerSoraluzeStadium = marker([43.18093, -2.421315]).addTo(markersLayerGroup);

const markerIpuruaStadium = marker([43.1817416, -2.4780567]).addTo(markersLayerGroup);

// Cargando desde una variable con mil registros
drinkWaterSoraluze.map((drinkWater) => {
  marker([drinkWater.lat, drinkWater.lon]).addTo(markersLayerGroup);
});

// Una vez que hemos incrustado los marcadores en la capa especifica para ello
markersLayerGroup.addTo(map);

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
  // Si nos da el error que number[] no es asignable a LatLngTuple
  // Ponemos "as [number, number]"
  ...drinkWaterSoraluze.map(value => [value.lat, value.lon] as [number, number]),
]);
