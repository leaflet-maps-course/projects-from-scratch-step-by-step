import { gipuzkoaPeaks } from "./../../assets/data/markers/peaks/gipuzkoa";
import { bizkaiaPeaks } from "./../../assets/data/markers/peaks/bizkaia";
import { nafarroaPeaks } from "./../../assets/data/markers/peaks/nafarroa";
import { arabaPeaks } from "./../../assets/data/markers/peaks/araba";
import {
    Map,
    tileLayer,
    marker,
    LatLng,
    markerClusterGroup,
    MarkerClusterGroup,
  } from "leaflet";
  import "leaflet.markercluster";
  import { tileLayers } from "../../constants/tile-layer";
  import { ATRIBUTION } from "../../constants/general";

  function groupMarkers(data: any, markers: MarkerClusterGroup) {
    for (let i = 0; i < data.length; i++) {
      const location = data[i];
      const title = (location.tags.name) ? location.tags.name : "No especificado";
      const elevation = (location.tags.ele) ? ` (${location.tags.ele}m.)` : "";
      const markerItem = marker(new LatLng(location.lat, location.lon), { title: title });
      markerItem.bindPopup(title.concat(elevation));
      markers.addLayer(markerItem);
    }
  }
  // Inicializamos el mapa en el centro especificado
  const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 12 });
  
  // Añadimos la capa base
  tileLayer(tileLayers.default, {
    maxZoom: 18,
    attribution: ATRIBUTION,
  }).addTo(map);
  
  const markers = markerClusterGroup();
  
  // Recorremos los marcadores y los agrupamos
  groupMarkers(gipuzkoaPeaks, markers);
  groupMarkers(bizkaiaPeaks, markers);
  groupMarkers(arabaPeaks, markers);
  groupMarkers(nafarroaPeaks, markers);
  
  map.addLayer(markers);
  
  map.fitBounds([
    ...gipuzkoaPeaks.map((location) => [location.lat, location.lon] as [number, number]),
    ...bizkaiaPeaks.map((location) => [location.lat, location.lon] as [number, number]),
    ...arabaPeaks.map((location) => [location.lat, location.lon] as [number, number]), 
    ...nafarroaPeaks.map((location) => [location.lat, location.lon] as [number, number])
  ]);
  