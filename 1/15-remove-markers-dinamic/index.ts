import { Map, tileLayer, marker, LatLngTuple } from "leaflet";
import { tileLayers } from "./../../constants/tile-layer";
import { ATRIBUTION } from "./../../constants/general";
import { drinkWaterSoraluze } from "../../assets/data/markers/drink_water_soraluze";

// Inicializamos el mapa en el centro especificado
const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 16 });

// Añadimos la capa base
tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

// Añadiendo acción de borrado
drinkWaterSoraluze.map((drinkWater) => {
  const markerItem = marker([drinkWater.lat, drinkWater.lon], { draggable: true })
  markerItem.addTo(map);
  markerItem.on("moveend", () => {
    map.removeLayer(markerItem);
    console.log(`Eliminado marcador de la posición ${markerItem.getLatLng().toString()}`)
  });
});

// Centrar el mapa teniendo en cuenta los dos marcadores
// Recordad que hay que almacenar en un array bidimensional, donde los arrays
// numéricos son dos elementos, latitud y longitud
// Con todos centramos y se visualiza correctamente
// Es importante añadir los elementos en arrays numéricos (number[]) con su
// latitud y longitud
// Formato
// [ [lat, lng], [lat, lng], [lat, lng], [lat, lng]]
map.fitBounds([
    ...drinkWaterSoraluze.map((value) => [value.lat, value.lon] as LatLngTuple)
]);
