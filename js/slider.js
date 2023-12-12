const slider = document.querySelector(".slider-contenedor");
const sliderIndividual = document.querySelectorAll(".contenido-slider");
let sliderContador = 0;
const width = sliderIndividual[0].clientWidth;
const intervalo = 10000; // 7 segundos (en milisegundos)

function cambiarDiapositiva() {
    sliderIndividual[sliderContador].style.transition = "opacity .8s"; // Agregar transición de opacidad
    sliderIndividual[sliderContador].style.opacity = 0; // Desvanecer la diapositiva actual

    setTimeout(function() {
        sliderContador = (sliderContador + 1) % sliderIndividual.length; // Cambiar al siguiente índice
        slider.style.transform = "translateX(-" + width * sliderContador + "px)"; // Cambiar de diapositiva
        sliderIndividual[sliderContador].style.transition = "opacity .8s"; // Agregar transición de opacidad
        sliderIndividual[sliderContador].style.opacity = 1; // Aparece la nueva diapositiva

        setTimeout(cambiarDiapositiva, intervalo - 800); // Ajustar el tiempo de espera para el desvanecimiento y la transición
    }, 800); // Ajustar el tiempo de espera para el desvanecimiento
}

cambiarDiapositiva(); // Iniciar el cambio de diapositivas
