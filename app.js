document.addEventListener("DOMContentLoaded", function () {

    const pantalla = document.getElementById("pantalla-bienvenida");
    const musica = document.getElementById("musica");
    const vistas = document.querySelectorAll(".vista");
    const botones = document.querySelectorAll("[data-vista]");

    // ==============================
    // PANTALLA DE BIENVENIDA
    // ==============================

    if (pantalla) {

        pantalla.addEventListener("click", function () {

            // Ocultar la pantalla inicial
            pantalla.classList.add("ocultar");

            // Iniciar la música
            if (musica) {

                musica.volume = 0.35;

                musica.play().catch(function (error) {
                    console.log("No se pudo iniciar la música:", error);
                });

            }

        });

    }


    // ==============================
    // CAMBIO ENTRE PESTAÑAS
    // ==============================

    function mostrarVista(id) {

        vistas.forEach(function (vista) {

            if (vista.id === id) {
                vista.classList.add("activa");
            } else {
                vista.classList.remove("activa");
            }

        });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    // ==============================
    // BOTONES DEL ÁRBOL Y VOLVER
    // ==============================

    botones.forEach(function (boton) {

        boton.addEventListener("click", function () {

            const destino = boton.getAttribute("data-vista");

            mostrarVista(destino);

        });

    });

});