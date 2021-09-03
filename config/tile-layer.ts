import { ATRIBUTION } from "./attribution";
import { tileLayer } from "leaflet";

export interface ITileLayerOptions {
  minZoom?: number;
  maxZoom?: number;
  subdomains?: string | string[];
  errorTileUrl?: string;
  zoomOffset?: number;
  tms?: boolean;
  zoomReverse?: boolean;
  detectRetina?: boolean;
  crossOrigin?: boolean | string;
  attribution?: string;
}

const thunderForestKey = "apikey=dcf50cc5d36e405092768251d95d6848";
export const tileLayers = {
  baseLayers: {
    default: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
    blackWhite: "http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png",
    thunderForest: {
      openCycleMap: `https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?${thunderForestKey}`,
      transport: `https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?${thunderForestKey}`,
      landscape: `https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?${thunderForestKey}`,
      outdoors: `https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?${thunderForestKey}`,
      transportDark: `https://tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?${thunderForestKey}`,
      spinalMap: `https://tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?${thunderForestKey}`,
      pioneer: `https://tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?${thunderForestKey}`,
      mobileAtlas: `https://tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?${thunderForestKey}`,
      neighbourhood: `https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?${thunderForestKey}`,
      atlas: `https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?${thunderForestKey}`,
    },
    osmManik: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    osmDE: "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png",
    osmHot: "http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
    openTopoMap: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    stadiaAlidadeSmooth:
      "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
    stadiaAlidadeSmoothDark:
      "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
    stadiaOsmBright:
      "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
    stadiaOutdoors:
      "https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png",
    cycloOsm:
      "https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
    esri: {
      worldStreetMap:
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
      worldImagery:
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    },
    cartoDb: {
      positron:
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      positronNoLabels:
        "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png",
      voyager:
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    },
    usgsUs: {
      top: "https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}",
      imagery:
        "https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}",
    },
    hikeBike: "https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png",
  },
  overlayers: {
    openSeaMap: "https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png",
    openPtMap: "http://openptmap.org/tiles/{z}/{x}/{y}.png",
    openRailway:
      "https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png",
    wayMarkedTrails: {
      hiking: "https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png",
      cycling: "https://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png",
      mtb: "https://tile.waymarkedtrails.org/mtb/{z}/{x}/{y}.png",
      slopes: "https://tile.waymarkedtrails.org/slopes/{z}/{x}/{y}.png",
    },
    openSnowMap: "https://tiles.opensnowmap.org/pistes/{z}/{x}/{y}.png",
  },
};

export const tileLayersWMS = {
  mundialis: {
    baseUrl: "http://ows.mundialis.de/services/service?",
    layers: {
      osmWMS: "OSM-WMS",
      osmOverlayWMS: "OSM-Overlay-WMS",
      topoWMS: "TOPO-WMS",
      topoOsmWMS: "TOPO-OSM-WMS",
      srtmThirtyHillshade: "SRTM30-Hillshade",
      srtmThirtyColored: "SRTM30-Colored",
      srtmThirtyColoredHillshade: "SRTM30-Colored-Hillshade",
    },
  }
  
};

export const tileLayerSelect = (
  layer: string = tileLayers.baseLayers.default,
  config: ITileLayerOptions = {
    attribution: ATRIBUTION,
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
