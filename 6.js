const track = document.querySelector(".slide-track");
const cards = document.querySelectorAll(".cardh");
const dotsContainer = document.querySelector(".dots");

let index = 0;
const total = cards.length;

// create dots
for(let i=0;i<total;i++){
  const dot=document.createElement("span");
  if(i===0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
}

const dots=document.querySelectorAll(".dots span");

function updateSlider(){
  track.style.transform=`translateX(-${index*350}px)`;

  cards.forEach(c=>c.classList.remove("active"));
  dots.forEach(d=>d.classList.remove("active"));

  cards[index].classList.add("active");
  dots[index].classList.add("active");
}

function autoSlide(){
  index++;
  if(index>=total) index=0;
  updateSlider();
}

setInterval(autoSlide,3000);
updateSlider();