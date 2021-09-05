import { PLACES_LIST_LOCATIONS } from './../../config/locations';
import { tileLayerSelect, tileLayers } from "./../../config/tile-layer";
import { control, LatLngExpression, Map } from "leaflet";

const place = PLACES_LIST_LOCATIONS.BARCELONA as LatLngExpression;

const map = new Map("map", { center: place, zoom: 11, zoomControl: false });

// Esta capa la añadimos al mapa ya que va a ser la principal (BaseLayer)
const defaultLayer = tileLayerSelect(tileLayers.baseLayers.openTopoMap).addTo(
  map
);

// Segunda capa base (BaseLayer)
// Esta no se añade, para dejar a la vista la primera
const blackWhite = tileLayerSelect(tileLayers.baseLayers.blackWhite);

// Capas de superposición (no es capa base, se comporta como secundaria / complementaria)
// Rutas de trail Añadimos al mapa porque quiero que esté activo
const openRailWay = tileLayerSelect(tileLayers.overlayers.openRailway).addTo(
  map
);

// Los mapas base
const baseMaps = {
  "Open Topo Map": defaultLayer,
  "Black / White": blackWhite,
};

// Las superposiciones (capas transparentes)
const overlayMaps = {
  "Open Rail Way": openRailWay,
};

// Documentación oficial del control
// https://leafletjs.com/reference-1.7.1.html#control
// Propiedades de Layers dentro de control, hereda las de Control
// https://leafletjs.com/reference-1.7.1.html#control-layers
// Más detalles
// https://leafletjs.com/reference-1.7.1.html#control-layers-l-control-layers
// Añadimos el selector para trabajar con las diferentes capas / superposiciones
control
  .layers(baseMaps, overlayMaps, {
    position: "topleft", // 'topright', 'bottomleft', 'bottomright'
    collapsed: true, // false (con esto está a la vista todo)
  })
  .addTo(map);
