import { Map, tileLayer } from "leaflet";

const map = new Map("map", { center: [43.1736976,-2.4173474 ], zoom: 12 });
tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', { // Ir seleccionando diferentes
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(map);

tileLayer('https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png', { 
	maxZoom: 17
}).addTo(map);