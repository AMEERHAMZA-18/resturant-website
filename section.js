let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dots span");
let index = 0;

function showSlide(i){
  slides.forEach(s => s.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));

  slides[i].classList.add("active");
  dots[i].classList.add("active");
  index = i;
}

function goSlide(i){
  showSlide(i);
}

document.querySelector(".next").onclick = () =>{
  index = (index + 1) % slides.length;
  showSlide(index);
};

document.querySelector(".prev").onclick = () =>{
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
};

setInterval(()=>{
  index = (index + 1) % slides.length;
  showSlide(index);
},4000);

showSlide(0);