<!-- App.svelte -->
<main>
	<h1>Bestenliste</h1>

	<table id="scores">
		<tr>
			<th>Nickname</th>
			<th>Score</th>
			<th>Date</th>
		</tr>
		<tr>
			<td>Max Mustermann</td>
			<td>100.000</td>
			<td>09.12.2021</td>
		</tr>
	</table>
</main>

<style>
	#scores {
		font-family: Arial, Helvetica, sans-serif;
		border-collapse: collapse;
		width: 100%;
	}

	#scores td,
	#scores th {
		border: 1px solid #ddd;
		padding: 8px;
	}

	#scores tr:nth-child(even) {
		background-color: #f2f2f2;
	}

	#scores tr:hover {
		background-color: #ddd;
	}

	#scores th {
		padding-top: 12px;
		padding-bottom: 12px;
		text-align: left;
		background-color: #04aa6d;
		color: white;
	}
</style>
