//ISS EndPoint
//ISS is "International Space Station"

document.getElementById("track-iss").addEventListener("click", displayISS);

function displayISS() { 
       
    document.getElementById("canvas-iss-a").style.display="none";
	document.getElementById("title-iss").style.display="none";
	document.getElementById("track-iss").style.display="none";
    document.getElementById("issMap").style.display="block";
	document.getElementById("lat-lon").style.display="block";

    getISS();

    setInterval(getISS, 1000);
    
}


//making map with tiles
const mymap = L.map("issMap").setView([0, 0], 1);
const attribution =
	'&copy; <a href= "https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

//making marker with custom satellite icon
const issIcon = L.icon({
	iconUrl: "./images/iss200.png",
	iconSize: [75, 48],
	iconAnchor: [38, 24],
});

const marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);

//fetching api of satellite ID #25544
const api_url = "https://api.wheretheiss.at/v1/satellites/25544";

let firstTime = true;

async function getISS() {
	const response = await fetch(api_url);
	const data = await response.json();
	const { latitude, longitude } = data;

	marker.setLatLng([latitude, longitude]);
	if (firstTime) {
		mymap.setView([latitude, longitude], 5);
		firstTime = true;
	}
	document.getElementById("lat").textContent = latitude.toFixed(2);
	document.getElementById("lon").textContent = longitude.toFixed(2);

	// console.log(data.latitude);
	// console.log(data.longitude);
}

// * * * start 04 SATELLITE state management * * *
document.getElementById("home-button-s1").addEventListener("click", manageState4);
document.getElementById("home-button-s2").addEventListener("click", manageState4);
document.getElementById("project-button-s1").addEventListener("click", manageState4);
document.getElementById("team-button-s1").addEventListener("click", manageState4);

function manageState4() {     
    document.getElementById("issMap").style.display="none";
    document.getElementById("canvas-iss-a").style.display="block";
}
