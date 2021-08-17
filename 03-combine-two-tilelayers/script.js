

const map = L.map("map", { center: [43.1736976,-2.4173474 ], zoom: 12 });
L.tileLayer(tileLayers.default, {
	maxZoom: 17,
	attribution: ATRIBUTION
}).addTo(map);

L.tileLayer(tileLayers.wayMarkedTrails, { 
	maxZoom: 17
}).addTo(map);