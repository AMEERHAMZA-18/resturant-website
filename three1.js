const exploreBtn = document.getElementById("exploreBtn");
const slider = document.getElementById("slider");

exploreBtn.addEventListener("click", () => {
  slider.scrollBy({
    left: 300,   // kitna move karna hai
    behavior: "smooth"
  });
});