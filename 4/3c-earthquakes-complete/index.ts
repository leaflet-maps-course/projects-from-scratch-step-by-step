import axios from "axios";
import { geoJSON, Map, tileLayer, circleMarker } from "leaflet";
import { ATRIBUTION } from "../../constants/general";
import { tileLayers } from "../../config/tile-layer";

// Para personalizar las zonas con diferentes colores
function getColor(numberValue: number) {
  return numberValue >= 0 && numberValue < 1
    ? "white"
    : numberValue >= 1 && numberValue < 2
    ? "green"
    : numberValue >= 2 && numberValue < 3
    ? "#6e8c51"
    : numberValue >= 3 && numberValue < 4
    ? "yellow"
    : numberValue >= 4 && numberValue < 5
    ? "#f5d142"
    : numberValue >= 5 && numberValue < 6
    ? "orange"
    : numberValue >= 6 && numberValue < 7
    ? "red"
    : "pink";
}

function style(feature: any) {
  console.log(feature);
  return {
    fillColor: getColor(feature.properties.mag),
    weight: 1,
    opacity: 1,
    color: "white",
    dashArray: "1",
    fillOpacity: 1,
  };
}
// Para crear información con el popup
// https://leafletjs.com/reference-1.7.1.html#geojson-oneachfeature
/*
*/
function bindPopup(feature: any, layer: any) {
  layer.bindPopup(
    "<h1>" +
      feature.properties.mag +
      "</h1><p>name: " +
      feature.properties.place +
      "</p>"
  );
}

const map = new Map("map", { center: [19.39068, -99.2836986], zoom: 5 });
tileLayer(tileLayers.thunderForest.landscape, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

axios.get(
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson"
).then((result) => {
  const geoJsonValue = geoJSON(result.data, {
    onEachFeature: bindPopup,
    pointToLayer: (feature, latlng) => {
      return circleMarker(latlng, { radius: 4.5 * feature.properties.mag });
    },
    style,
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
});
