// Data from: https://data.giss.nasa.gov/gistemp/
// Mean from: https://earthobservatory.nasa.gov/world-of-change/DecadalTemp

//keyboard degree symbol (Alt + 0176)

window.addEventListener("load", setup);

async function setup() {
	const ctx = document.getElementById("myChart").getContext("2d");
	const globalTemps = await getData();
	const chart = new Chart(ctx, {
		type: "line",
		data: {
			labels: globalTemps.years,
			datasets: [
				{
					label: "Temperature in °C",
					data: globalTemps.temps,
					fill: false,
					borderColor: "rgba(255, 99, 132, 1)",
					// backgroundColor: "rgba(255, 99, 132, 0.2)",
					backgroundColor: "rgba(218, 165, 32,0.2)",
					hoverBackgroundColor: "rgba(255,99,132,1)",
					borderWidth: 1.5,
				},
			],
		},
		options: {},
	});
}

async function getData() {
	// const zonAnnData =
	// 	"https://data.giss.nasa.gov/gistemp/tabledata_v4/ZonAnn.Ts+dSST.csv";
	// const response = await fetch('testSample.csv');
	// const response = await fetch("data/GLB.Ts+dSST.csv");
	const response = await fetch("data/ZonAnn.Ts+dSST.csv");

	const data = await response.text();
	const years = [];
	const temps = [];
	// let cnt = 1;
	const rows = data.split("\n").slice(1);
	rows.forEach((row) => {
		// console.log(`hi ${cnt++} °`);
		const cols = row.split(",");
		const yr = years.push(cols[0]);
		// console.log(yr);

		temps.push(14 + parseFloat(cols[1]));
		// console.log(`${temp} °`);
		// return `${temps} °`;
	});
	// console.log({ years, temps });
	return { years, temps };
}
