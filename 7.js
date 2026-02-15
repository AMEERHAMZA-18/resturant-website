document.getElementById("fbForm").addEventListener("submit",function(e){
  e.preventDefault();
  const name=document.getElementById("fbName").value.trim();
  const email=document.getElementById("fbEmail").value.trim();
  const msg=document.getElementById("fbMsg").value.trim();

  if(name && email.includes("@") && msg){
    document.querySelector(".fb-success").style.display="block";
    this.reset();
  }
});