// Скрипты для картинок!

// SCRATCH

let currentIndex = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  
  currentIndex += direction;
  
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// YOUTUBE

let currentIndex2 = 0;

function changeSlide2(direction) {
  const slides = document.querySelectorAll('.slide_2');
  const totalSlides = slides.length;
  
  currentIndex2 += direction;
  
  if (currentIndex2 < 0) {
    currentIndex2 = totalSlides - 1;
  } else if (currentIndex2 >= totalSlides) {
    currentIndex2 = 0;
  }
  
  const slider = document.querySelector('.slider_2');
  slider.style.transform = `translateX(-${currentIndex2 * 100}%)`;
}