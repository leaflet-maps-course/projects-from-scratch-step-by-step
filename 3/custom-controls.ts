import { Control, DomUtil, Map, marker } from "leaflet";
// + ejemplos: https://www.tabnine.com/code/javascript/modules/leaflet

const watermark = Control.extend({
  options: {
    position: "bottomleft",
  },
  onAdd: function (_: Map) {
    const img = DomUtil.create("img");
    img.src =
      "https://raw.githubusercontent.com/leaflet-maps-course/resources/main/logotypes/am.png";
    img.style.width = "50px";
    // img.style.marginLeft = "50px";
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
    container.value = "O";

    container.style.backgroundColor = "white";
    // Para poner una imagen en vez de texto
    //container.style.backgroundImage = "url(https://t1.gstatic.com/images?q=tbn:ANd9GcR6FCUMW5bPn8C4PbKak2BJQQsmC-K9-mbYBeFZm1ZM2w2GRy40Ew)";
    container.style.backgroundSize = "30px 30px";
    container.style.width = "30px";
    container.style.height = "30px";

    container.onmouseover = function () {
      container.style.backgroundColor = "grey";
    };
    container.onmouseout = function () {
      container.style.backgroundColor = "white";
    };

    container.onclick = function () {
      alert(
        `Coordenadas del centro: ${map.getCenter().lat} / ${
          map.getCenter().lng
        }`
      );
      marker([map.getCenter().lat, map.getCenter().lng]).addTo(map);
    };

    return container;
  },
});

export const TitleSubtitleControl = new createTitleSubtitleControl();
export const CustomControl = new customControl();
export const Watermark = new watermark();
