var fs = require ("fs");
var fn = "solutions.txt";
var output = fs.createWriteStream(fn);

var solutions_found = 0;
var positions_tested = 0;
var bOutFile = false;

function PrintBoard(column) {
	var board = new Array(8);
	for (var f = 0; f < board.length; f++) board[f] = new Array(8);

	var i, j;
	console.log("Solution number " + solutions_found);
	console.log("   Positions tested " + positions_tested);
	for (i = 0; i < 8; i++) {
		for (j = 0; j < 8; j++) board[i][j] = '.';
	}
	for (i = 0; i < 8; i++) {
		board[7 - column[i]][i] = 'Q';
	}
	for (i = 0; i < 8; i++) {
		for (j = 0; j < 8; j++) process.stdout.write (board[i][j]);
		console.log("");
	}

	console.log("");
	for (i = 0; i < 8; i++) console.log("(" + (i + 1) + "," + (column[i] + 1) + ")  ");
	console.log("");
}

function StreamBoard(column) {
	var board = new Array(8);
	for (var f = 0; f < board.length; f++) board[f] = new Array(8);

	var i, j;
	output.write("Solution number " + solutions_found+"\n");
	output.write("   Positions tested " + positions_tested+"\n");
	for (i = 0; i < 8; i++) {
		for (j = 0; j < 8; j++) board[i][j] = '.';
	}
	for (i = 0; i < 8; i++) {
		board[7 - column[i]][i] = 'Q';
	}
	for (i = 0; i < 8; i++) {
		for (j = 0; j < 8; j++) output.write (board[i][j]);
		output.write("\n");
	}

	output.write("\n");
	for (i = 0; i < 8; i++) output.write("(" + (i + 1) + "," + (column[i] + 1) + ")  \n");
	output.write("\n");
}
function Add() {
	var row, c;
	var column_free = new Array(8);
	var up_free = new Array(15);
	var down_free = new Array(15);
	var col = new Array(8);

	for (c = 0; c < 8; c++) {
		column_free[c] = true;
		col[c] = 0;
	}
	for (c = 0; c < 15; c++)
		up_free[c] = down_free[c] = true;

	for (row = 0;;) {
		while (col[row] < 8) {
			c = col[row];
			if (column_free[c] && up_free[row + c] && down_free[row - c + 7]) {
				positions_tested += 1;
				column_free[c] = false;
				up_free[row + c] = false;
				down_free[row - c + 7] = false;
				if (row == 7) /* terminating condition */
				{
					solutions_found += 1;
					PrintBoard(col);
					StreamBoard(col);
					column_free[c] = true;
					up_free[row + c] = true;
					down_free[row - c + 7] = true;
					break;
				} else {
					row++;
					col[row] = 0;
					continue;
				}
			}
			col[row]++;
		}
		col[row] = 0;
		row--;

		c = col[row];
		column_free[c] = true;
		up_free[row + c] = true;
		down_free[row - c + 7] = true;

		col[row]++;

		if (row == 0 && col[0] == 8)
			break;
	}
}

Add();

output.end();
console.log("done");

/*
var fs = require ("fs");
var fn = "stream.txt";
var output = fs.createWriteStream(fn);
output.write ("mickey");
output.write ("mouse");
output.end();
*/