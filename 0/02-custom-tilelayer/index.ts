import { tileLayers } from './../../constants/tile-layer';
import { ATRIBUTION } from './../../constants/general';
import { Map, tileLayer } from "leaflet";

const map = new Map("map", { center: [43.1736976,-2.4173474 ], zoom: 12 });
tileLayer(tileLayers.blackWhite, { // Ir seleccionando diferentes
	maxZoom: 17,
	attribution: ATRIBUTION
}).addTo(map);