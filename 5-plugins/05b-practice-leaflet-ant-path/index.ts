import { tileLayers, tileLayerSelect } from "../../config/tile-layer";
import { LatLng, LatLngTuple, Map, polygon, polyline } from "leaflet";
import { drinkWaterSoraluze } from "../../assets/data/markers/drink_water_soraluze";
import { antPath } from "leaflet-ant-path";
import GpxFileLoader from "../../config/load-gpx";
import { TRACKS } from "../../config/tracks";

const map = new Map("map", {
  center: [43.175663, -2.412301],
  zoom: 6,
});

tileLayerSelect(tileLayers.baseLayers.cartoDb.positron).addTo(map);


map.on("click", function (e: { latlng: LatLng }) {
  console.log(`Estoy en la posición: ${e.latlng.toString()}`)
});

const optionsPolylines = {
  use: polyline,
  delay: 1000,
  dashArray: [10, 20],
  weight: 5,
  color: "green",
  pulseColor: "blue",
};


const fileData = new GpxFileLoader(TRACKS.HH_GOPEGI_LANDA);
fileData.loadPoints().then((data: Array<{lat: number, lon: number}>) => {
  
  const pathRoute = antPath(data, optionsPolylines);
  pathRoute.addTo(map);
  const positions : [number, number][] = data.map((point) => {
    return [
      +point.lat.toFixed(5),
      +point.lon.toFixed(5)
    ]
  });
  map.fitBounds([
    pathRoute.getBounds()
  ]);

});