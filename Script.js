document.addEventListener("DOMContentLoaded", function () {

    const botones = document.querySelectorAll(".boton");

    botones.forEach(boton => {
        boton.addEventListener("click", function (e) {
            e.preventDefault();

            // Efecto visual al hacer click
            boton.style.transform = "scale(0.95)";

            setTimeout(() => {
                boton.style.transform = "scale(1)";
            }, 150);

            // Aquí después vamos a poner tus links reales
            console.log("Botón presionado:", boton.textContent);
        });
    });

});