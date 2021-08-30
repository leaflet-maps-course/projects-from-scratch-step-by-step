import { ATRIBUTION } from "./../../constants/general";
import { GeoJsonObject } from "geojson";
import { geoJSON, Map, tileLayer } from "leaflet";
import { mexicoStatesGeoJSON } from "./../geojson/mexico_estados_geojson";
import { tileLayers } from "./../../config/tile-layer";

const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 12 });
tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

const geoJsonValue = geoJSON(mexicoStatesGeoJSON as GeoJsonObject).addTo(map);

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
