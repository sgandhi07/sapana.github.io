
document.getElementById("design").addEventListener("click", design);
function design() {
  document.getElementById("containerOneImg").style.display = "block";
  document.getElementById("containerOneImg").src = "img/CAD.png";
  document.getElementById("figcaption1").innerHTML = "Above: Extract architectural details (benches) from CAD file using ArcMap."; 
  document.getElementById("containerTwoImg").style.display = "block";
  document.getElementById("containerTwoImg").src = "img/design1.png";
  document.getElementById("figcaption2").innerHTML = "Above: Design basemap using open data in QGIS"; 
  document.getElementById("containerThreeImg").style.display = "block";
  document.getElementById("containerThreeImg").src = "img/design2.png";
  document.getElementById("figcaption3").innerHTML = "Above: Start to integrate the arhcitectural details with basemap in QGIS"; 
}

document.getElementById("facilities").addEventListener("click", facilities);
function facilities() {
  document.getElementById("containerOneImg").style.display = "block";
  document.getElementById("containerOneImg").src = "img/facilities1.png";
  document.getElementById("figcaption1").innerHTML = "Above: Basemap delineating operating zones for maitenance technicians."; 
  document.getElementById("containerTwoImg").style.display = "block";
  document.getElementById("containerTwoImg").src = "img/facilities2.png";
  document.getElementById("figcaption2").innerHTML = "Above: Using work order data entered by maintenance techs, map where unplanned labor hours are spent. <br> We used this map to extropolate which assets required the most attention, and perhaps reassessment of our maintenance strategy."; 
  document.getElementById("containerThreeImg").style.display = "none";
  document.getElementById("containerThreeImg").src = "img/facilities3.png";
  document.getElementById("figcaption3").innerHTML = " "; 
}