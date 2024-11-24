var hexFaction = 0;
var hexFactionNum = [0, 0, 0, 0];
var hexFactionMove = [0, 0, 0, 0];
var hexFactionColor = [
	['#00000000', '#FF5D5D', '#566FFF', '#FE6BF7', '#7EF1F0'],
	['#00000000', '#B72222', '#1B3BC9', '#D041C5', '#47A7A6']
];

function hexItemUI_Tag(x, y, i) {
	push();
	translate(x, y);

	for (let j = 4; j >= 1; j--) {
		text(hexBlockTag[j], cos(180 * i) * 16 * hexExchangeMove[0][i] * (j - 2.5), 30 * hexExchangeMove[0][i] * (j - 2.5) + 25 * hexExchangeMove[0][i]);
	}

	pop();
}

function hexItemUI_TXT(x, y, i) {
	push();
	translate(x, y);

	for (let j = 4; j >= 1; j--) {
		text(hexItem[i + 1][j] - hexExchangeItem[i][j - 1], cos(180 * i) * 16 * hexExchangeMove[0][i] * (j - 2.5), 30 * hexExchangeMove[0][i] * (j - 2.5) + 25 * hexExchangeMove[0][i]);
	}

	pop();
}

function hexItemUI_Simple(i) {
	fill(color(hexFactionColor[0][i + 1]));
	quad((width - 5 * cos(90 * i + 135) * hexExchangeMove[0][i]) % width, (height - 5 * sin(90 * i + 135) * hexExchangeMove[0][i]) % height,
		(width - 5 * cos(90 * i + 135) * hexExchangeMove[0][i]) % width, (height - (55 + 3 / 4 * sqrt(3) * hexFactionMove[i]) * sin(90 * i + 135) * hexExchangeMove[0][i]) % height,
		(width - (200 + 1 / 8 * hexFactionMove[i] + hexExchangeMove[1][i]) * cos(90 * i + 135) * hexExchangeMove[0][i]) % width, (height - (55 + 3 / 4 * sqrt(3) * hexFactionMove[i]) * sin(90 * i + 135) * hexExchangeMove[0][i]) % height,
		(width - (200 + 9 / 8 * hexFactionMove[i] + hexExchangeMove[1][i]) * cos(90 * i + 135) * hexExchangeMove[0][i]) % width, (height - 5 * sin(90 * i + 135) * hexExchangeMove[0][i]) % height
	);
	fill(47);
	quad((width - (33 + hexExchangeMove[1][i]) * cos(90 * i + 135) * hexExchangeMove[0][i]) % width, (height - 10 * sin(90 * i + 135) * hexExchangeMove[0][i]) % height,
		(width - (33 + hexExchangeMove[1][i]) * cos(90 * i + 135) * hexExchangeMove[0][i]) % width, (height - (48 + 3 / 4 * sqrt(3)) * sin(90 * i + 135) * hexExchangeMove[0][i]) % height,
		(width - (192 + hexExchangeMove[1][i]) * cos(90 * i + 135) * hexExchangeMove[0][i]) % width, (height - (48 + 3 / 4 * sqrt(3)) * sin(90 * i + 135) * hexExchangeMove[0][i]) % height,
		(width - (192 + hexExchangeMove[1][i]) * cos(90 * i + 135) * hexExchangeMove[0][i]) % width, (height - 10 * sin(90 * i + 135) * hexExchangeMove[0][i]) % height
	);

	for (let j = 4; j >= 1; j--) {
		textAlign(CENTER);
		textSize(16 * hexExchangeMove[0][i]);
		textStyle(BOLD);
		fill(color(hexBlockColor[j]),  51 / 20 * constrain(100 - hexFactionMove[i + 1], 0, 100));
		text(hexItem[i + 1][j] - hexExchangeItem[i][j - 1], (width - (114 + hexExchangeMove[1][i]) * cos(90 * i + 135) * hexExchangeMove[0][i]) % width + 28 * (j - 2.5) * hexExchangeMove[0][i], (height - 30 * sin(90 * i + 135) * hexExchangeMove[0][i]) % height + 6 * hexExchangeMove[0][i]);
		textStyle(NORMAL);
	}
}

