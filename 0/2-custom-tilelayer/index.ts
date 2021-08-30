import { tileLayers, tileLayerSelect } from "../../config/tile-layer";
import { Map } from "leaflet";

const map = new Map("map", { center: [43.1736976,-2.4173474 ], zoom: 12 });
tileLayerSelect(tileLayers.baseLayers.blackWhite).addTo(map);