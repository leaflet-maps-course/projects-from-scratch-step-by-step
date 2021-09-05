import { PLACES_LIST_LOCATIONS } from './../../config/locations';
import { tileLayers, tileLayerSelect } from "../../config/tile-layer";
import { LatLngExpression, Map } from "leaflet";
import { watermark } from "../custom-controls";

const map = new Map("map", {
  center: PLACES_LIST_LOCATIONS.ADDIS_ABEBA_ETIOPIA as LatLngExpression,
  zoom: 9,
  zoomControl: false, // Escondemos el control de zoom por defecto
});

tileLayerSelect(tileLayers.baseLayers.osmDE).addTo(map);

// Documentación oficial del control
// https://leafletjs.com/reference-1.7.1.html#control
// Creamos un elemento de imagen
watermark().addTo(map);
watermark({position: 'topright'}).addTo(map);
watermark({position: 'bottomright'}).addTo(map);
watermark({position: 'bottomleft'}).addTo(map);