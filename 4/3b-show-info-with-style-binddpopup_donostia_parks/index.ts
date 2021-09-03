import axios from "axios";
import { geoJSON, Layer, Map } from "leaflet";
import { tileLayers, tileLayerSelect } from "../../config/tile-layer";

function bindPopup(
  feature: {
    properties: { name: string, nombre_cas: string };
  },
  layer: Layer
) {
  layer.bindPopup(
    '<h4 style="text-align: center">' + feature.properties.name + "</h4>"
  );
}

function getColor(d: string) {
  return d.indexOf("Jard") > -1 ? "#F7134E" : "#FFC300";
}

function style(feature: any) {
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
tileLayerSelect(tileLayers.baseLayers.stadiaOutdoors).addTo(map);

axios
  .get(
    "https://raw.githubusercontent.com/leaflet-maps-course/resources/main/geojson/donostia_parks.geojson"
  )
  .then((result) => {
    // Para crear información con el popup
    // https://leafletjs.com/reference-1.7.1.html#geojson-oneachfeature
    const geoJsonValue = geoJSON(result.data, {
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
  });
