document.addEventListener("DOMContentLoaded", function () {
    // Obtén el botón y el drawer por sus IDs
    const btnBancaEnLinea = document.getElementById("btnBancaEnLinea");
    const drawerNavigation = document.getElementById("drawer-navigation");

    // Agrega un evento click al botón
    btnBancaEnLinea.addEventListener("click", function () {
      // Muestra u oculta el drawer cambiando la clase CSS
      drawerNavigation.classList.toggle("-translate-x-full");
    });
  });