/// <reference path="./../../custom_typings/leaflet.browser.print/index.d.ts"/>
// Arriba tenemos el fichero para "tipar" el uso de browserprint
import { tileLayers } from "./../../constants/tile-layer";
import { ATRIBUTION } from "./../../constants/general";
import { control, Map, tileLayer } from "leaflet";

import './../../node_modules/leaflet.browser.print/dist/leaflet.browser.print.min';

const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 9 });

tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

control.browserPrint().addTo(map);
