import { tileLayers } from "../../constants/tile-layer";
import { ATRIBUTION } from "../../constants/general";
import {
  circleMarker,
  Control,
  control,
  DomUtil,
  Map,
  tileLayer,
} from "leaflet";

const map = new Map("map", {
  center: [43, -93],
  zoom: 7,
  zoomControl: true, // Escondemos el control de zoom por defecto
});

tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

//data
const myPoints = [
  ["22", 42.99497, -93.50808],
  ["20", 42.10269, -93.23696],
  ["15", 43.2, -93.1],
  ["19", 42.98585, -94.50659],
  ["12", 42.93163, -93.81726],
  ["5", 42.5183, -93.89],
  ["14", 42.42079, -93.5783],
  ["23", 42.08414, -93.96632],
  ["6", 42.51285, -93.0],
  ["14", 42.013997, -93.635769],
];

//used by color and legend functions to define data breaks
const breaks = [17, 14, 0];
const labels = ["Muy bueno", "Suficiente", "Malo"];

//set color of marker function
function getColor(d) {
  return d >= breaks[0] ? "green" : d >= breaks[1] ? "#ffff00" : "red";
}

for (let i = 0; i < myPoints.length; i++) {
  circleMarker([+myPoints[i][1], +myPoints[i][2]], {
    radius: +myPoints[i][1]/2,
    fillColor: getColor(myPoints[i][0]),
    color: "#000",
    stroke: true,
    weight: 1,
    opacity: 1,
    fillOpacity: 0.9,
  })
    .bindPopup("Value: " + myPoints[i][0]) //note there is no comma here
    .addTo(map);
}

const legend = new Control({ position: "bottomright" });

legend.onAdd = function (map) {
  // Elemento , clases que se añaden
  const div = DomUtil.create("div", "info legend");
  // div.innerHTML += "<div class=\"row\">";

  // loop through items and generate legend items each
  for (let i = 0; i < breaks.length; i++) {
    div.innerHTML +=
      '<div class="row"><div class="column"><i style="background:' +
      getColor(breaks[i]) +
      ' "></i> </div><div class="column">' +
      labels[i] +
      (breaks ? "" + "</div></div>" : "");
  }
  return div;
};

legend.addTo(map);
