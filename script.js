let current = 0;
const slides = document.querySelectorAll('.carousel img');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 4000);
