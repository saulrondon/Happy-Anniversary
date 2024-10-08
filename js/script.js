onload = () => {
    document.body.classList.remove("container");
  };

  // Efecto de aparición al hacer scroll
  const seccion = document.querySelectorAll('.seccion-contenido');

  window.addEventListener('scroll', checkSections);

  function checkSections() {
    
    const triggerBottom = window.innerHeight * 0.85;

    seccion.forEach(seccion => {
      
      const seccionTop = seccion.getBoundingClientRect().top;

      if (seccionTop < triggerBottom) {
        seccion.classList.add('show');
      }
    });
  }

// Scroll suave personalizado (opcional)
document.querySelector('.boton-scroll').addEventListener('click', function(event){

  event.preventDefault();

  document.querySelector('#historia').scrollIntoView({behavior: 'smooth'});

});

// Carrusel efectos fotografias
let currentIndex = 0; // Índice de la imagen activa
const items = document.querySelectorAll('.carrusel-item'); // Selecciona todas las imágenes
const totalImagenes = items.length; // Total de imágenes

function cambiarSlide(direccion) {
  
  currentIndex += direccion;

  // Resetea el índice si excede el total de imágenes
  if (currentIndex < 0) {

    currentIndex = totalImagenes - 1;

  } else if (currentIndex >= totalImagenes) {
   
    currentIndex = 0;

  }

  actualizarCarrusel();

}

function actualizarCarrusel() {

  const carruselImages = document.querySelector('.carrusel-images');

  items.forEach((item, index) => {

    item.classList.remove('active', 'blur');

    if (index === currentIndex) {

      item.classList.add('active'); //Imagen activa

    } else {

      item.classList.add('blur'); //Imagenes desenfocadas

    }

  });

  // Cambia la posicion del carrusel
  carruselImages.style.transform = `translateX(${-currentIndex * 50}%)`;
}

// Inicializamos el carrusel
actualizarCarrusel();

function mostrarMensaje(index) {

  const titulos = document.querySelectorAll('.titulo-mensaje');
  const mensaje = document.querySelectorAll('.contenido-mensaje');

  titulos.forEach((titulo, i) => {

    if (i === index) {

      titulo.classList.add('active');
      mensaje[i].classList.add('active');

    } else {
      
      titulo.classList.remove('active');
      mensaje[i].classList.remove('active');

    }

  });

}

// Mostrar el primer mensaje por defecto
document.addEventListener('DOMContentLoaded', () => {

  mostrarMensaje(0);

});