import { Control, DomEvent, DomUtil, Map, marker } from "leaflet";
// + ejemplos: https://www.tabnine.com/code/javascript/modules/leaflet

const watermark = Control.extend({
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

const createTitleSubtitleControl = Control.extend({
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

const customControl = Control.extend({
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

const createLegendPanel = Control.extend({
  options: {
    position: "bottomright",
  },
})

export const LegendPanel = new createLegendPanel();

export const TitleSubtitleControl = new createTitleSubtitleControl();
export const CustomControl = new customControl();
export const Watermark = new watermark();
