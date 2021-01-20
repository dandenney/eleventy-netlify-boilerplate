gsap.registerPlugin(ScrollTrigger);

// update map based on step
// if (map.isStyleLoaded()) {
//   if (response.index == 0) {
//     document.querySelector("#map").style.opacity = 1;
//     map.setPaintProperty("step02", "circle-radius", 0);
//   }

//   if (response.index == 1) {
//     map.setPaintProperty("step02", "circle-radius", 12);
//     map.setPaintProperty("step03", "circle-radius", 0);
//     map.flyTo({
//       center: [-123.365572, 48.422385],
//       zoom: 14,
//     });
//   }

//   if (response.index == 2) {
//     map.setPaintProperty("step02", "circle-radius", 6);
//     map.setPaintProperty("step03", "circle-radius", 12);
//     map.setPaintProperty("step04", "circle-radius", 0);
//   }

//   if (response.index == 3) {
//     map.setPaintProperty("step03", "circle-radius", 6);
//     map.setPaintProperty("step04", "circle-radius", 12);
//     map.setPaintProperty("step05", "circle-radius", 0);
//   }

//   if (response.index == 4) {
//     map.setPaintProperty("step04", "circle-radius", 6);
//     map.setPaintProperty("step05", "circle-radius", 12);
//     map.flyTo({
//       center: [-123.4672774, 48.4460957],
//       zoom: 11,
//     });
//   }
// }

function init() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZGFuZGVubmV5IiwiYSI6Indwc05iZW8ifQ.X8KMtaHslofn7K0TY8A8Ug";

  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/light-v10",
    center: [-123.365572, 48.422385],
    zoom: 12,
  });

  map.scrollZoom.disable();

  map.on("load", function() {
    map.addSource("step02", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [-123.365572, 48.422385],
            },
            properties: {
              title: "7-Eleven",
            },
          },
        ],
      },
    });

    map.addLayer({
      id: "step02",
      type: "circle",
      source: "step02",
      paint: {
        "circle-radius": 0,
        "circle-color": "#b51f24",
        "circle-stroke-color": "white",
        "circle-stroke-width": 2,
      },
    });

    map.addSource("step03", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [-123.368735, 48.421758],
            },
            properties: {
              title: "Emma is seen on CCTV footage at a 7-Eleven",
            },
          },
        ],
      },
    });

    map.addLayer({
      id: "step03",
      type: "circle",
      source: "step03",
      paint: {
        "circle-radius": 0,
        "circle-color": "#b51f24",
        "circle-stroke-color": "white",
        "circle-stroke-width": 2,
      },
    });

    map.addSource("step04", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [-123.362837, 48.421721],
            },
            properties: {
              title: "Shelley Fillipoff arrives in Victoria",
            },
          },
        ],
      },
    });

    map.addLayer({
      id: "step04",
      type: "circle",
      source: "step04",
      paint: {
        "circle-radius": 0,
        "circle-color": "#b51f24",
        "circle-stroke-color": "white",
        "circle-stroke-width": 2,
      },
    });

    map.addSource("step05", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [-123.4672774, 48.4460957],
            },
            properties: {
              title: "Emma's prepaid credit card is used",
            },
          },
        ],
      },
    });

    map.addLayer({
      id: "step05",
      type: "circle",
      source: "step05",
      paint: {
        "circle-radius": 0,
        "circle-color": "#b51f24",
        "circle-stroke-color": "white",
        "circle-stroke-width": 2,
      },
    });
  });

  let select = (e) => document.querySelector(e);
  let selectAll = (e) => document.querySelectorAll(e);

  ScrollTrigger.create({
    end: "bottom center",
    pin: "#map",
    trigger: "#mapContainer",
  });

  ScrollTrigger.create({
    onEnter: () => map02(),
    start: "top center",
    trigger: select("[data-step='02']"),
  });

  ScrollTrigger.create({
    onEnter: () => map03(),
    start: "top center",
    trigger: select("[data-step='03']"),
  });

  ScrollTrigger.create({
    onEnter: () => map04(),
    start: "top center",
    trigger: select("[data-step='04']"),
  });

  ScrollTrigger.create({
    onEnter: () => map05(),
    start: "top center",
    trigger: select("[data-step='05']"),
  });

  function map01() {
    map.setPaintProperty("step02", "circle-radius", 0);
  }

  function map02() {
    map.setPaintProperty("step02", "circle-radius", 12);
    map.setPaintProperty("step03", "circle-radius", 0);
    map.flyTo({
      center: [-123.365572, 48.422385],
      zoom: 14,
    });
  }

  function map03() {
    map.setPaintProperty("step02", "circle-radius", 6);
    map.setPaintProperty("step03", "circle-radius", 12);
    map.setPaintProperty("step04", "circle-radius", 0);
  }

  function map04() {
    map.setPaintProperty("step03", "circle-radius", 6);
    map.setPaintProperty("step04", "circle-radius", 12);
    map.setPaintProperty("step05", "circle-radius", 0);
  }

  function map05() {
    map.setPaintProperty("step04", "circle-radius", 6);
    map.setPaintProperty("step05", "circle-radius", 12);
    map.flyTo({
      center: [-123.4672774, 48.4460957],
      zoom: 11,
    });
  }
}

window.addEventListener("load", init());
