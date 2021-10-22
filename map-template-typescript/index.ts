import { Map, tileLayer } from "leaflet";
import { ATRIBUTION } from "../config/attribution";
import { tileLayers } from "../config/tile-layers/data";

const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 9 });

tileLayer(tileLayers.baseLayers.hikeBike.map, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);
