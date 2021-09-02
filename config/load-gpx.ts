import gpxParser from "gpxparser";
import axios from "axios";

class GpxFileLoader {
  fileUrl: string;
  constructor(fileUrl: string, track: boolean = true) {
    this.fileUrl = fileUrl;
  }
  async loadPoints() {
      console.log("sosososos")
    // Carga del fichero
    return await axios
      .get(this.fileUrl)
      .then((result) => this.extractPoints(result.data));
    
  }

  private extractPoints(gpxData: string) {
    // 2.- Resultado de la carga del fichero
    console.log("FICHERO GPX");
    console.log("==============");
    // 3.- console.log(gpxData);
    console.log(gpxData);
    // 4.- Parsear con GPX Parse
    const gpx = new gpxParser();
    gpx.parse(gpxData);
    // 5.- Analizar la información de gpx
    console.log(gpx);
    // 6.- Ahora que ya sabemos que la información del track está en "tracks[0]" lo analizamos
    console.log(gpx.tracks[0]);
    // 7.- Cogemos los puntos para analizarlo
    const points = gpx.tracks[0].points;
    return points;
  }
}

export default GpxFileLoader;
