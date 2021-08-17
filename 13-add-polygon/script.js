const map = L.map("map", { center: [43.1736976, -2.4173474], zoom: 12 });
L.tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION
    
}).addTo(map);

/*
Más información
https://leafletjs.com/reference-1.7.1.html#polygon
Triangle (3)
• Hexagon (6)
• Octagon (8)
*/

// Figura geométrica con 3 ó más rectas
const polygon = L.polygon(
  [
    [43.197199, -2.417625],
    [43.165409, -2.385702],
    [43.164378, -2.440947],
  ],
  { color: "red", weight: 3, fillColor:'blue',fillOpacity:0.1}
).bindPopup('Hi There!').addTo(map);

map.fitBounds(polygon.getBounds());

// Más polígonos
/*
const polygonTwo = L.polygon(
	[
	  [43.169294, -2.403593],
	  [43.180748, -2.372523],
	  [43.206292, -2.435324],
	  [43.164378, -2.440947],
	],
	{ color: "yellow", weight: 3 }
  ).addTo(map);

  map.fitBounds([polygon.getBounds(), polygonTwo.getBounds()]);*/