const slidesWrapper = document.querySelector('.slideshow__slides');
const slides = document.querySelectorAll('.slideshow__slide'); // array
const buttons = document.querySelectorAll('.slideshow__control');
let activeIndex = 0;
let intervalId;

init();

function toggleSlideByActiveIndex() {
  slides[activeIndex].classList.add('slideshow__slide_active');
}

function decreaseIndex() {
  if (activeIndex - 1 < 0) {
    activeIndex = slides.length - 1;
  } else {
    activeIndex -= 1;
  }
}

function increaseIndex() {
  if (activeIndex + 1 >= slides.length) {
    activeIndex = 0;
  } else {
    activeIndex += 1;
  }
}

function nextSlide() {
  stopAutoSwitch();
  toggleOffPrevios();
  increaseIndex();
  toggleSlideByActiveIndex();
  startAutoSwitch();
}

function prevSlide() {
  stopAutoSwitch();
  toggleOffPrevios();
  decreaseIndex();
  toggleSlideByActiveIndex();
  startAutoSwitch();
}

function toggleOffPrevios() {
  slides[activeIndex].classList.remove('slideshow__slide_active');
}

function init() {
  toggleSlideByActiveIndex();
  startAutoSwitch();
}

function startAutoSwitch() {
  clearInterval(intervalId);
  intervalId = setInterval(nextSlide, 2000);
}

function stopAutoSwitch() {
  clearInterval(intervalId);
}

buttons[0].onclick = prevSlide;
buttons[1].onclick = nextSlide;
slidesWrapper.onmouseenter = stopAutoSwitch;
slidesWrapper.onmouseleave = startAutoSwitch;
