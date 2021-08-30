import {
    Map,
    tileLayer,
    circle,
    marker,
    LatLng,
  } from "leaflet";
  import { tileLayers } from "../../config/tile-layer";
  import { ATRIBUTION } from "../../constants/general";

  // Inicializamos el map en Soraluze (Gipuzkoa)
const map = new Map("map").setView([43.1736976,-2.4173474 ], 13);
// const map = L.map("map", { center: [43.1736976, -2.4173474], zoom: 12 });
tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

// Initialize clicked
let mapClicked = 0;

map.on("click", function(e: {latlng: LatLng}){
  mapClicked =+ 1;
  console.log(mapClicked);
  // Añadimos esto para esperar 0.25 sg y en el caso que se haya reseteado los clicks
  // no haga nada y añada el círculo
    setTimeout(function(){
        if(mapClicked == 1){
          console.log("Añadiendo marcador");
          marker([e.latlng.lat, e.latlng.lng])
          .bindPopup(
            `<h2>Ubicación:</h2>
            ${e.latlng.lat},${e.latlng.lng}`
          ).addTo(map);           
          mapClicked = 0;
        }
     }, 250);
});

map.on("dblclick", (e: {latlng: LatLng}) => {
  console.log(e);
  mapClicked = 0;
  const optionsCircle = { radius: 40, color: "#ff7800", weight: 3, stroke: true };
  circle([e.latlng.lat, e.latlng.lng], optionsCircle) .bindPopup(
    `<h2>Ubicación:</h2>
    ${e.latlng.lat},${e.latlng.lng}`
  ).addTo(map);
});