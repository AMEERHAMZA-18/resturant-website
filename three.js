const slider = document.getElementById("slider");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e)=>{
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", ()=> isDown = false);
slider.addEventListener("mouseup", ()=> isDown = false);

slider.addEventListener("mousemove", (e)=>{
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.5;
  slider.scrollLeft = scrollLeft - walk;
});

/* Mobile swipe */
slider.addEventListener("touchstart",(e)=>{
  startX = e.touches[0].pageX;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("touchmove",(e)=>{
  const x = e.touches[0].pageX;
  slider.scrollLeft = scrollLeft - (x - startX);
});