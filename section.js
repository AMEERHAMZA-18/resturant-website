let slides = document.querySelectorAll(".slide");
let lines = document.querySelectorAll(".lines span");
let index = 0;

function showSlide(){
  slides.forEach(s => s.classList.remove("active"));
  lines.forEach(l => l.classList.remove("active"));

  slides[index].classList.add("active");
  lines[index].classList.add("active");

  index = (index + 1) % slides.length;
}

setInterval(showSlide, 4000);
showSlide();