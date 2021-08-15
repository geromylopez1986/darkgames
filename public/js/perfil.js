$(document).ready(function () {
  /* VAROABLES Y QUERY */
  const hideMenu = document.getElementById("hide-navbar");
  const showMenu = document.getElementById("show-navbar");
  const listUser = document.getElementById("list-user");
  const gamesInfo = document.getElementById("games-information");
  const perfil = document.getElementById("perfil-li");

  const inputfile = document.querySelector("#inputfile");

  /* MENU COMPACTO SECTION */
  const menuCompact = document.querySelectorAll(".compact-nav ul li");

  menuCompact.forEach((mc) => {
    mc.addEventListener("click", (event) => {
      if (mc.id == "games__icons__compact") {
        $(".game-info-section").show(400);
        $(".perfil-user").hide(400);
        $(".usuarios-cpanel").hide(400);
      } else {
        mc.classList.remove("icon-activo");
      }
      if (mc.id == "add__games__new") {
        mc.classList.add("icon-activo");
      } else {
        mc.classList.remove("icon-activo");
      }
      if (mc.id == "person_perfil") {
        $(".usuarios-cpanel").show(400);
        $(".perfil-user").hide(400);
        $(".game-info-section").hide(400);
      } else {
        mc.classList.remove("icon-activo");
      }
      if (mc.id == "account_user") {
        $(".perfil-user").show(400);
        $(".usuarios-cpanel").hide(400);
        $(".game-info-section").hide(400);
      } else {
        mc.classList.remove("icon-activo");
      }
    });
  });

  inputfile.addEventListener("change", function () {
    const nameFile = this.value;

    $("#shownamefile").attr("value", nameFile);
  });

  $(".desply-menu").hide();
  $(".add-game").hide();
  $(".user-game").hide();
  $(".cpanel-game").hide();
  $(".game-info-section").hide();

  $(".menu-compact").hide();

  $("section.usuarios-cpanel").hide();

  /* SECTION DE FUNCTION */

  hideMenu.addEventListener("click", () => {
    $(".menu-header").toggle(400);
    $(".user-menu").toggle(400);
    $(".cerrar-sesion").toggle(400);
    $(".menu-left").css({
      width: "50px",
      background: "#000000",
    });
    $(".menu-compact").fadeIn(600);
  });
  showMenu.addEventListener("click", () => {
    $(".menu-header").toggle(200);
    $(".user-menu").toggle(200);
    $(".cerrar-sesion").toggle(200);
    $(".menu-left").css({
      width: "300px",
      background: "transparent",
    });
    $(".menu-compact").fadeOut(600);
  });

  $("#desploy-menu").click(() => {
    $(".desply-menu").toggle(200);
  });
  $("#game-submenu").click(() => {
    $(".add-game").toggle(200);
  });
  $("#user-submenu").click(() => {
    $(".user-game").toggle(200);
  });
  $("#cpanel-submenu").click(() => {
    $(".cpanel-game").toggle(200);
  });

  /* LISTA DE USUARIO */
  listUser.addEventListener("click", () => {
    $(".usuarios-cpanel").show(400);
    $(".perfil-user").hide(400);
    $(".game-info-section").hide(400);
  });
  /* ACCOUNT USER */
  perfil.addEventListener("click", () => {
    $(".perfil-user").show(400);
    $(".usuarios-cpanel").hide(400);
    $(".game-info-section").hide(400);
  });
  /* GAMES INFORMATION */
  gamesInfo.addEventListener("click", () => {
    $(".game-info-section").show(400);
    $(".perfil-user").hide(400);
    $(".usuarios-cpanel").hide(400);
  });
});