function hexFactionDraw() {
	if (hexTurn[1] > 0 && hexTurn[1] < 5) {
		hexFaction = hexTurn[1];
	} else {
		hexFaction = 0;
	}
}

function hexFactionUI() {
	push();

	noStroke();
	for (let i = 0; i < 4; i++) {
		hexItemUI_Simple(i);
		fill(color(hexFactionColor[1][i + 1]));
		// quad((width - (5 + 131 / 100 * hexFactionMove[i]) * cos(90 * i + 135)) % width, (height - 5 * sin(90 * i + 135)) % height,
		// 	(width - (5 + 40 / 100 * hexFactionMove[i]) * cos(90 * i + 135)) % width, (height - (55 + 3 / 4 * sqrt(3) * hexFactionMove[i]) * sin(90 * i + 135)) % height,
		// 	(width - (25 + 15 / 8 * hexFactionMove[i]) * cos(90 * i + 135)) % width, (height - (55 + 3 / 4 * sqrt(3) * hexFactionMove[i]) * sin(90 * i + 135)) % height,
		// 	(width - (25 + 23 / 8 * hexFactionMove[i]) * cos(90 * i + 135)) % width, (height - 5 * sin(90 * i + 135)) % height
		// );
		quad((width - 5 * cos(90 * i + 135) * hexExchangeMove[0][i]) % width, (height - 5 * sin(90 * i + 135) * hexExchangeMove[0][i]) % height,
		(width - 5 * cos(90 * i + 135) * hexExchangeMove[0][i]) % width, (height - (55 + 3 / 4 * sqrt(3) * hexFactionMove[i]) * sin(90 * i + 135) * hexExchangeMove[0][i]) % height,
		(width - (25 + 15 / 8 * hexFactionMove[i] + hexExchangeMove[1][i]) * cos(90 * i + 135) * hexExchangeMove[0][i]) % width, (height - (55 + 3 / 4 * sqrt(3) * hexFactionMove[i]) * sin(90 * i + 135) * hexExchangeMove[0][i]) % height,
		(width - (25 + 23 / 8 * hexFactionMove[i] + hexExchangeMove[1][i]) * cos(90 * i + 135) * hexExchangeMove[0][i]) % width, (height - 5 * sin(90 * i + 135) * hexExchangeMove[0][i]) % height
	);
		textAlign(CENTER);
		textSize(16 * hexExchangeMove[0][i]);
		fill(255, 255, 255, 51 / 20 * constrain(hexFactionMove[i], 0, 100));
		hexItemUI_Tag((width - 150 * cos(90 * i + 135) * hexExchangeMove[0][i]) % width, (height - 95 * sin(90 * i + 135) * hexExchangeMove[0][i]) % height - 20 * hexExchangeMove[0][i], i);
		hexItemUI_TXT((width - 220 * cos(90 * i + 135) * hexExchangeMove[0][i]) % width, (height - 95 * sin(90 * i + 135) * hexExchangeMove[0][i]) % height - 20 * hexExchangeMove[0][i], i);
	}

	pop();
}

function hexTurnPad(x, y, rot, size) {
	push();
	translate(x, y);
	rotate(rot);

	rectMode(CENTER);

	noStroke();
	fill(158, 36, 65, 228);
	hexagon(0, 0, 25 * size, 0);
	fill(200, 200, 200, 240);
	textAlign(CENTER);
	textSize(25 * size);
	text('- HEXYEAR -', 0, 100 * size);

	rectMode(CORNER);

	pop();

	push();
	translate(x, y);

	noStroke();
	fill(200, 200, 200, 240);
	textAlign(CENTER);
	textSize(100 * size);
	text(hexTurn[0], 0, 35 * size);

	pop();
}