
document.getElementById("design").addEventListener("click", design);
function design() {
  document.getElementById("containerOneImg").style.display = "block";
  document.getElementById("containerOneImg").src = "img/CAD.png";
  document.getElementById("figcaption1").innerHTML = "Above: extracting architectural details (benches) from CAD file using ArcMap."; 
    document.getElementById("containerOneImg").onclick = function() {
         document.getElementById("containerOneImg").src = "img/CAD.png", 
         "_blank";
          modal.style.display = "block";
          modalImg.src = this.src;
  }
}