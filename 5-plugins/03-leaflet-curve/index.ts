import { tileLayers, tileLayerSelect } from "../../config/tile-layer";
import { curve, Map } from "leaflet";
import "@elfalem/leaflet-curve";

const map = new Map("map", {
  center: [51.505, -10],
  zoom: 6,
});

tileLayerSelect(tileLayers.baseLayers.cartoDb.positron).addTo(map);

var latlngs = [];

var latlng1 = [23.634501, -102.552783],
  latlng2 = [17.987557, -92.929147];

var offsetX = latlng2[1] - latlng1[1],
  offsetY = latlng2[0] - latlng1[0];

var r = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2)),
  theta = Math.atan2(offsetY, offsetX);

var thetaOffset = 3.14 / 10;

var r2 = r / 2 / Math.cos(thetaOffset),
  theta2 = theta + thetaOffset;

var midpointX = r2 * Math.cos(theta2) + latlng1[1],
  midpointY = r2 * Math.sin(theta2) + latlng1[0];

var midpointLatLng = [midpointY, midpointX];

latlngs.push(latlng1, midpointLatLng, latlng2);

var pathOptions = {
  color: "red",
  weight: 3,
};

var curvedPath = curve(
  [
    "M",
    [50.54136296522163, 28.520507812500004],
    "C",
    [52.214338608258224, 28.564453125000004],
    [48.45835188280866, 33.57421875000001],
    [50.680797145321655, 33.83789062500001],
    "V",
    [48.40003249610685],
    "L",
    [47.45839225859763, 31.201171875],
    [48.40003249610685, 28.564453125000004],
    "Z",
  ],
  { color: "red", fill: true }
).addTo(map);
