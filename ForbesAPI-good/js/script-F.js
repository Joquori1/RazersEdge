let fform = document.getElementById("form");
let num = (document.getElementById("numb").innerHTML = "15");

let tNumb = (document.getElementsByTagName("input").innerHTML = num);
console.log(+tNumb);

fform.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log("yes");
	// console.log(Number(tNumb));
	// console.log((num.innerHTML = ""));
	// return tNumb;
});

if (tNumb != "") {
	console.log("# submitted!");
	console.log(tNumb);
	// return tNumb;
} else {
	alert("Must enter # between 1 - 20");
}

// Fetch Data from API
fetch(`https://forbes400.herokuapp.com/api/forbes400?limit=${tNumb}`)
	.then((response) => {
		if (response.status != 200) {
			console.log(
				"Looks like there is a problem. Status Code:" + response.status
			);
			return;
		} else {
			return response.json();
		}
	})
	.then((data) => {
		console.log(data);
		// Map json labels back to values array
		let labels = data.map(function (e) {
			return e.person.name;
		});
		// Map json values back to values array
		let values = data.map(function (e) {
			return e.finalWorth / 1000; // Divide to billions in units of ten
		});
		BuildChart(labels, values, "Real Time Net Worth");
	})
	.catch((error) => {
		console.log("Request failed", error);
	});

function BuildChart(labels, values, chartTitle) {
	// console.log(labels, values, chartTitle);
	let data = {
		labels: labels,
		datasets: [
			{
				label: chartTitle, // Name the series
				data: values,
				backgroundColor: [
					"rgb(255, 97, 97)",
					"rgb(255, 202, 97)",
					"rgb(97, 255, 97)",
					"rgb(97, 97, 255)",
					"rgb(0, 51, 255)",
					"rgb(0, 51, 153)",
					"rgb(54, 162, 235)",
					"rgb(0, 51, 0)",
					"rgb(0, 0, 255)",
					"rgb(0, 0, 153)",
					"rgb(255, 97, 97)",
					"rgb(255, 202, 97)",
					"rgb(97, 255, 97)",
					"rgb(97, 97, 255)",
					"rgb(0, 51, 255)",
					"rgb(0, 51, 153)",
					"rgb(54, 162, 235)",
					"rgb(0, 51, 0)",
					"rgb(0, 0, 255)",
					"rgb(0, 0, 153)",
				],
			},
		],
	};
	let ctx = document.getElementById("myChart").getContext("2d");
	let myChart = new Chart(ctx, {
		type: "horizontalBar",
		data: data,
		options: {
			responsive: true, // chart js will respond fluid.
			maintainAspectRatio: false, // Add to prevent default
			scales: {
				xAxes: [
					{
						scaleLabel: {
							display: true,
							labelString: "$ Billion",
						},
					},
				],
				yAxes: [
					{
						scaleLabel: {
							display: true,
							labelString: "Name",
						},
					},
				],
			},
		},
	});
	return myChart;
}
