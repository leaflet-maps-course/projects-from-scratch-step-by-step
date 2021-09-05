import { tileLayers, tileLayerSelect } from "../../config/tile-layer";
import { Map } from "leaflet";
import { customControl } from "../custom-controls";

const map = new Map("map", {
  center: [43.1736976, -2.4173474],
  zoom: 9,
  zoomControl: false, // Escondemos el control de zoom por defecto
});

tileLayerSelect(tileLayers.baseLayers.hikeBike).addTo(map);


// Documentación oficial del control
// https://leafletjs.com/reference-1.7.1.html#control
customControl().addTo(map);
customControl({position: 'topright'}).addTo(map);
customControl({position: 'bottomright'}).addTo(map);
customControl({position: 'bottomleft'}).addTo(map);