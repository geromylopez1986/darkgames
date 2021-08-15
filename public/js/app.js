const bodyTag = document.querySelector("body");
const MenuH = document.getElementById("menuH");
const logo = document.querySelector(".navbar img");
const viewPicMiniaturas = document.querySelectorAll(
  ".navegador-preview ul li a"
);
const viewPicMaxResolution = document.querySelectorAll(".box-previewModal img");
const cerrarModal = document.getElementById("cerrar");
const navOpciones = document.querySelectorAll(".menu-game-info ul li");

const menuEvents = document.querySelectorAll(".container nav.navbar a");

$("#genero #submenu-genero").hide();
$("#requisitos #submenu-requisitos").hide();
$("#version #submenu-version").hide();
$("#lanzamiento #submenu-lanzamiento").hide();

if (innerWidth >= 470) {
  menuEvents.forEach((s) => {
    s.addEventListener("mouseover", () => {
      if (s.id === "genero") {
        $("#genero #submenu-genero").fadeIn(200);
      } else if (s.id === "requisitos") {
        $("#requisitos #submenu-requisitos").fadeIn(200);
      } else if (s.id === "version") {
        $("#version #submenu-version").fadeIn(200);
      } else if (s.id === "lanzamiento") {
        $("#lanzamiento #submenu-lanzamiento").fadeIn(200);
      }
    });
    s.addEventListener("mouseleave", () => {
      if (s.id === "genero") {
        $("#genero #submenu-genero").fadeOut(200);
      } else if (s.id === "requisitos") {
        $("#requisitos #submenu-requisitos").fadeOut(200);
      } else if (s.id === "version") {
        $("#version #submenu-version").fadeOut(200);
      } else if (s.id === "lanzamiento") {
        $("#lanzamiento #submenu-lanzamiento").fadeOut(200);
      }
    });
  });
}

/* $(".submenu-g").hide(); */
if (innerWidth <= 460) {
  $("nav.navbar a").hide();

  menuEvents.forEach((z) => {
    z.addEventListener("click", () => {
      if (z.id === "genero") {
        $("#genero #submenu-genero").toggle(200);

        $("#requisitos #submenu-requisitos").hide();
        $("#version #submenu-version").hide();
        $("#lanzamiento #submenu-lanzamiento").hide();
      } else if (z.id === "requisitos") {
        $("#requisitos #submenu-requisitos").toggle(200);

        $("#genero #submenu-genero").hide();
        $("#version #submenu-version").hide();
        $("#lanzamiento #submenu-lanzamiento").hide();
      } else if (z.id === "version") {
        $("#version #submenu-version").toggle(200);

        $("#genero #submenu-genero").hide();
        $("#requisitos #submenu-requisitos").hide();
        $("#lanzamiento #submenu-lanzamiento").hide();
      } else if (z.id === "lanzamiento") {
        $("#lanzamiento #submenu-lanzamiento").toggle(200);

        $("#genero #submenu-genero").hide();
        $("#requisitos #submenu-requisitos").hide();
        $("#version #submenu-version").hide();
      }
    });
  });

  $(".icon-menu").click(() => {
    $("nav.navbar a").toggle(200);
  });
}

/* EVENTOS PARA MODO MOBIL */

/* DESPLEGAR MENU EN MODO MOBIL */
const arre = document.querySelectorAll(".navbar-mobil a.hover");

$(".informacion .box-informacion").show();
$(".modal .menu-modal").hide();
$(".header-menu .login-box").hide();

$(".inpbarr button .fa-user-circle").click(function () {
  $(".header-menu .login-box").toggle(500);
});

$("#login-mobil").click(function () {
  $(".header-menu .login-box").toggle(500);
});

$(".login-box .info-login a").click(() => {
  $(".header-menu .login-box").fadeOut(500);
});

let inputUserData = document.querySelector("#user");
let inputPassData = document.querySelector("#password");
const cambiarAttr = document.querySelector(".login-box form button");

