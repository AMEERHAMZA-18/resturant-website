document.querySelectorAll(".read-more-btn").forEach(btn => {
  btn.addEventListener("click", function(){
    const moreText = this.previousElementSibling;
    
    if(moreText.style.display === "block"){
      moreText.style.display = "none";
      this.innerText = "Read More";
    } else {
      moreText.style.display = "block";
      this.innerText = "Show Less";
    }
  });
});
