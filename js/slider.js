const slideCurrent = document.querySelector(".slider-img");
const slideNext = document.querySelector(".next");
const slidePrev = document.querySelector(".previous");
let currentImageIndex = 0;

const previewImages = document.querySelectorAll

let brushes = [
    "images/BlackBrush.png",
    "images/BurntOrangeBrush.png",
    "images/greenbrush.png",
  ];

function setActiveSlide(index) {
  slideCurrent.src = brushes[index];
}

setActiveSlide(currentImageIndex);

function next() {
    if (currentImageIndex >= brushes.length - 1) {
      currentImageIndex = 0;
    } else {
      currentImageIndex++;
    }
    setActiveSlide(currentImageIndex);
  }
  function prev() {
    if (currentImageIndex == 0) {
      currentImageIndex = brushes.length - 1;
    } else {
      currentImageIndex--;
    }
    setActiveSlide(currentImageIndex);
  }

  slideNext.addEventListener("click", function () {
    next();
  });
  
  slidePrev.addEventListener("click", function () {
    prev();
  });