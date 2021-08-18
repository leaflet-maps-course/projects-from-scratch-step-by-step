
// Inicializamos el map en Soraluze (Gipuzkoa)
const map = L.map('map').setView([43.1736976,-2.4173474 ], 13);

// Añadimos al mapa porque quiero que esté actvo
const trailRoutes = L.tileLayer(tileLayers.wayMarkedTrails).addTo(map);
// Esta capa la añadimos al mapa ya que va a ser la principal
const defaultLayer = L.tileLayer(tileLayers.default, {  
	attribution: ATRIBUTION
}).addTo(map);
// Esta no se añade, para dejar a la vista la primera
const cicleLayer = L.tileLayer(tileLayers.thunderForest.openCycleMap, {  
	attribution: ATRIBUTION
});

/*var punto = L.marker([37.88437176085360, -4.779524803161621]).bindPopup('Soy un puntazo');

punto.addTo(map);*/
const optionsCircle = { radius: 200}
const circleCentreSoraluze = L.circle([43.1743001,-2.4132728], optionsCircle);
const circleCentreEibar = L.circle([43.184415,-2.4755397], optionsCircle)
const circlesLayers = L.layerGroup([circleCentreSoraluze, circleCentreEibar]).addTo(map);

// Drink waters
const armsFactoryDrinkWater = L.marker([43.1771129, -2.416363 ]).bindPopup("Cañones Soraluze");
const sportsCentreDrinkWater = L.marker([43.1752228, -2.4145082]).bindPopup("Fuente de al lado del poliddeportivo");
const drinkWatersLayers = L.layerGroup([armsFactoryDrinkWater, sportsCentreDrinkWater]);
// Los mapas base
var baseMaps = {
    "OSM": defaultLayer,
    "CicleMap": cicleLayer,
};

// Las superposiciones (capas transparentes)
var overlayMaps = {
    "Trail": trailRoutes,
	"Town Hall": circlesLayers,
	"Drink Waters": drinkWatersLayers
};

// Documentación oficial del control
// https://leafletjs.com/reference-1.7.1.html#control
// Propiedades de Layers dentro de control, hereda las de Control
// https://leafletjs.com/reference-1.7.1.html#control-layers
// Más detalles 
// https://leafletjs.com/reference-1.7.1.html#control-layers-l-control-layers
L.control.layers(baseMaps, overlayMaps,{
	position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
	collapsed: true // false (con esto está a la vista todo)
}).addTo(map);

map.on('baselayerchange', (e) => console.log(e));

map.on('overlayadd', (e) => console.log(e));

map.on('overlayremove', (e) => console.log(e));