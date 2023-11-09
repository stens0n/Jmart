const gallery = document.querySelector('.gallery');
const galleryImages = gallery.querySelectorAll('.gallery-image');
const largerView = document.querySelector('#larger-view');
const largerImageView = document.querySelector('#zoomed-image'); // Change the ID to match the HTML
const scrollPrev = document.getElementById('scrollPrev');
const scrollNext = document.getElementById('scrollNext');

scrollPrev.addEventListener('click', () => {
  const currentScrollLeft = gallery.scrollLeft;
  const itemWidth = gallery.querySelector('img').offsetWidth; // Adjust this according to your image size
  gallery.scrollLeft = currentScrollLeft - itemWidth + 1; // Add 1 for smooth scrolling
});

scrollNext.addEventListener('click', () => {
  const currentScrollLeft = gallery.scrollLeft;
  const itemWidth = gallery.querySelector('img').offsetWidth; // Adjust this according to your image size
  gallery.scrollLeft = currentScrollLeft + itemWidth - 1; // Add 1 for smooth scrolling
});

// Global index for the current image
let currentIndex = 0;

// Function to open the larger view with the clicked image
function openModal(imageSrc) {
  largerImageView.src = imageSrc;
  currentIndex = Array.from(galleryImages).findIndex((img) => img.src === imageSrc);
  largerView.classList.remove('hidden');
}

// Function to close the larger view
function closeLargerView() {
  largerView.classList.add('hidden');
}

// Function to move to the previous image in the larger view
function prevImageLargerView() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  largerImageView.src = galleryImages[currentIndex].src;
}

// Function to move to the next image in the larger view
function nextImageLargerView() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  largerImageView.src = galleryImages[currentIndex].src;
}

// Add event listeners for navigation in the larger view
document.getElementById('prev').addEventListener('click', prevImageLargerView);
document.getElementById('next').addEventListener('click', nextImageLargerView);

// Iterate through gallery images and attach click event listeners
galleryImages.forEach((image) => {
  image.addEventListener('click', () => {
    openModal(image.src);
  });
});

// Add event listeners for closing the larger view
largerView.addEventListener('click', closeLargerView);
largerImageView.addEventListener('click', (event) => {
  // Prevent the click event from closing the larger view
  event.stopPropagation();
});