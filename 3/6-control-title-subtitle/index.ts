import { tileLayers } from "../../config/tile-layer";
import { ATRIBUTION } from "../../constants/general";
import { Map, tileLayer } from "leaflet";
import { TitleSubtitleControl } from "../custom-controls";

const map = new Map("map", {
  center: [43.1736976, -2.4173474],
  zoom: 9,
  zoomControl: false, // Escondemos el control de zoom por defecto
});

tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

// Documentación oficial del control
// https://leafletjs.com/reference-1.7.1.html#control
// Creamos un elemento de imagen
TitleSubtitleControl.addTo(map);