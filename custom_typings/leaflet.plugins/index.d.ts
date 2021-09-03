import * as L from "leaflet";

declare module "leaflet" {
  // leafle-browser-print
  namespace control {
    function browserPrint(options?: any): Control.BrowserPrint;
  }
  namespace Control {
    interface BrowserPrint {
      addTo(map: L.Map): any;
    }
  }
  // leaflet-path-drag
  function polyline(
    latlngs: LatLngExpression[] | LatLngExpression[][],
    options?: PathDrag
  ): any;
  function polygon(
    latlngs: LatLngExpression[] | LatLngExpression[][],
    options?: PathDrag
  ): Polygon<any>;

  function rectangle(
    latLngBounds: LatLngBoundsExpression,
    options?: PathDrag
  ): Rectangle<any>;

  function circle(
    latlng: LatLngExpression,
    options?: PathDrag
  ): Circle<any>;

  interface PathDrag extends PolylineOptions {
    draggable: boolean;
  }

  // leaflet-plugins
  

  // leaflet-kml
  class KML {
    constructor(options: any);
    getBounds(): any;
  }
}
