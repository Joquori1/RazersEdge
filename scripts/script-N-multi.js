// Data from: https://data.giss.nasa.gov/gistemp/
// Mean from: https://earthobservatory.nasa.gov/world-of-change/DecadalTemp

const buttonChart = document.getElementById("button-temp");

buttonChart.addEventListener("click", setup);

async function setup() {
	document.getElementById("h5-chart").style.display="none";
	document.getElementById("button-temp").style.display="none";
	document.getElementById("canvas-temp").style.display="none";
	document.getElementById("h5-temp").style.display="block";
	document.getElementById("graphs-temp").style.display="block";

	const ctx = document.getElementById("myChart").getContext("2d");
	const dataTemps = await getData();
	const myChart = new Chart(ctx, {
		type: "line",
		data: {
			labels: dataTemps.years,
			datasets: [
				{
					label: "Global Temperature in °C",
					data: dataTemps.temps,
					fill: false,
					borderColor: "rgba(255, 99, 132, 1)",
					backgroundColor: "rgba(255, 99, 132, 0.5)",
					hoverBackgroundColor: "rgba(255,99,132,2)",
					borderWidth: 1.5,
				},
				{
					label: "Northern Hemisphere Temperature in °C",
					data: dataTemps.northern,
					fill: false,
					borderColor: "rgba(99, 132, 255, 1)",
					backgroundColor: "rgba(99, 132, 255, 0.5)",
					hoverBackgroundColor: "rgba(99,132,255,2)",
					borderWidth: 1,
				},
				{
					label: "Souther Hemisphere in °C",
					data: dataTemps.southern,
					fill: false,
					borderColor: "rgba(99, 255, 132, 1)",
					backgroundColor: "rgba(99, 255, 132, 0.5)",
					hoverBackgroundColor: "rgba(99,255,132,2)",
					borderWidth: 1.5,
				},
			],
		},
		options: {},
	});
}

async function getData() {
	// const response = await fetch('testSample.csv');
	const response = await fetch("./data/ZonAnn.Ts+dSST.csv");
	const data = await response.text();
	const years = [];
	const temps = [];
	const northern = [];
	const southern = [];
	const rows = data.split("\n").slice(1);
	rows.forEach((row) => {
		const cols = row.split(",");
		years.push(cols[0]);
		temps.push(14 + parseFloat(cols[1]));
		northern.push(14 + parseFloat(cols[2]));
		southern.push(14 + parseFloat(cols[3]));
	});
	return { years, temps, northern, southern };
}