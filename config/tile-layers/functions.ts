import { tileLayer } from "leaflet";
import { tileLayers, tileLayersWMS } from "./data";
import { ITileLayerOptions } from "./options.interface";

export const tileLayerSelect = (
  layer: string = tileLayers.baseLayers.default.map,
  config: ITileLayerOptions = {
    attribution: tileLayers.baseLayers.default.atribution,
    maxZoom: 20,
  }
) => {
  return tileLayer(layer, config);
};

export const tileLayerWMSSelect = (
  service: string = tileLayersWMS.mundialis.baseUrl,
  wmsOptions = {
    layers: tileLayersWMS.mundialis.layers.topoOsmWMS,
  }
) => {
  return tileLayer.wms(service, wmsOptions);
};