inputUserData.addEventListener("keyup", (getData) => {
  const inputDatas = getData.path[0].value;

  for (let i = 0; i < inputDatas.length; i++) {
    const textElement = i + 1;

    if (textElement >= 7) {
      $(".login-box form button").css({
        background: "#5dbcd2",
        color: "#ffffff",
        cursor: "pointer",
      });
      cambiarAttr[("attributes", "disabled")] = "";
    } else if (textElement < 7) {
      $(".login-box form button").css({
        background: "#706e6e",
        color: "#000000",
        cursor: "disabled",
      });
      cambiarAttr[("attributes", "disabled")] = "disabled";
    }
  }
});

/* DATOS GAMES DESCARGAR */
navOpciones.forEach((x) => {
  x.addEventListener("click", () => {
    if (x.id == "info") {
      $(".informacion .box-informacion").fadeIn(1000);
      $(".contenido .box-contenido").fadeOut(50);
      $(".requisitos .box-requisitos").fadeOut(50);
      $(".intruciones .box-instruciones").fadeOut(50);

      navOpciones.forEach((c) => {
        if (c.id === "info") {
          c.classList.add("activo");
        } else {
          c.classList.remove("activo");
        }
      });
    } else if (x.id == "cont") {
      $(".contenido .box-contenido").fadeIn(1000);
      x.classList.add("activo");
      $(".contenido .box-contenido").animate({
        marginLeft: "-150px",
      });
      $(".informacion .box-informacion").fadeOut(50);
      x.classList.add("activo");
      $(".requisitos .box-requisitos").fadeOut(50);
      $(".intruciones .box-instruciones").fadeOut(50);

      navOpciones.forEach((c) => {
        if (c.id === "cont") {
          c.classList.add("activo");
        } else {
          c.classList.remove("activo");
        }
      });
    } else if (x.id == "requ") {
      $(".requisitos .box-requisitos").fadeIn(1000);
      x.classList.add("activo");
      $(".requisitos .box-requisitos").css("display", "flex");
      $(".informacion .box-informacion").fadeOut(50);
      $(".contenido .box-contenido").fadeOut(5);
      $(".intruciones .box-instruciones").fadeOut(50);

      navOpciones.forEach((c) => {
        if (c.id === "requ") {
          c.classList.add("activo");
        } else {
          c.classList.remove("activo");
        }
      });
    } else if (x.id == "inst") {
      $(".intruciones .box-instruciones").fadeIn(1000);
      x.classList.add("activo");
      $(".intruciones .box-instruciones").animate({
        marginLeft: "-150px",
      });
      $(".informacion .box-informacion").fadeOut(50);
      $(".requisitos .box-requisitos").fadeOut(50);
      $(".contenido .box-contenido").fadeOut(50);

      navOpciones.forEach((c) => {
        if (c.id === "inst") {
          c.classList.add("activo");
        } else {
          c.classList.remove("activo");
        }
      });
    }
  });
});

/* EVBENTOS MODAL FUNCIONES */
$("#btndownload").on("click", function () {
  $(".modal .menu-modal").fadeIn(500);
  $(".modal .menu-modal .box-opcionesTrailer").hide();
  $(".modal .menu-modal .picture-preview").hide();
  $(".modal .menu-modal .box-opcionesDescargas").fadeIn(1000);
});
$(".cerrar-mobil").on("click", () => {
  $(".menu-modal").fadeOut(500);
});

$("#cerrar").on("click", function () {
  $(".modal .menu-modal").fadeOut(500);
  $("iframe").removeAttr("src");
});

$(".fa-chevron-circle-up").fadeOut();

