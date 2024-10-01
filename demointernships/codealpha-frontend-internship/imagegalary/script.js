const gallery = document.querySelector('.gallery');
const imageContainers = document.querySelectorAll('.image-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentImageIndex = 0;

// Add event listeners to image containers
imageContainers.forEach((imageContainer, index) => {
    imageContainer.addEventListener('click', () => {
        currentImageIndex = index;
        updateGallery();
    });
});

// Add event listeners to navigation buttons
prevBtn.addEventListener('click', () => {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = imageContainers.length - 1;
    }
    updateGallery();
});

nextBtn.addEventListener('click', () => {
    currentImageIndex++;
    if (currentImageIndex >= imageContainers.length) {
        currentImageIndex = 0;
    }
    updateGallery();
});

// Update gallery function
function updateGallery() {
    imageContainers.forEach((imageContainer, index) => {
        if (index === currentImageIndex) {
            imageContainer.querySelector('img').classList.add('active');
        } else {
            imageContainer.querySelector('img').classList.remove('active');
        }
    });
}

// Initialize gallery
updateGallery();