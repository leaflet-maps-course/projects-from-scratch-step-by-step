import { tileLayers, tileLayerSelect } from "./../../config/tile-layer";
import { Map } from "leaflet";

const map = new Map("map", { center: [43.1736976,-2.4173474 ], zoom: 12 });
tileLayerSelect(tileLayers.baseLayers.osmHot).addTo(map);

// Añadimos una capa de superficie, que no cubra la principal capa de base
tileLayerSelect(tileLayers.overlayers.wayMarkedTrails.hiking).addTo(map);