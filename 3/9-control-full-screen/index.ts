import { tileLayerSelect } from './../../config/tile-layer';
import { tileLayers } from "../../config/tile-layer";
import { control, Map } from "leaflet";
import { FullScreen } from "../custom-controls";
const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 9 });

tileLayerSelect(tileLayers.baseLayers.hikeBike).addTo(map);

FullScreen.addTo(map);

control.scale().addTo(map);
