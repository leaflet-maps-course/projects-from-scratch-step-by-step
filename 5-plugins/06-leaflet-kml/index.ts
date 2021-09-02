import { KML_FILES } from './../../config/tracks-kml';
import axios from "axios";
// Añadimos en los types, lo relacionado a KML
/// <reference path="../../custom_typings/leaflet.plugins/index.d.ts"/>
import { tileLayers, tileLayerSelect } from "../../config/tile-layer";
import { KML, Map } from "leaflet";
import "leaflet-kml/L.KML";

const map = new Map("map", {
  center: [51.505, -10],
  zoom: 6,
});

tileLayerSelect(tileLayers.baseLayers.cartoDb.positron).addTo(map);

axios
  .get(
    KML_FILES.SORA_SPORT
  )
  .then((res) => {
    const kmltext = res.data;
    // Creamos la capa desde el KML
    const parser = new DOMParser();
    const kml = parser.parseFromString(kmltext, "text/xml");

    // Creamos el elemento para dibujar

    const track = new KML(kml);
    console.log(track)

    // Añadimos los trazados de fichero y lo añadimos como capa
    map.addLayer(track as any);

    // Ajustamos el contenido
    map.fitBounds(track.getBounds());
  });
