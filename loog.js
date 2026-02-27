const aboutSection = document.querySelector(".about-light");

window.addEventListener("scroll", () => {
  const top = aboutSection.getBoundingClientRect().top;
  if(top < window.innerHeight - 100){
    aboutSection.style.opacity = "1";
    aboutSection.style.transform = "translateY(0)";
  }
});

aboutSection.style.opacity = "0";
aboutSection.style.transform = "translateY(60px)";
aboutSection.style.transition = "all 0.8s ease";