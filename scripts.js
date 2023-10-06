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


/******** GALERIA DE FOTOS MODAL -ACA VA LA NUEVA PRUEBA CON TECLADO ************/

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


// FIN DE LA GALERIA DE IMAGENES MODAL OK OK //



// ESTO ES PARA QUE NO PUEDAN USAR EL BOTON DERECHO
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});


// ESTO ES UN SCRIPT PARA QUE LOS VIDEO TENGAN UNA FOTO DE PORTADA Y AL  HACER CLICK EMPIEZA EL MISMO //


/* function playVideo(previewImage, videoUrl) {
  // Reemplaza la imagen de vista previa por el iframe del video
  const videoIframe = document.createElement("iframe");
  videoIframe.src = videoUrl;
  videoIframe.frameBorder = "0";
  videoIframe.allowFullscreen = true;

  // Inserta el iframe en lugar de la imagen
  previewImage.parentNode.replaceChild(videoIframe, previewImage);
} */


// 

// JavaScript para controlar la reproducción del video
const headerVideo = document.getElementById('headerVideo');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', function () {
  if (headerVideo.paused) {
    headerVideo.play();
    playButton.style.display = 'none'; // Ocultar el botón cuando se inicia la reproducción
  }
});

// Puedes agregar estilos CSS para el botón de reproducción si es necesario
