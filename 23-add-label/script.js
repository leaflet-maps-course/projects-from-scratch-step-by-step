

const map = L.map("map", { center: [43.1736976,-2.4173474 ], zoom: 12 });
L.tileLayer(tileLayers.thunderForest.openCycleMap, { // Ir seleccionando diferentes
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(map);