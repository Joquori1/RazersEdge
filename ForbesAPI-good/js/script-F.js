//******Good File*******///

/////-->>
// console.log(`${numb} 3`);
// numb = document.getElementById("num").value = "";
// console.log(`${numb} 4`);
// if (numb > 0) numb = 1;
// console.log(`${numb} 5`);
/////-->>

const frm = document.getElementById("form");
console.log(`hello-1 ${frm}`);

frm.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log(`hello-2 ${frm}`);

	let numb = document.getElementById("num").value;
	numb = +numb;
	console.log(`${numb} 1st`);

	// if (numb <= 20 && numb > 0) {
	// 	// alert(`${numb} names submitted`);
	// 	console.log("got it!");
	// } else {
	// 	alert(`Can't enter ${numb} - Must enter a # from 1 to 20`);
	// 	document.getElementById("num").innerHTML = "";
	// }

	console.log(`${numb} 2nd`);
	// });

	////////////////////////////////////////////////////////////////////////////
	// Fetch Data from API
	fetch(`https://forbes400.herokuapp.com/api/forbes400?limit=${numb}`)
		.then((response) => {
			if (response.status != 200) {
				console.log(
					"Looks like there is a problem. Status Code:" +
						response.status
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
				return (e.finalWorth / 1000).toFixed(2); // Divide to billions in units of ten
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
						"rgb(255, 202, 97)",
						"rgb(255, 97, 97)",
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
});
