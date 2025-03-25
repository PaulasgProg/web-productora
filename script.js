function mostrarSeccion(id) {
    const menu = document.getElementById("menu");
    const content = document.getElementById("content");

    // Mover el menú a la izquierda
    menu.classList.add("move-left");

    // Mostrar el contenido
    content.classList.add("show");

    // Ocultar todas las secciones
    document.querySelectorAll(".seccion").forEach(seccion => {
        seccion.classList.remove("visible");
    });

    // Mostrar la sección seleccionada
    document.getElementById(id).classList.add("visible");
}

// Función para resetear el menú al hacer clic en el logo
document.getElementById("logo").addEventListener("click", function() {
    const menu = document.getElementById("menu");
    const content = document.getElementById("content");

    // Regresar el menú al centro
    menu.classList.remove("move-left");

    // Ocultar el contenido
    content.classList.remove("show");

    // Ocultar todas las secciones
    document.querySelectorAll(".seccion").forEach(seccion => {
        seccion.classList.remove("visible");
    });
});