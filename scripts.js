   // Ocultar el spinner cuando la página esté completamente cargada
    window.addEventListener('load', function () {
      var spinnerOverlay = document.getElementById('spinnerOverlay');
      spinnerOverlay.style.display = 'none';
    });


const images = document.querySelectorAll('.image img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `<span class="close-button">&times;</span>
                       <img src="${image.src}" alt="${image.alt}">`;
    document.body.appendChild(modal);

    const closeButton = modal.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
      document.body.removeChild(modal);
    });
  });
});


// ESTO ES PARA QUE NO PUEDAN USAR EL BOTON DERECHO
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});
