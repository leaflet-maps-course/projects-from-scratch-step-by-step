// https://www.tutorialspoint.com/leafletjs/leafletjs_multi_polyline_and_polygon.htm
const map = L.map("map", {
  center: [-2.946242567775675, 43.26246553790335],
  zoom: 12,
});
L.tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
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
  // fill... es las propiedades del relleno. Sin "fill", las del borde
  { color: "red", weight: 3, fillColor: "blue", fillOpacity: 0.1 }
)
  .bindPopup("Estoy aquí!")
  .addTo(map);

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

  

const polygonThree = L.polygon(
  [
    [43.197199, -2.417625],
    [43.165409, -2.385702],
    [43.164378, -2.440947],
    [43.197199, -2.45],
  ],
  { color: "green", weight: 10 }
).addTo(map);

map.fitBounds([polygon.getBounds(), polygonTwo.getBounds(), polygonThree.getBounds()]);*/