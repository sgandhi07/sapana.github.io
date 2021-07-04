
document.getElementById("design").addEventListener("click", design);
function design() {
    document.getElementById("HLintro").style.display = "none";
  document.getElementById("containerOneImg").style.display = "block";
  document.getElementById("containerOneImg").src = "img/CAD.png";
  document.getElementById("figcaption1").innerHTML = "Above: The location of assets such as benches and plantbeds were initially only available on CAD files. However, to make this information accessible to the field staff and the organization as a whole, my predecessor and I used tools to extrapolate geographic coordinates from the CAD files. We integrated these coordinates into our asset management software and internal database, where we could use them to make customized reference maps.";
  document.getElementById("containerTwoImg").style.display = "block";
  document.getElementById("containerTwoImg").src = "img/design1.png";
  document.getElementById("figcaption2").innerHTML = "Above: One of the first tasks, when I started with Friends of the High Line, was to develop a standardized basemap, which could then be used for all future maps. This screenshot is during the initial design phase. I thoroughly enjoyed this initial iterative process.";
  document.getElementById("containerThreeImg").style.display = "block";
  document.getElementById("containerThreeImg").src = "img/design2.png";
  document.getElementById("figcaption3").innerHTML = "Above: Integrating the assets data with the basemap to create a reference map to support the work of the Development Department. They wanted a map of all the benches, differentiating donor-designated benches from those that aren't.";
  document.getElementById("containerFourImg").style.display = "none";
  document.getElementById("figcaption4").innerHTML = "";
  document.getElementById("motitle").innerHTML = "Staging & Design";
}

document.getElementById("facilities").addEventListener("click", facilities);
function facilities() {
        document.getElementById("HLintro").style.display = "none";
  document.getElementById("containerOneImg").style.display = "block";
  document.getElementById("containerOneImg").src = "img/facilities1.png";
  document.getElementById("figcaption1").innerHTML = "Above: A map differentiating the maintenance zones. I made these reference maps for each department of the Operations Division (facilities, horticulture, custodial, and visitor services) and they were used to onboard new members onto the team.";
  document.getElementById("containerTwoImg").style.display = "block";
  document.getElementById("containerTwoImg").src = "img/facilities2.png";
  document.getElementById("figcaption2").innerHTML = "Above: This is one of the experimental maps. All the technicians log the details of their daily tasks into an asset management software, that I adminsitered. To close the communications loop, I used their data to map the average labor hours per task, according to the facilities zone.<br><br>By looking at the reference map alone, it's curious that zone 3 is so much smaller than zone 4, but looking at this map, we can see that there must be a high concentration of assets in zone 3 that demand extra time and attention.";
  document.getElementById("containerThreeImg").style.display = "none";
  document.getElementById("containerThreeImg").src = "img/facilities3.png";
  document.getElementById("figcaption3").innerHTML = " ";
  document.getElementById("containerFourImg").style.display = "none";
  document.getElementById("figcaption4").innerHTML = "";
  document.getElementById("motitle").innerHTML = "Facilities";
}

document.getElementById("horticulture").addEventListener("click", horticulture);
function horticulture() {
        document.getElementById("HLintro").style.display = "none";
  document.getElementById("containerOneImg").style.display = "block";
  document.getElementById("containerOneImg").src = "img/hort1.png";
  document.getElementById("figcaption1").innerHTML = "Above: Reference map for horticultural zones, describing the zone by the garden names that horticulturalists use.";
  document.getElementById("containerTwoImg").style.display = "block";
  document.getElementById("containerTwoImg").src = "img/hort2.png";
  document.getElementById("figcaption2").innerHTML = "Above: This is  first of seventeen maps in an atlas series. Each one breaks down which plantbeds make up the garden/ecological zone.";
  document.getElementById("containerThreeImg").style.display = "block";
  document.getElementById("containerThreeImg").src = "img/hort3.png";
  document.getElementById("figcaption3").innerHTML = "Above: My predecessor had mapped all the woody plants on High Line, and I wanted to do something with these extraordinary data points. I collaborated with the arborist and experimented with the data to create this map. This map shows the most popular trees on the High Line (<30 plantings), and we noticed how the groupings hinted at the gardens' ecological make-up.";
  document.getElementById("containerFourImg").style.display = "block";
  document.getElementById("containerFourImg").src = "img/hort4.png";
  document.getElementById("figcaption4").innerHTML = "Above: Micro-climates are starkly felt on the High Line, and a major factor affecting them is the height of buildings. I created this map to support the horticultarists anecdata about why they thought certain species thrived/didn't thrive in their garden, while they behaved in a different manner in another location. <br><br>One of my favorite parts of working at Friends of the High Line, was listening to the horticulturalists' analysis of how and why their plantings are behaving the way they are. I created various such visuzliations based on their insights.";
  document.getElementById("motitle").innerHTML = "Horticulture";
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
  document.getElementById("motitle").innerHTML = "Other";
}
