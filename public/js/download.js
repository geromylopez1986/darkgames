const btnDownload = document.getElementById("btnDownload");
const btnTrailer = document.getElementById("btnTrialer");
const cerrarModal = document.getElementById("cerrar");
const navOpciones = document.querySelectorAll(".menu-game-info ul li");
const videoSRC = document.querySelector(".trailler-box iframe");
const trailer = videoSRC.getAttribute("src");
$(".informacion .box-informacion").show();
$(".modal .menu-modal").hide();
$(".modal .menu-modal .box-opcionesDescargas").hide();
$(".modal .menu-modal .box-opcionesTrailer").hide();

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
btnDownload.addEventListener("click", () => {
  $(".modal .menu-modal").fadeIn(500);
  $(".modal .menu-modal .box-opcionesTrailer").hide();
  $(".modal .menu-modal .box-opcionesDescargas").fadeIn(1000);
});
btnTrailer.addEventListener("click", () => {
  $(".modal .menu-modal").fadeIn(500);
  $("iframe").attr("src", trailer);
  $(".modal .menu-modal .box-opcionesDescargas").hide();
  $(".modal .menu-modal .box-opcionesTrailer").fadeIn(1000);
});
cerrarModal.addEventListener("click", function () {
  $(".modal .menu-modal").fadeOut(500);
  $("iframe").removeAttr("src");
});
