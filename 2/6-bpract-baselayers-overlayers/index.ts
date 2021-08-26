import {
    circle,
    control,
    LayerGroup,
    layerGroup,
    Map,
    marker,
    tileLayer
  } from "leaflet";
  import { tileLayers } from "../../constants/tile-layer";
  import { ATRIBUTION } from "../../constants/general";

  // Inicializamos el map en Soraluze (Gipuzkoa)
const map = new Map("map").setView([43.1736976,-2.4173474 ], 13);


// Esta capa la añadimos al mapa ya que va a ser la principal
const defaultLayer = tileLayer(tileLayers.default, {  
	attribution: ATRIBUTION
}).addTo(map);
// Esta no se añade, para dejar a la vista la primera
const cicleLayer = tileLayer(tileLayers.thunderForest.openCycleMap, {  
	attribution: ATRIBUTION
});

// Añadimos al mapa porque quiero que esté actvo
const trailRoutes = tileLayer(tileLayers.wayMarkedTrails).addTo(map);

// Añadimos una capa con los circulos
const optionsCircle = { radius: 200};
const circleCentreSoraluze = circle([43.1743001,-2.4132728], optionsCircle);
const circleCentreEibar = circle([43.184415,-2.4755397], optionsCircle);
// Otra forma de añadir a una capa diferente (en este caso por defecto SI SE AÑADE)
const circlesLayers = layerGroup([circleCentreSoraluze, circleCentreEibar]).addTo(map);

// Drink waters
const armsFactoryDrinkWater = marker([43.1771129, -2.416363 ]).bindPopup("Cañones Soraluze");
const sportsCentreDrinkWater = marker([43.1752228, -2.4145082]).bindPopup("Fuente de al lado del poliddeportivo");

// Una de las formas para agruparlo en una capa
//const drinkWatersLayers = layerGroup([armsFactoryDrinkWater, sportsCentreDrinkWater]);

// Otra de las formas SIN AÑADIRLO AL MAPA
const drinkWatersLayers = new LayerGroup();
armsFactoryDrinkWater.addTo(drinkWatersLayers);
sportsCentreDrinkWater.addTo(drinkWatersLayers);

/**
 * Si quisieramos añadirlo al mapa Por defecto
 * drinkWatersLayers.addTo(map);
 */

// Los mapas base
const baseMaps = {
    "OSM": defaultLayer,
    "CicleMap": cicleLayer,
};

// Las superposiciones (capas transparentes)
const overlayMaps = {
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
control.layers(baseMaps, overlayMaps,{
	position: "topright", // 'topleft', 'bottomleft', 'bottomright'
	collapsed: true // false (con esto está a la vista todo)
}).addTo(map);

map.on("baselayerchange", (e) => console.log(e));

map.on("overlayadd", (e) => console.log(e));

map.on("overlayremove", (e) => console.log(e));