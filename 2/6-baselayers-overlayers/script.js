
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

// Los mapas base
var baseMaps = {
    "OSM": defaultLayer,
    "CicleMap": cicleLayer,
};

// Las superposiciones (capas transparentes)
var overlayMaps = {
    "Trail": trailRoutes
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