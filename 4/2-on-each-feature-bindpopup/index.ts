import { geoJSON, Map } from "leaflet";
import { tileLayers, tileLayerSelect } from "../../config/tile-layer";
import axios from "axios";

const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 12 });
tileLayerSelect(tileLayers.baseLayers.thunderForest.spinalMap).addTo(map);


// Cargar el GeoJSON y añadirlo en el mapa
axios
  .get(
    "https://raw.githubusercontent.com/leaflet-maps-course/resources/main/geojson/mexico_states.geojson"
  )
  .then((result) => {
    // Para crear información con el popup
    // https://leafletjs.com/reference-1.7.1.html#geojson-oneachfeature
    const geoJsonValue = geoJSON(result.data, {
      onEachFeature: (feature, layer) => {
        layer.bindPopup(
          "<h1>" +
            feature.properties.CODIGO +
            "</h1><p>name: " +
            feature.properties.ESTADO +
            "</p>"
        );
      },
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
