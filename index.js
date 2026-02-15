
function showPage(page){
  document.querySelectorAll("section").forEach(sec => sec.style.display="none");
  document.getElementById(page).style.display="block";
}
showPage('home', 'hero');


