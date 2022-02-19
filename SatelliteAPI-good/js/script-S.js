//ISS EndPoint
//ISS is "International Space Station"

//making map with tiles
const mymap = L.map("issMap").setView([0, 0], 1);
const attribution =
	'&copy; <a href= "https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

//making marker with custom satellite icon
const issIcon = L.icon({
	iconUrl: "iss200.png",
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
		firstTime = false;
	}
	document.getElementById("lat").textContent = latitude.toFixed(2);
	document.getElementById("lon").textContent = longitude.toFixed(2);

	// console.log(data.latitude);
	// console.log(data.longitude);
}

getISS();

setInterval(getISS, 1000);
