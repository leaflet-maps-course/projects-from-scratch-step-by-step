import axios from "axios";
import { geoJSON, Map } from "leaflet";
import { tileLayers, tileLayerSelect } from "./../../config/tile-layer";

const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 12 });
tileLayerSelect(tileLayers.baseLayers.thunderForest.spinalMap).addTo(map);

// Cargar el GeoJSON y añadirlo en el mapa
axios
  .get(
    "https://raw.githubusercontent.com/leaflet-maps-course/resources/main/geojson/mexico_states.geojson"
  )
  .then((result) => {
    const geoJsonValue = geoJSON(result.data).addTo(map);

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
