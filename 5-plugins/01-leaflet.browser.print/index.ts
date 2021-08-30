/// <reference path="../../custom_typings/leaflet.plugins/index.d.ts"/>
// Arriba tenemos el fichero para "tipar" el uso de browserprint
import { tileLayers } from "../../config/tile-layer";
import { ATRIBUTION } from "../../constants/general";
import { control, LayerGroup, Map, marker, tileLayer } from "leaflet";

import 'leaflet.browser.print/dist/leaflet.browser.print.min';
import { drinkWaterSoraluze } from "../../assets/data/markers/drink_water_soraluze";

const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 9 });

tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

// Añadimos algunos marcadores para que quede mejor para imprimir
const markersLayerGroup = new LayerGroup();

// Cargando desde una variable con mil registros
drinkWaterSoraluze.map((drinkWater) => {
  marker([drinkWater.lat, drinkWater.lon])
  .bindPopup(`Ubicación: ${drinkWater.lat} / ${drinkWater.lon}`)
  .addTo(markersLayerGroup);
});

markersLayerGroup.addTo(map);

map.fitBounds(
  [
    ...drinkWaterSoraluze.map((drinkWater) => [drinkWater.lat, drinkWater.lon] as [number, number])
  ]
)

// Opciones para mandar a imprimir el mapa
control.browserPrint().addTo(map);

