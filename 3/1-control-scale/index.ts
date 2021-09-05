import { tileLayers, tileLayerSelect } from "./../../config/tile-layer";
import { control, LatLngExpression, Map } from "leaflet";
import { PLACES_LIST_LOCATIONS } from "../../config/locations";

const place = PLACES_LIST_LOCATIONS.VENECIA_ITALIA as LatLngExpression;

const map = new Map("map", { center: place, zoom: 13 });

tileLayerSelect(tileLayers.baseLayers.openTopoMap).addTo(map);

control.scale({maxWidth: 200}).addTo(map);
