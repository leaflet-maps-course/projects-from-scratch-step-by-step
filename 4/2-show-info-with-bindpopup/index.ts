import { GeoJsonObject } from "geojson";
import { geoJSON, Map, tileLayer } from "leaflet";
import { mexicoStatesGeoJSON } from "./../geojson/mexico_estados_geojson";
import { tileLayers } from "./../../constants/tile-layer";
import { ATRIBUTION } from "../../constants/general";

const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 12 });
tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

// Para crear información con el popup
// https://leafletjs.com/reference-1.7.1.html#geojson-oneachfeature
const geoJsonValue = geoJSON(mexicoStatesGeoJSON as GeoJsonObject, {
  onEachFeature : (feature, layer) => {
    layer.bindPopup("<h1>"+feature.properties.CODIGO+"</h1><p>name: "+feature.properties.ESTADO+"</p>");
  }
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