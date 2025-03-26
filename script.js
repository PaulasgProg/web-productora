function mostrarSeccion(id) {
    const menu = document.getElementById("menu");
    const content = document.getElementById("content");

    // Mover el menú a la izquierda
    menu.classList.add("move-left");
    menu.style.position="fixed"

    // Mostrar el contenido
    content.classList.add("show");

    // Ocultar todas las secciones
    document.querySelectorAll(".seccion").forEach(seccion => {
        seccion.classList.remove("visible");
    });
    if (window.innerWidth <= 768) {
        menu.style.display="none"
        menu.style.width="100%"
        menu.style.transform="translateX(-100%)"
        menu.classList.remove("show")
    }else{
        menu.style.display="block"
        menu.style.width="auto"
        menu.style.transform="translateX(0)"
        menu.classList.add("show")
    }
    

    // Mostrar la sección seleccionada
    document.getElementById(id).classList.add("visible");
}

// Función para resetear el menú al hacer clic en el logo
document.getElementById("logo").addEventListener("click", function() {
    const menu = document.getElementById("menu");
    const content = document.getElementById("content");

    menu.style.position="block"
    if (window.innerWidth <= 768) {
        menu.style.width="100%"
        /*menu.style.transform="translateX(0)"*/
    }else{
        // Regresar el menú al centro
        menu.style.transform="translateX(-50%)"
        menu.style.width="auto"
        menu.classList.remove("move-left");

    }

    // Ocultar el contenido
    content.classList.remove("show");


    // Ocultar todas las secciones
    document.querySelectorAll(".seccion").forEach(seccion => {
        seccion.classList.remove("visible");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    // Asegurar que el menú comience oculto en pantallas pequeñas
    if (window.innerWidth <= 768) {
       // menu.classList.remove("show");
    }

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("show");
        menu.style.display="block"
        menu.style.width="100%"
        menu.style.transform="translateX(0)"
        menu.classList.add("show")
        
    });
});
