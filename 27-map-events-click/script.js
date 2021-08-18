
// Inicializamos el map en Soraluze (Gipuzkoa)
const map = L.map('map').setView([43.1736976,-2.4173474 ], 13);
// const map = L.map("map", { center: [43.1736976, -2.4173474], zoom: 12 });
L.tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

// Initialize clicked
let mapClicked = 0;

map.on('click', function(e){
  mapClicked =+ 1;
  console.log(mapClicked);
    setTimeout(function(){
        if(mapClicked == 1){
          L.marker([e.latlng.lat, e.latlng.lng])
          .bindPopup(
            `<h2>Ubicación:</h2>
            ${e.latlng.lat},${e.latlng.lng}`
          ).addTo(map);                
          mapClicked = 0;
        }
     }, 250);
});

map.on('dblclick', (e) => {
  console.log(e);
  mapClicked = 0;
  const optionsCircle = { radius: 40, color: "#ff7800", weight: 3, stroke: true };
  const mainCircle = L.circle([e.latlng.lat, e.latlng.lng], optionsCircle).addTo(map);
  map.fitBounds([
    mainCircle.getBounds()
  ]);
});