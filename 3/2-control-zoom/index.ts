import { tileLayerSelect, tileLayers } from './../../config/tile-layer';
import { control, Map } from "leaflet";

const map = new Map("map", {
  center: [40.4378698,-3.8196205],
  zoom: 11,
  zoomControl: false, // Escondemos el control de zoom por defecto
});

tileLayerSelect(tileLayers.baseLayers.cartoDb.positron).addTo(map);

// Documentación oficial del control
// https://leafletjs.com/reference-1.7.1.html#control

// Controlamos la escala con sistema métrico
control.scale({ imperial: false, metric: true }).addTo(map);

// Control del zoom
control
  .zoom({
    position: "topright", // Posición del control topright, bottomright,...
    zoomOutText: "*",     // Texto que se muestra en el zoom -
    zoomInText: "\\",     // Texto que se muestra en el zoom +
    zoomInTitle: "IN",    // Tooltip que se muestra en el zoom - al poner el cursor
    zoomOutTitle: "OUT",  // Tooltip que se muestra en el zoom + al poner el cursor
  })
  .addTo(map);
