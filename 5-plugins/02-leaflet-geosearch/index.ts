import { tileLayers } from "../../constants/tile-layer";
import { ATRIBUTION } from "../../constants/general";
import { Map, tileLayer } from "leaflet";

// Opciones para hacer la búsqueda geográfica
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";

const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 9 });

tileLayer(tileLayers.default, {
  attribution: ATRIBUTION,
}).addTo(map);

map.addControl(
  GeoSearchControl({
    // Opciones: https://smeijer.github.io/leaflet-geosearch/leaflet-control#properties
    provider: new OpenStreetMapProvider({
      params: {
        email: "a@gmail.com", // auth for large number of requests,
        "accept-language": "es", // Resultados en Español
        countrycodes: "es", // Limitar resultados a España
      },
    }),
    style: "bar", // Esto pondrá la barra arriba a la mitad
  })
);
