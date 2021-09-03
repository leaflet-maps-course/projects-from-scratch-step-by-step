import { tileLayersWMS, tileLayerWMSSelect } from './../../config/tile-layer';
import { control, Map } from "leaflet";

const map = new Map("map", { center: [43.1736976,-2.4173474 ], zoom: 8 });
tileLayerWMSSelect(tileLayersWMS.mundialis.baseUrl, {
    layers: tileLayersWMS.mundialis.layers.srtmThirtyColoredHillshade
}).addTo(map);

const basemaps = {
    Topography: tileLayerWMSSelect(tileLayersWMS.mundialis.baseUrl, {
        layers: tileLayersWMS.mundialis.layers.topoWMS
    }),
    Places: tileLayerWMSSelect(tileLayersWMS.mundialis.baseUrl, {
        layers: tileLayersWMS.mundialis.layers.osmOverlayWMS
    }),

    'Topography with OSM': tileLayerWMSSelect(tileLayersWMS.mundialis.baseUrl, {
        layers: tileLayersWMS.mundialis.layers.topoOsmWMS
    }),

    'Colored Hillshade': tileLayerWMSSelect(tileLayersWMS.mundialis.baseUrl, {
        layers: tileLayersWMS.mundialis.layers.srtmThirtyColoredHillshade
    })
};

control.layers(basemaps).addTo(map);

basemaps.Topography.addTo(map);

// Añadimos una capa de superficie, que no cubra la principal capa de base
// tileLayerSelect(tileLayers.overlayers.wayMarkedTrails.hiking).addTo(map);