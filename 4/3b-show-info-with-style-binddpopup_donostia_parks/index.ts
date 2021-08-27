import { ssParks } from "./../geojson/donostia_parks";

import { GeoJsonObject } from "geojson";
import { geoJSON, Map, tileLayer } from "leaflet";
import { ATRIBUTION } from "../../constants/general";
import { tileLayers } from "../../constants/tile-layer";

function bindPopup(feature, layer) {
  layer.bindPopup(
    "<h4 style=\"text-align: center\">" + feature.properties.name + "</h4>"
  );
}

function getColor(d) {
  return d.indexOf("Jard") > -1 ? "#F7134E" : "#FFC300";
}

function style(feature) {
  return {
    fillColor: getColor(feature.properties.nombre_cas),
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.7,
  };
}

const map = new Map("map", { center: [43.315547, -1.984636], zoom: 13 });
tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

// Para crear información con el popup
// https://leafletjs.com/reference-1.7.1.html#geojson-oneachfeature
const geoJsonValue = geoJSON(ssParks as GeoJsonObject, {
  onEachFeature: bindPopup,
  style: style,
}).addTo(map);

map.fitBounds([
  [
    geoJsonValue.getBounds().getNorthEast().lat,
    geoJsonValue.getBounds().getNorthEast().lng,
  ],
  [
    geoJsonValue.getBounds().getSouthWest().lat,
    geoJsonValue.getBounds().getSouthWest().lng,
  ],
]);
