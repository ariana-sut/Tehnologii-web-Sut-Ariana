const images = ["../MEDIA/universitate.jpg", "../MEDIA/ubb.jpg"];
const mainImage = document.getElementById("carousel-image");
if (!mainImage)
    throw new Error("Elementul nu a fost găsit!");
let currentIndex = 0;
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    mainImage.src = images[currentIndex];
}
setInterval(showNextImage, 3000);
export {};
