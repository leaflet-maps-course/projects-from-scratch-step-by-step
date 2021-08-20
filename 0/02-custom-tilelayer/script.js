

const map = L.map("map", { center: [43.1736976,-2.4173474 ], zoom: 12 });
L.tileLayer(tileLayers.thunderForest.openCycleMap, { // Ir seleccionando diferentes
	maxZoom: 17,
	attribution: ATRIBUTION
}).addTo(map);