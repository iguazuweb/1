   // Ocultar el spinner cuando la página esté completamente cargada
    window.addEventListener('load', function () {
      var spinnerOverlay = document.getElementById('spinnerOverlay');
      spinnerOverlay.style.display = 'none';
    });

/* ACA VA EL QUE FUNCIONA OK OK */
   /* const images = document.querySelectorAll('.image img');

    images.forEach((image) => {
      image.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `<span class="close-button" onclick="closeModal()">&times;</span>
                           <img src="${image.src}" alt="${image.alt}" onclick="closeModal()">`;
        document.body.appendChild(modal);
      });
    });
    
    function closeModal() {
      const modal = document.querySelector('.modal');
      if (modal) {
        document.body.removeChild(modal);
      }
    }
    
    // Close the modal when clicking anywhere on the screen
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        closeModal();
      }
    }); */

/* HASTA ACA EL QUE ANDA OKOK  */ 




/* ACA VA LA NUEVA PRUEBA CON TECLADO */

const images = document.querySelectorAll('.image img');
let currentImageIndex = 0;
let modal = null;

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentImageIndex = index;
    openModal(image.src, image.alt);
  });
});

function openModal(src, alt) {
  // Cerrar la imagen anterior si existe
  closeModal();

  modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <span class="close-button" onclick="closeModal()">&times;</span>
    <img src="${src}" alt="${alt}">
    <div class="nav-buttons">
      <button onclick="prevImage()">&#8249;</button>
      <button onclick="nextImage()">&#8250;</button>
    </div>
  `;
  document.body.appendChild(modal);

  document.addEventListener('keydown', handleKeyPress);
}

function closeModal() {
  if (modal) {
    document.body.removeChild(modal);
    document.removeEventListener('keydown', handleKeyPress);
    modal = null;
  }
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  const prevImage = images[currentImageIndex];
  openModal(prevImage.src, prevImage.alt);
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  const nextImage = images[currentImageIndex];
  openModal(nextImage.src, nextImage.alt);
}

function handleKeyPress(event) {
  if (event.key === 'ArrowLeft') {
    prevImage();
  } else if (event.key === 'ArrowRight') {
    nextImage();
  } else if (event.key === 'Escape') {
    closeModal();
  }
}



// fin de la nueva prueba //



// ESTO ES PARA QUE NO PUEDAN USAR EL BOTON DERECHO
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});
