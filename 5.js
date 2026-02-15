const cards = document.querySelectorAll(".area-card");
const selectedArea = document.getElementById("selectedArea");

cards.forEach(card => {
  card.addEventListener("click", () => {
    cards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    selectedArea.value = card.dataset.area;
  });
});