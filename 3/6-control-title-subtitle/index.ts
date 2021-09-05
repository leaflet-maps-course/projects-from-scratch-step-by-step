import { tileLayersWMS, tileLayerWMSSelect } from './../../config/tile-layer';
import { Map } from "leaflet";
import { titleSubtitleControl } from '../custom-controls';

const map = new Map("map", {
  center: [43.1736976, -2.4173474],
  zoom: 9,
  zoomControl: false, // Escondemos el control de zoom por defecto
});

tileLayerWMSSelect(tileLayersWMS.mundialis.baseUrl, {
  layers: tileLayersWMS.mundialis.layers.topoOsmWMS
}).addTo(map);

// Documentación oficial del control
// https://leafletjs.com/reference-1.7.1.html#control
// Creamos un elemento de imagen
titleSubtitleControl().addTo(map);
titleSubtitleControl({position: 'bottomright'}).addTo(map);
titleSubtitleControl({position: 'topright'}).addTo(map);
titleSubtitleControl({position: 'topleft'}).addTo(map);