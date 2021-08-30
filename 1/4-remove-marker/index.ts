import { Map, marker, LayerGroup } from "leaflet";
import { tileLayers, tileLayerSelect } from "../../config/tile-layer";

// Inicializamos el mapa en el centro especificado
const map = new Map("map", { center: [43.1736976, -2.4173474], zoom: 12 });

// Añadimos la capa base
tileLayerSelect(tileLayers.baseLayers.hikeBike).addTo(map);

// Añadimos la capa de los marcadores mediante un LayerGroup
// https://leafletjs.com/reference-1.7.1.html#layergroup
// Esto lo usamos para tenerlo más accesible para poner / quitar los contenidos
const markersLayerGroup = new LayerGroup();

// Añadimos el marcador
const markerSoraluzeStadium = marker([43.180930, -2.421315], {draggable: true}).addTo(markersLayerGroup);

const markerIpuruaStadium = marker([43.1817416,-2.4780567], {draggable: true}).addTo(markersLayerGroup);

markersLayerGroup.addTo(map);

// Podría ser lo mismo con "dragend"
// Si queremos eliminar inddividualmente, podemos hacerlo desde la capa
// markersLayerGroup o map, ya que se ha añadido a esta
markerIpuruaStadium.on("moveend", () => map.removeLayer(markerIpuruaStadium));
markerSoraluzeStadium.on("moveend", () => map.removeLayer(markerSoraluzeStadium));

// Centrar el mapa teniendo en cuenta los dos marcadores
map.fitBounds([
  [markerIpuruaStadium.getLatLng().lat, markerIpuruaStadium.getLatLng().lng], 
  [markerSoraluzeStadium.getLatLng().lat, markerSoraluzeStadium.getLatLng().lng]
]);