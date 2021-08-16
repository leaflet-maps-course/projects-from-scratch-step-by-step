
// Inicializamos el map en Soraluze (Gipuzkoa)
const map = L.map('map').setView([43.1736976,-2.4173474 ], 13);

// Añadimos al mapa porque quiero que esté actvo
const trailRoutes = L.tileLayer(tileLayers.wayMarkedTrails).addTo(map);
// Esta capa la añadimos al mapa ya que va a ser la principal
const defaultLayer = L.tileLayer(tileLayers.default, {  
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(map);
// Esta no se añade, para dejar a la vista la primera
const cicleLayer = L.tileLayer(tileLayers.thunderForest.openCycleMap, {  
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

/*var punto = L.marker([37.88437176085360, -4.779524803161621]).bindPopup('Soy un puntazo');

punto.addTo(map);*/

// Los mapas base
var baseMaps = {
    "OSM": defaultLayer,
    "CicleMap": cicleLayer,
};

// Las superposiciones (capas transparentes)
var overlayMaps = {
    "Trail": trailRoutes
};

L.control.layers(baseMaps, overlayMaps,{
	position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
	collapsed: false // true
}).addTo(map);