import { tileLayers } from "../../config/tile-layer";
import { ATRIBUTION } from "../../constants/general";
import { control, Map, tileLayer } from "leaflet";

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

// Controlamos la escala con sistema métrico
control.scale({ metric: true }).addTo(map);

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
