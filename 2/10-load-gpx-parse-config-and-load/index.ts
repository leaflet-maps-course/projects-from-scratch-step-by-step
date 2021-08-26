import gpxParser from 'gpxparser';
import axios from 'axios';


axios.get('https://raw.githubusercontent.com/leaflet-maps-course/resources/main/track.gpx').then(
    (result) => addPoints(result.data)
);

// add Point in view
function addPoints(gpxData: string) {
    // 2.- Resultado de la carga del fichero
    console.log("FICHERO GPX");
    console.log("==============");
    // 3.- console.log(gpxData);
  
    // 4.- Parsear con GPX Parse
    let gpx = new gpxParser();
    gpx.parse(gpxData as any);
    // 5.- Analizar la información de gpx
    console.log(gpx);
    // 6.- Ahora que ya sabemos que la información del track está en "tracks[0]" lo analizamos
    console.log(gpx.tracks[0]);
    // 7.- Cogemos los puntos para analizarlo
    const points = gpx.tracks[0].points;
    // 8.- Visualizamos los puntos
    var paragraph = document.getElementById("points");
    points.map((point) => {
      // console.log(point.lat, point.lon)
      
      const text = document.createTextNode(`${point.lat}, ${point.lon}`);
  
      paragraph.appendChild(text);
    });
} 

// 9.- Ahora lo que nos queda es mostrarlo en un mapa bieen dibujado con polylines
  