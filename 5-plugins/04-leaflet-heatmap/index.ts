import {addressPointsMore} from "./../../assets/data/markers/real-world-25002";
import { tileLayers, tileLayerSelect } from "../../config/tile-layer";
import { LatLng, Map, heatLayer } from "leaflet";
// Muy importante cuando trabajamos con los types
import "leaflet.heat";

const map = new Map("map", {
  center: [51.505, -10],
  zoom: 6,
});

tileLayerSelect(tileLayers.baseLayers.cartoDb.positron).addTo(map);
const addressWorldPoints: Array<LatLng> = addressPointsMore.map(function (p) { return new LatLng(+p[0], +p[1]); });

heatLayer(addressWorldPoints, {radius: 40}).addTo(map);

map.fitBounds([
  ...addressWorldPoints.map(point => [point.lat, point.lng] as [number, number])
])
/*
import { bizkaiaPeaks } from './../../assets/data/markers/peaks/bizkaia';
import { gipuzkoaPeaks } from './../../assets/data/markers/peaks/gipuzkoa';
// Ejemplo con montes de Hego Euskal Herria (Práctica)
const gipuzkoaPeaksPoints: Array<LatLng> = gipuzkoaPeaks.map(function (p) { return new LatLng(+p.lat, +p.lon); });
const bizkaiaPeaksPoints: Array<LatLng> = bizkaiaPeaks.map(function (p) { return new LatLng(+p.lat, +p.lon); });
heatLayer([...gipuzkoaPeaksPoints, ...bizkaiaPeaksPoints], {radius: 40}).addTo(map);

map.fitBounds([
  ...gipuzkoaPeaksPoints.map(point => [point.lat, point.lng] as [number, number]),
  ...bizkaiaPeaksPoints.map(point => [point.lat, point.lng] as [number, number]),
])
*/



