<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />

		<link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
		/>
		<link rel="stylesheet" href="css/style-F.css" />

		<title>Real-time API: Forbes Data</title>
	</head>

	<body>
		<h1>Hello...testing</h1>

		<form id="form" action="js/scriptF.js" method="post">
			<fieldset>
				<legend>Forbes Top Wealth List:</legend>
				<label for="numb">Enter # between 1-20:</label><br />
				<input id="numb" type="text" name="numb" /><br />
				<br />
				<input type="submit" value="Enter" />
			</fieldset>
		</form>

		<div class="chart-container">
			<canvas id="myChart"></canvas>
		</div>

		<script src="js/script-F.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.js"></script>
	</body>
</html>
<!-- style="position: relative; height: 80vh; width: 100vw" -->
