import { geoJSON, Map } from "leaflet";
import { tileLayers, tileLayerSelect } from "../../config/tile-layer";
import axios from "axios";

const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 12 });
tileLayerSelect(tileLayers.baseLayers.stadiaOutdoors).addTo(map);

// Para crear información con el popup
// https://leafletjs.com/reference-1.7.1.html#geojson-oneachfeature

axios
  .get(
    "https://raw.githubusercontent.com/leaflet-maps-course/resources/main/geojson/donostia_parks.geojson"
  )
  .then((result) => {
    const geoJsonValue = geoJSON(result.data, {
      onEachFeature: (feature, layer) => {
        layer.bindPopup("<h4 style=\"text-align: center\">"+feature.properties.name+"</h4>");
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
