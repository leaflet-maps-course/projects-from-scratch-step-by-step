import { Map, polygon } from "leaflet";
import { tileLayers, tileLayerSelect } from "../../config/tile-layer";

const map = new Map("map", {
  center: [-2.946242567775675, 43.26246553790335],
  zoom: 12,
});
tileLayerSelect(tileLayers.baseLayers.thunderForest.outdoors).addTo(map);

/*
  Más información
  https://leafletjs.com/reference-1.7.1.html#polygon
  */
// Figura geométrica con 3 ó más rectas
// Los multipoligonos son arrays tridimensionales. Vamos añadiendo los puntos (min 3) y si queremos
// añadir un corte, es tan fácil como crear una forma con los puntos dentro de otro polígono
// y este se encarga de cortarlo
const polygonItem = polygon(
  [
    [
      [35.10418, -106.62987],
      [35.19738, -106.875],
      [35.07946, -106.80634],
    ],
    [ // Corte, porque en este caso estamos usando las coordenadas dentro del triangulo
      [35.13520131413581, -106.78722521107751], [35.11832763781076, -106.72269733672474], [35.103700957421566, -106.7831064105869]
    ],
    [
      [35.11654, -106.58318],
      [35.13142, -106.48876],
      [35.07384, -106.52412],
    ],
  ],
  { color: "red", weight: 3, fillColor: "blue", fillOpacity: 0.1 }
)
  .bindPopup("Estoy aquí!")
  .addTo(map);

// polygonItem.on("click", (e: {latLatLng}) => console.log(e.latlng));

// Al estar con un poligono, una figura que se cierra después de unir
// vamos a coger la zona que ocupa haciendo un rectangulo imaginario donde obtenemos
// ñas ccoordenadas de arriba-izquierda, arriba-derecha, abajo-izquierda y abajo-derecha
// Con coger la esquina superior de un lado y la inferior del lado contrario, ya acota y
// es suficiente
map.fitBounds([
  [
    polygonItem.getBounds().getNorthEast().lat,
    polygonItem.getBounds().getNorthEast().lng,
  ],
  [
    polygonItem.getBounds().getSouthWest().lat,
    polygonItem.getBounds().getSouthWest().lng,
  ],
]);
