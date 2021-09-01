import {
    Map,
    circle,
    marker,
    LatLng,
  } from "leaflet";
  import { tileLayers, tileLayerSelect } from "../../config/tile-layer";

  // Para usar una ubicación fake, en Chrome, tres puntos verticales en herramientas
  // de desarrollador => More tools / Sensors y ahí tenemos diferentes ubiacaciones

  // Inicializamos el map en Soraluze (Gipuzkoa)
const map = new Map("map").setView([43.1736976,-2.4173474 ], 10);
// const map = L.map("map", { center: [43.1736976, -2.4173474], zoom: 12 });
tileLayerSelect(tileLayers.baseLayers.cycloOsm).addTo(map);

function onLocationFound(e: {latlng: LatLng, accuracy: number}) {
  const radius = e.accuracy;
  circle(e.latlng, radius).addTo(map);
  marker(e.latlng).addTo(map)
  .bindPopup("Estás dentro del radio de " + radius + " metros mostrado").openPopup();
  map.flyTo(e.latlng, 12, {
    // https://leafletjs.com/reference-1.7.1.html#zoom-options
    animate: true,
    duration: 2.5,
  });
}

map.on("locationfound", onLocationFound);

function onLocationError(e: {message: string}) {
  alert(e.message);
}

map.on("locationerror", onLocationError);


map.locate({maxZoom: 12});