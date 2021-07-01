
document.getElementById("design").addEventListener("click", design);
function design() {
    document.getElementById("HLintro").style.display = "none";
  document.getElementById("containerOneImg").style.display = "block";
  document.getElementById("containerOneImg").src = "img/CAD.png";
  document.getElementById("figcaption1").innerHTML = "Above: Extract architectural details (benches) from CAD file using ArcMap."; 
  document.getElementById("containerTwoImg").style.display = "block";
  document.getElementById("containerTwoImg").src = "img/design1.png";
  document.getElementById("figcaption2").innerHTML = "Above: Design basemap using open data in QGIS"; 
  document.getElementById("containerThreeImg").style.display = "block";
  document.getElementById("containerThreeImg").src = "img/design2.png";
  document.getElementById("figcaption3").innerHTML = "Above: Start to integrate the arhcitectural details with basemap in QGIS"; 
  document.getElementById("containerFourImg").style.display = "none";
  document.getElementById("figcaption4").innerHTML = ""; 
}

document.getElementById("facilities").addEventListener("click", facilities);
function facilities() {
        document.getElementById("HLintro").style.display = "none";
  document.getElementById("containerOneImg").style.display = "block";
  document.getElementById("containerOneImg").src = "img/facilities1.png";
  document.getElementById("figcaption1").innerHTML = "Above: Basemap delineating operating zones for maitenance technicians."; 
  document.getElementById("containerTwoImg").style.display = "block";
  document.getElementById("containerTwoImg").src = "img/facilities2.png";
  document.getElementById("figcaption2").innerHTML = "Above: Using work order data entered by maintenance techs, map where unplanned labor hours are spent. <br> We used this map to extropolate which assets required the most attention, and perhaps reassessment of our maintenance strategy."; 
  document.getElementById("containerThreeImg").style.display = "none";
  document.getElementById("containerThreeImg").src = "img/facilities3.png";
  document.getElementById("figcaption3").innerHTML = " "; 
  document.getElementById("containerFourImg").style.display = "none";
  document.getElementById("figcaption4").innerHTML = ""; 
}

document.getElementById("horticulture").addEventListener("click", horticulture);
function horticulture() {
        document.getElementById("HLintro").style.display = "none";
  document.getElementById("containerOneImg").style.display = "block";
  document.getElementById("containerOneImg").src = "img/hort1.png";
  document.getElementById("figcaption1").innerHTML = "Above: Basemap delineating horticultural zones for gardeners."; 
  document.getElementById("containerTwoImg").style.display = "block";
  document.getElementById("containerTwoImg").src = "img/hort2.png";
  document.getElementById("figcaption2").innerHTML = "Above: Zooming in, this map highlights the plant beds that make up each horticultural zone. Contact me for PDF of all zones."; 
  document.getElementById("containerThreeImg").style.display = "block";
  document.getElementById("containerThreeImg").src = "img/hort3.png";
  document.getElementById("figcaption3").innerHTML = "Above: A snapshot of the most prevalent species on the High Line. The clustering of certain species hints towards the zones' ecosystem."; 
  document.getElementById("containerFourImg").style.display = "block";
  document.getElementById("containerFourImg").src = "img/hort4.png";
  document.getElementById("figcaption4").innerHTML = "Above: One way to ascertain shade, light, potential wind conditions, and microclimates on the Park."; 
}

document.getElementById("other").addEventListener("click", other);
function other() {
        document.getElementById("HLintro").style.display = "none";
  document.getElementById("containerOneImg").style.display = "block";
  document.getElementById("containerOneImg").src = "img/other4.png";
  document.getElementById("figcaption1").innerHTML = ""; 
  document.getElementById("containerTwoImg").style.display = "block";
  document.getElementById("containerTwoImg").src = "img/other2.png";
  document.getElementById("figcaption2").innerHTML = ""; 
  document.getElementById("containerThreeImg").style.display = "block";
  document.getElementById("containerThreeImg").src = "img/other3.png";
  document.getElementById("figcaption3").innerHTML = ""; 
  document.getElementById("containerFourImg").style.display = "block";
  document.getElementById("containerFourImg").src = "img/other1.png";
  document.getElementById("figcaption4").innerHTML = ""; 
}