import { Control, DomEvent, DomUtil, Map, marker, Util } from "leaflet";
// + ejemplos: https://www.tabnine.com/code/javascript/modules/leaflet

const Watermark = Control.extend({
  initialize: function (options: object) {
    Util.setOptions(this, options);
  },
  options: {
    position: "topleft",
  },
  onAdd: function (_: Map) {
    // Selector
    const img = DomUtil.create("img");
    img.src =
      "https://raw.githubusercontent.com/leaflet-maps-course/resources/main/logotypes/am.png";
    img.style.width = "50px";
    return img;
  },
});

const TitleSubtitleControl = Control.extend({
  initialize: function (options: object) {
    Util.setOptions(this, options);
  },
  options: {
    position: "bottomleft",
  },
  onAdd: function (_: Map) {
    var controlDiv = DomUtil.create("span", "title-subtitle");
    controlDiv.style.backgroundColor = "whitesmoke";
    controlDiv.style.padding = "1px";
    controlDiv.style.width = "100%";
    controlDiv.style.textAlign = "center";
    controlDiv.innerHTML = "<h5>Titulo</h5><span>Subtitulo</span>";
    return controlDiv;
  },
});

const CustomControl = Control.extend({
  initialize: function (options: object) {
    Util.setOptions(this, options);
  },
  options: {
    position: "topleft",
  },
  onAdd: function (map: Map) {
    var container = DomUtil.create("input");
    container.type = "button";
    container.title = "Obtener coordenadas centrales";
    // container.value = "Label del botón";
    container.style.backgroundColor = "yellow";
    // Para poner una imagen en vez de texto
    container.style.backgroundImage =
      "url(https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png)";
    container.style.backgroundSize = "30px 30px";
    container.style.backgroundRepeat = "no-repeat";
    container.style.width = "30px";
    container.style.height = "30px";
    container.style.padding = "10px";

    // Esto es equivalente a hacer container.contextmenu...
    DomEvent.on(container, "contextmenu", (e) => DomEvent.stopPropagation(e));
    container.onmouseover = () => (container.style.backgroundColor = "grey");

    container.onmouseout = () => (container.style.backgroundColor = "yellow");

    container.onclick = () => {
      const markerItem = marker([map.getCenter().lat, map.getCenter().lng]);

      markerItem.bindPopup(markerItem.getLatLng().toString());
      markerItem.addTo(map);
      // Aparte de añadir el marcador se puede personalizar los eventos
      // Deshabilitar click derecho
      markerItem.on("contextmenu", () => map.removeLayer(markerItem));
    };

    return container;
  },
});

const FullScreenMap = Control.extend({
  options: {
    position: "topleft",
  },
  onAdd: function (_: Map) {
    var container = DomUtil.create(
      "input",
      "leaflet-control-zoom leaflet-bar leaflet-control"
    );
    container.type = "button";
    container.title = "Ver en pantalla completa";
    // container.innerHTML = "hola"
    container.style.backgroundImage =
      "url(https://cdn-icons-png.flaticon.com/512/2089/2089670.png)";
    container.style.backgroundSize = "15px 15px";
    container.style.backgroundRepeat = "no-repeat";
    container.style.backgroundPosition = "50% 50%";
    container.style.width = "32px";
    container.style.height = "32px";
    container.style.padding = "12px";
    container.style.lineHeight = "30px";
    container.style.fontSize = "22px";
    container.style.fontWeight = "bold";
    container.style.cursor = "pointer";

    // Esto es equivalente a hacer container.contextmenu...
    DomEvent.on(container, "contextmenu", (e) => DomEvent.stopPropagation(e));

    container.onclick = () => {
      const mapElement = document.getElementById("map");
      mapElement?.requestFullscreen();
    };

    return container;
  },
});

export const titleSubtitleControl = (options?: object) =>
  new TitleSubtitleControl(options);
export const customControl = (options?: object) => new CustomControl(options);
export const watermark = (options?: object) => new Watermark(options);
export const fullScreen = (options?: object) => new FullScreenMap(options);
