document.body.setAttribute("class", "noscroll");

document.getElementById("overlay").style.display = "block";
document.getElementById("spinner").style.display = "block";

window.onload = function () {
  document.getElementById("spinner").style.display = "none";
  document.getElementById("overlay").style.display = "none";

  document.body.className = document.body.className.replace(/\bnoscroll\b/, "");
};
var nav = document.getElementById("nava"),
 topOfNav = nava.offsetTop;
 function fixedNav(){
  if(window.scrollY >= topOfNav){
    document.classList.add("fixed_navbar");
  }else{
    document.nav.classList.remove("fixed_navbar");
  }
 }