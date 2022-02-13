/*
=>> Fetch Data, then define bar chart function
*/

fetch("https://forbes400.herokuapp.com/api/forbes400?limit=10")
	.then(function (response) {
		// console.log(response);
		return response.json();
	})
	.then(function (series) {
		console.log(series);
		BuildChart(series);
	})
	.catch(function (error) {
		console.log(error);
	});

function BuildChart(labels, values, chartTitle) {
	// console.log(labels, values, chartTitle);
	var data = {
		labels: labels,
		datasets: [
			{
				label: chartTitle, // Name the series
				data: values,
				backgroundColor: [
					"rgb(54, 162, 235)",
					"rgb(54, 162, 235)",
					"rgb(54, 162, 235)",
					"rgb(54, 162, 235)",
					"rgb(54, 162, 235)",
					"rgb(54, 162, 235)",
					"rgb(54, 162, 235)",
					"rgb(54, 162, 235)",
					"rgb(54, 162, 235)",
					"rgb(54, 162, 235)",
				],
			},
		],
	};
	console.log(data);
	console.log("goat=line 42");

	var ctx = document.getElementById("myChart").getContext("2d");
	var myChart = new Chart(ctx, {
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

	console.log("monkey=line 73");

	return myChart;
}

if (this.status == 200) {
	var json = JSON.parse(this.response);
	console.log(json);

	// Map json labels back to values array
	var labels = json.map(function (e) {
		console.log(labels);
		return e.person.name;
	});

	// Map json values back to values array
	var values = json.map(function (e) {
		console.log(values);
		return e.finalWorth / 1000; // Divide to billions; units of ten
	});
	BuildChart(labels, values, "Real Time Net Worth");
}
