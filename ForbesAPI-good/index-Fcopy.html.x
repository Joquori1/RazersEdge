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
		<h1>Hello...testing F-Copy</h1>

		<form action="" method="GET" enctype="multipart/form-data" id="form">
			<div>
				<fieldset>
					<legend>Forbes Top Wealth List:</legend>
					<label for="num">Enter a number from 1 to 20:</label>
					<br />
					<input
						type="number"
						name="num"
						id="num"
						required
						min="1"
						max="20"
					/>
					<button type="reset">Clear</button>
					<button type="submit">Submit</button>
				</fieldset>
			</div>
		</form>

		<!-- <form onsubmit="return false;" name="myForm">
			<label>Number 1-20</label>
			<input type="number" name="num" id="num" min="1" max="20" />

			<input type="submit" name="submit" onclick="number()" />
		</form> -->

		<!-- 
		<form onsubmit="return false;" name="myForm">
			<fieldset>
				<legend>Forbes Top Wealth List:</legend>
				<label for="num">Enter # between 1-20:</label><br />
				<input
					id="num"
					type="number"
					min="1"
					max="20"
					name="num"
				/><br />
				<br />
				<input type="submit" name="submit" onclick="number()" />
			</fieldset>
		</form> -->

		<div class="chart-container">
			<canvas id="myChart"></canvas>
		</div>

		<script src="js/script-Fcopy.js"></script>

		<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.js"></script>
	</body>
</html>
<!-- style="position: relative; height: 80vh; width: 100vw" -->