$(".fa-chevron-circle-down").on("click", () => {
  $(".menu-game-info ul  li").fadeIn(500);
  $(".fa-chevron-circle-up").fadeIn();
  $(".fa-chevron-circle-down").fadeOut();
});
$(".fa-chevron-circle-up").on("click", () => {
  $(".menu-game-info ul  li").fadeOut();
  $(".fa-chevron-circle-up").fadeOut();
  $(".fa-chevron-circle-down").fadeIn();
});

/* EVENTOS MODAL FUNCIONES */
$(".cerrar-mobil").on("click", () => {
  $(".menu-modal").fadeOut(500);
});

$(".fa-chevron-circle-up").fadeOut();

$(".fa-chevron-circle-down").on("click", () => {
  $(".menu-game-info ul  li").fadeIn(500);
  $(".fa-chevron-circle-up").fadeIn();
  $(".fa-chevron-circle-down").fadeOut();
});
$(".fa-chevron-circle-up").on("click", () => {
  $(".menu-game-info ul  li").fadeOut();
  $(".fa-chevron-circle-up").fadeOut();
  $(".fa-chevron-circle-down").fadeIn();
});

/* VISTA PREVIA DE EL JUEGO CON FOTOS */
viewPicMiniaturas.forEach((x) => {
  x.addEventListener("click", () => {
    if (x.id === "btn-preview1") {
      $(".modal .menu-modal").fadeIn(500);
      $(".modal .menu-modal .picture-preview").fadeIn();
      $(".modal .menu-modal .box-opcionesTrailer").hide();
      $(".modal .menu-modal .box-opcionesDescargas").hide(500);

      viewPicMaxResolution.forEach((c) => {
        if (c.id === "pre1") {
          c.classList.add("mostrar");
        } else {
          c.classList.remove("mostrar");
        }
      });
    } else if (x.id === "btn-preview2") {
      $(".modal .menu-modal").fadeIn(500);
      $(".modal .menu-modal .box-opcionesTrailer").hide();
      $(".modal .menu-modal .box-opcionesDescargas").hide(500);
      $(".modal .menu-modal .picture-preview").fadeIn();

      viewPicMaxResolution.forEach((c) => {
        if (c.id === "pre2") {
          c.classList.add("mostrar");
        } else {
          c.classList.remove("mostrar");
        }
      });
    } else if (x.id === "btn-preview3") {
      $(".modal .menu-modal").fadeIn(500);
      $(".modal .menu-modal .box-opcionesTrailer").hide();
      $(".modal .menu-modal .box-opcionesDescargas").hide(500);
      $(".modal .menu-modal .picture-preview").fadeIn();

      viewPicMaxResolution.forEach((c) => {
        if (c.id === "pre3") {
          c.classList.add("mostrar");
        } else {
          c.classList.remove("mostrar");
        }
      });
    } else if (x.id === "btn-preview4") {
      $(".modal .menu-modal").fadeIn(500);
      $(".modal .menu-modal .box-opcionesTrailer").hide();
      $(".modal .menu-modal .box-opcionesDescargas").hide(500);
      $(".modal .menu-modal .picture-preview").fadeIn();

      viewPicMaxResolution.forEach((c) => {
        if (c.id === "pre4") {
          c.classList.add("mostrar");
        } else {
          c.classList.remove("mostrar");
        }
      });
    }
  });
});

// JavaScript Document
$(document).ready(function () {
  $("#autoWidth").lightSlider({
    autoWidth: true,
    loop: true,
    auto: true,
    pauseOnHover: true,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });

  $("#autoWidth2").lightSlider({
    autoWidth: true,
    loop: true,
    auto: true,
    pauseOnHover: true,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });

  $("#autoWidth3").lightSlider({
    autoWidth: true,
    aitoPlay: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });

  let scrolled = () => {
    let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
    return Math.floor(dec * 43);
  };

  addEventListener("scroll", () => {
    MenuH.style.setProperty(
      "background",
      scrolled(3000) > 10 ? "var(--color4)" : "var(--medioRGBA)"
    );
  });
});
