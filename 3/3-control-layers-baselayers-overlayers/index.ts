import {
    control,
    Map,
    tileLayer
  } from "leaflet";
  import { tileLayers } from "../../config/tile-layer";
  import { ATRIBUTION } from "../../constants/general";
  
  const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 13 });

// Esta capa la añadimos al mapa ya que va a ser la principal (BaseLayer)
const defaultLayer = tileLayer(tileLayers.default, {  
	attribution: ATRIBUTION
}).addTo(map);

// Segunda capa base (BaseLayer)
// Esta no se añade, para dejar a la vista la primera
const cicleLayer = tileLayer(tileLayers.thunderForest.openCycleMap, {  
	attribution: ATRIBUTION
});

// Capas de superposición (no es capa base, se comporta como secundaria / complementaria)
// Rutas de trail Añadimos al mapa porque quiero que esté activo
const trailRoutes = tileLayer(tileLayers.wayMarkedTrails).addTo(map);

// Los mapas base
const baseMaps = {
    "OSM": defaultLayer,
    "CicleMap": cicleLayer,
};

// Las superposiciones (capas transparentes)
const overlayMaps = {
    "Trail": trailRoutes
};

// Documentación oficial del control
// https://leafletjs.com/reference-1.7.1.html#control
// Propiedades de Layers dentro de control, hereda las de Control
// https://leafletjs.com/reference-1.7.1.html#control-layers
// Más detalles 
// https://leafletjs.com/reference-1.7.1.html#control-layers-l-control-layers
// Añadimos el selector para trabajar con las diferentes capas / superposiciones
control.layers(baseMaps, overlayMaps,{
	position: "topright", // 'topleft', 'bottomleft', 'bottomright'
	collapsed: true // false (con esto está a la vista todo)
}).addTo(map);