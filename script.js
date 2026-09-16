// M Taquito — comportamiento compartido del sitio

document.addEventListener("DOMContentLoaded", function () {
  // Menú móvil
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Resaltar el enlace de la página activa
  var currentPage = document.body.getAttribute("data-page");
  if (currentPage) {
    document.querySelectorAll(".nav-links a").forEach(function (link) {
      if (link.getAttribute("data-page") === currentPage) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });
  }

  // Formulario de reservas: demo sin backend real
  var form = document.getElementById("reserva-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var confirm = document.getElementById("reserva-confirm");
      var nombre = document.getElementById("nombre").value.trim() || "amig@";
      if (confirm) {
        confirm.textContent =
          "¡Gracias, " + nombre + "! Tu solicitud de reserva fue registrada. " +
          "Te confirmaremos por teléfono o correo en las próximas horas.";
        confirm.classList.add("is-visible");
        confirm.setAttribute("tabindex", "-1");
        confirm.focus();
      }
      form.reset();
    });
  }
});
