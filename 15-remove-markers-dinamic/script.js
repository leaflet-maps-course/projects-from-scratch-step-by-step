// Inicializamos el mapa en el centro especificado
const map = L.map("map", { center: [43.1736976, -2.4173474], zoom: 16 });

// Añadimos la capa base
L.tileLayer(tileLayers.default, {
  maxZoom: 17,
  attribution: ATRIBUTION,
}).addTo(map);

// Añadiendo acción de borrado
drinkWaterSoraluze.map((drinkWater) => {
  const marker = L.marker([drinkWater.lat, drinkWater.lon], { draggable: true })
  marker.addTo(map);
  marker.on("moveend", () => {
    map.removeLayer(marker);
    console.log(`Eliminado marcador de la posición ${marker._latlng.toString()}`)
  });
});

// Centrar el mapa teniendo en cuenta los dos marcadores
map.fitBounds([...drinkWaterSoraluze]);

