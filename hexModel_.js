function hexagon(x, y, size, rot) {
	push();
	translate(x, y);
	rotate(rot);
	beginShape();
	for (let i = 0; i <= 6; i++) {
		vertex(6 * size * cos(60 * i), 6 * size * sin(60 * i));
	}
	endShape();
	pop();
}

function hexBuilding(x, y, size, faction) {
	push();
	noStroke();
	fill(color(faction))
	hexagon(x, y, 1.2 * size, 0);
	fill(47);
	hexagon(x, y, 0.8 * size, 0);
	fill(color(faction));
	hexagon(x, y, 0.5 * size, 0);
	pop();
}

function hexDockM(x, y, size, sort) {
    push();
    noStroke();
	sort > 0 ? fill(color(hexBlockColor[sort])) : colorMode(HSB) && fill(Jeb_Color, 100, 100) && colorMode(RGB);
    // if (sort > 0) {
    //     fill(color(hexBlockColor[sort]));
    // } else {
    //     colorMode(HSB);
    //     fill(Jeb_Color, 100, 100);
    //     colorMode(RGB);
    // }
    rect(x - 1, y - 30, 4, 60);
	pop();
}

function hexDockTXT(x, y, rot, size, inputTXT) {
    push();
	translate(x, y);
	rotate(rot);

	textAlign(CENTER);
	textSize(size);
    text(inputTXT, 0, 0);
	
    pop();
}

// The Exchange
function hexLibra(x, y, size, num, hexWNum, hexRotNum, hexSize, partTrans, partTrans_2, partTransPre) {
	push();
	translate(x, y);
	scale(size);

	noStroke();
	colorMode(HSB);
	fill(color(Jeb_Color, hexWNum + 15 * sin(Jeb_Color * 2) * num / 100, 100, num / 100));
	colorMode(RGB);
	hexagon(0, 0, 7 * hexSize, 90 + hexRotNum);

	noStroke();
	strokeWeight(1);
	fill(180 + 0.4 * partTrans, 220, 220, num + 0.2 * partTrans);
	beginShape();

	vertex(51 + 2.49 * partTrans, (39 - 0.9 / 3 * partTrans) * sqrt(3));
	vertex(69 + 2.31 * partTrans, (33 - 1.15 / 3 * partTrans) * sqrt(3)); //
	vertex(69 + 2.12 * partTrans, (13 - 0.85 / 3 * partTrans) * sqrt(3)); //
	vertex(108 + 1.93 * partTrans, (0 - 0.75 / 3 * partTrans) * sqrt(3)); //
	vertex(124 + 1.97 * partTrans, (6 - 0.62 / 3 * partTrans) * sqrt(3)); //
	vertex(101 + 2.2 * partTrans, (41 / 3 - 0.85 / 3 * partTrans) * sqrt(3));
	vertex(81 + 2.2 * partTrans, (-4 - 0.88 / 3 * partTrans) * sqrt(3));
	vertex(51 + 2.3 * partTrans, (6 - 0.65 / 3 * partTrans) * sqrt(3));

	endShape(CLOSE);

	fill(180 + 0.4 * partTrans, 220, 220, num + 0.2 * partTrans);
	beginShape();

	vertex(-51 - 2.49 * partTrans, (39 - 0.9 / 3 * partTrans) * sqrt(3));
	vertex(-69 - 2.31 * partTrans, (33 - 1.15 / 3 * partTrans) * sqrt(3)); //
	vertex(-69 - 2.12 * partTrans, (13 - 0.85 / 3 * partTrans) * sqrt(3)); //
	vertex(-108 - 1.93 * partTrans, (0 - 0.75 / 3 * partTrans) * sqrt(3)); //
	vertex(-124 - 1.97 * partTrans, (6 - 0.62 / 3 * partTrans) * sqrt(3)); //
	vertex(-101 - 2.2 * partTrans, (41 / 3 - 0.85 / 3 * partTrans) * sqrt(3));
	vertex(-81 - 2.2 * partTrans, (-4 - 0.88 / 3 * partTrans) * sqrt(3));
	vertex(-51 - 2.3 * partTrans, (6 - 0.65 / 3 * partTrans) * sqrt(3));

	endShape(CLOSE);

	if (hexExchangeSection.length === 2) {
		if (hexExchangeSection[1] !== 0) {
			fill(color(hexFactionColor[0][hexExchangeSection[1]]));
		} else {
			colorMode(HSB);
			fill(color(Jeb_Color, 0.5 * hexWNum + 15 * sin(Jeb_Color * 2) * num / 100, 100, num / 100));
			colorMode(RGB);
		}
	} else {
		colorMode(HSB);
		fill(color(Jeb_Color, 0.5 * hexWNum + 15 * sin(Jeb_Color * 2) * num / 100, 100, num / 100));
		colorMode(RGB);
	}
	quad(94 + 2.07 * partTrans, 0 - 0.15 * partTrans, 94 - 36 / 5 + 2.07 * partTrans, -32 / 5 * sqrt(3) - 0.15 * partTrans, 94 + 2.07 * partTrans, -64 / 5 * sqrt(3) - 0.15 * partTrans, 94 + 36 / 5 + 2.07 * partTrans, -32 / 5 * sqrt(3) - 0.15 * partTrans);
	if (hexExchangeSection.length === 2) {
		fill(color(hexFactionColor[0][hexExchangeSection[0]]));
	} else {
		colorMode(HSB);
		fill(color(Jeb_Color, 0.5 * hexWNum + 15 * sin(Jeb_Color * 2) * num / 100, 100, num / 100));
		colorMode(RGB);
	}
	quad(-94 - 2.07 * partTrans, 0 - 0.15 * partTrans, -94 + 36 / 5 - 2.07 * partTrans, -32 / 5 * sqrt(3) - 0.15 * partTrans, -94 - 2.07 * partTrans, -64 / 5 * sqrt(3) - 0.15 * partTrans, -94 - 36 / 5 - 2.07 * partTrans, -32 / 5 * sqrt(3) - 0.15 * partTrans);

	push();
	scale(1 - partTrans / 300);

	stroke(225, 225, 225, num * max(1 - partTrans / 100, partTransPre / 100 * sin(18 * (constrain(partTrans, 90, 100) - 90))));
	strokeWeight(1 + 3 * partTransPre / 100 * sin(18 * (constrain(partTrans, 90, 100) - 90)));

	fill(220 - 0.2 * partTrans, 220 - 0.2 * partTrans, 180 + 0.2 * partTrans, num);
	triangle(91 - 0.13 * partTrans, (17 + 0.13 * partTrans) * sqrt(3), 91 - 0.13 * partTrans, (36 + 0.13 * partTrans) * sqrt(3), 121 - 0.13 * partTrans, (7 + 0.13 * partTrans) * sqrt(3));
	triangle(-91 + 0.13 * partTrans, (17 + 0.13 * partTrans) * sqrt(3), -91 + 0.13 * partTrans, (36 + 0.13 * partTrans) * sqrt(3), -121 + 0.13 * partTrans, (7 + 0.13 * partTrans) * sqrt(3));

	fill(220 - 0.2 * partTrans, 180 + 0.2 * partTrans, 220 - 0.2 * partTrans, num);
	quad(33 + 0.09 * partTrans, (39 + 0.03 * partTrans) * sqrt(3), 33 + 0.09 * partTrans, (50 + 0.11 * partTrans) * sqrt(3), 78, (35 + 0.14 * partTrans) * sqrt(3), 78, (24 + 0.06 * partTrans) * sqrt(3));
	quad(-33 - 0.09 * partTrans, (39 + 0.03 * partTrans) * sqrt(3), -33 - 0.09 * partTrans, (50 + 0.11 * partTrans) * sqrt(3), -78, (35 + 0.14 * partTrans) * sqrt(3), -78, (24 + 0.06 * partTrans) * sqrt(3));

	colorMode(HSB);
	// fill(color(Jeb_Color, 0.75 * hexWNum + 25 * sin(Jeb_Color), 75, num));
	fill(color(Jeb_Color, hexWNum / 2 + 15 * sin(Jeb_Color * 2) * num / 100, 100, sqrt(num) / 20));
	colorMode(RGB);
	// quad(69, 27 * sqrt(3), 78, 24 * sqrt(3), 78, 10 * sqrt(3), 69, 13 * sqrt(3));
	// quad(-69, 27 * sqrt(3), -78, 24 * sqrt(3), -78, 10 * sqrt(3), -69, 13 * sqrt(3));
	beginShape();
	// vertex(69 - 0.45 * partTrans, (27 + 0.21 * partTrans) * sqrt(3)); //Legacy shape
	// vertex(78 + 0.3 * partTrans, (24 - 0.04 * partTrans) * sqrt(3));
	// vertex(78 + 0.03 * partTrans, (10 - 0.14 * partTrans) * sqrt(3));
	// vertex(69 - 0.09 * partTrans, (13 - 0.1 * partTrans) * sqrt(3));
	// vertex(69 + 0.03 * partTrans, (20 - 0.04 * partTrans) * sqrt(3));
	// vertex(69 - 0.45 * partTrans, (20 + 0.12 * partTrans) * sqrt(3));

	// vertex(69 - 0.45 * partTrans - 0.24 * partTrans_2, (27 + 0.21 * partTrans + 0.08 * partTrans_2) * sqrt(3)); //Previous trans
	// vertex(78 + 0.3 * partTrans, (24 - 0.04 * partTrans) * sqrt(3));
	// vertex(78 - 0.18 * partTrans, (10 - 0.07 * partTrans) * sqrt(3));
	// vertex(69 + 0.03 * partTrans, (13 + 0.03 * partTrans) * sqrt(3));
	// vertex(69 - 0.45 * partTrans - 0.24 * partTrans_2, (20 + 0.12 * partTrans + 0.08 * partTrans_2) * sqrt(3));

	// vertex(69 - 0.45 * partTrans, (27 + 0.05 * partTrans) * sqrt(3)); //Another translate way
	// vertex(78 - 0.54 * partTrans, (24 + 0.24 * partTrans) * sqrt(3));
	// vertex(78 + 0.3 * partTrans, (10 + 0.1 * partTrans) * sqrt(3));
	// vertex(69 - 0.09 * partTrans, (13 - 0.1 * partTrans) * sqrt(3));
	// vertex(69 + 0.03 * partTrans, (20 - 0.04 * partTrans) * sqrt(3));

	vertex(69 - 0.45 * partTrans - 0.24 * partTrans_2, (27 + 0.21 * partTrans + 0.08 * partTrans_2) * sqrt(3));
	vertex(78 + 0.3 * partTrans, (24 - 0.04 * partTrans) * sqrt(3));
	vertex(78 + 0.3 * partTrans, (10 + 0.1 * partTrans) * sqrt(3));
	vertex(69 - 0.09 * partTrans, (13 - 0.1 * partTrans) * sqrt(3));
	vertex(69 + 0.03 * partTrans, (20 - 0.04 * partTrans) * sqrt(3));
	vertex(69 - 0.45 * partTrans - 0.24 * partTrans_2, (20 + 0.12 * partTrans + 0.08 * partTrans_2) * sqrt(3));
	endShape();

	beginShape();
	// vertex(-69 + 0.45 * partTrans, (27 + 0.21 * partTrans) * sqrt(3)); //Legacy shape
	// vertex(-78 - 0.3 * partTrans, (24 - 0.04 * partTrans) * sqrt(3));
	// vertex(-78 - 0.03 * partTrans, (10 - 0.14 * partTrans) * sqrt(3));
	// vertex(-69 + 0.09 * partTrans, (13 - 0.1 * partTrans) * sqrt(3));
	// vertex(-69 - 0.03 * partTrans, (20 - 0.04 * partTrans) * sqrt(3));
	// vertex(-69 + 0.45 * partTrans, (20 + 0.12 * partTrans) * sqrt(3));

	// vertex(-69 + 0.45 * partTrans + 0.24 * partTrans_2, (27 + 0.21 * partTrans + 0.08 * partTrans_2) * sqrt(3)); //Previous trans
	// vertex(-78 - 0.3 * partTrans, (24 - 0.04 * partTrans) * sqrt(3));
	// vertex(-78 + 0.18 * partTrans, (10 - 0.07 * partTrans) * sqrt(3));
	// vertex(-69 - 0.03 * partTrans, (13 + 0.03 * partTrans) * sqrt(3));
	// vertex(-69 + 0.45 * partTrans + 0.24 * partTrans_2, (20 + 0.12 * partTrans + 0.08 * partTrans_2) * sqrt(3));
	
	vertex(-69 + 0.45 * partTrans + 0.24 * partTrans_2, (27 + 0.21 * partTrans + 0.08 * partTrans_2) * sqrt(3));
	vertex(-78 - 0.3 * partTrans, (24 - 0.04 * partTrans) * sqrt(3));
	vertex(-78 - 0.3 * partTrans, (10 + 0.1 * partTrans) * sqrt(3));
	vertex(-69 + 0.09 * partTrans, (13 - 0.1 * partTrans) * sqrt(3));
	vertex(-69 - 0.03 * partTrans, (20 - 0.04 * partTrans) * sqrt(3));
	vertex(-69 + 0.45 * partTrans + 0.24 * partTrans_2, (20 + 0.12 * partTrans + 0.08 * partTrans_2) * sqrt(3));
	endShape();

	fill(120, 160, 160, num * (1 - partTrans / 100));
	quad(24 - 0.24 * partTrans_2, (32 + 0.24 * partTrans_2) * sqrt(3), 24 - 0.24 * partTrans_2, (69 - 0.02 * partTrans + 0.08 * partTrans_2) * sqrt(3), 28 + 0.09 * partTrans_2, (69 - 8 / 3 - 0.02 / 3 * partTrans - 0.03 * partTrans_2) * sqrt(3), 28 + 0.09 * partTrans_2, (33 - 8 / 3 + 0.13 * partTrans_2) * sqrt(3));
	quad(-24 + 0.24 * partTrans_2, (32 + 0.24 * partTrans_2) * sqrt(3), -24 + 0.24 * partTrans_2, (69 - 0.02 * partTrans + 0.08 * partTrans_2) * sqrt(3), -28 - 0.09 * partTrans_2, (69 - 8 / 3 - 0.02 / 3 * partTrans - 0.03 * partTrans_2) * sqrt(3), -28 - 0.09 * partTrans_2, (33 - 8 / 3 + 0.13 * partTrans_2) * sqrt(3));

	fill(200, 200, 200, num);
	beginShape();
	vertex(60, 3 * sqrt(3));
	vertex(60, 20 * sqrt(3));
	vertex(24 - 0.24 * partTrans_2, (32 + 0.08 * partTrans_2) * sqrt(3));
	vertex(24 - 0.24 * partTrans_2, (69 - 0.02 * partTrans + 0.08 * partTrans_2) * sqrt(3));
	vertex(42, (57 + 0.04 * partTrans) * sqrt(3));
	vertex(42, 42 * sqrt(3));
	vertex(108, 20 * sqrt(3));
	// vertex(81, -4 * sqrt(3)); //Legacy vertex
	vertex(81 - 0.21 * partTrans, (-4 + 0.07 * partTrans) * sqrt(3));
	endShape(CLOSE);

	beginShape();
	vertex(-60, 3 * sqrt(3));
	vertex(-60, 20 * sqrt(3));
	vertex(-24 + 0.24 * partTrans_2, (32 + 0.08 * partTrans_2) * sqrt(3));
	vertex(-24 + 0.24 * partTrans_2, (69 - 0.02 * partTrans + 0.08 * partTrans_2) * sqrt(3));
	vertex(-42, (57 + 0.04 * partTrans) * sqrt(3));
	vertex(-42, 42 * sqrt(3));
	vertex(-108, 20 * sqrt(3));
	// vertex(-81, -4 * sqrt(3)); //Legacy vertex
	vertex(-81 + 0.21 * partTrans, (-4 + 0.07 * partTrans) * sqrt(3));
	endShape(CLOSE);

	pop();

	noStroke();
	fill(200, 200, 200, num);
	beginShape();
	vertex(0, -38 * sqrt(3));
	vertex(-12 * sqrt(3), -20 - 36 * sqrt(3));
	bezierVertex(-6 * sqrt(3), -22 - 44 * sqrt(3), -4 * sqrt(3), -18 - 52 * sqrt(3), 0, -138);
	bezierVertex(4 * sqrt(3), -18 - 52 * sqrt(3), 6 * sqrt(3), -22 - 44 * sqrt(3), 12 * sqrt(3), -20 - 36 * sqrt(3));
	endShape(CLOSE);

	// beginShape();
	// vertex(-6, -100);
	// bezierVertex(-6, -50, -10, -15, -30, 0);
	// bezierVertex(-28, 12, -16, 20, -12, 20);
	// vertex(-12, 30);
	// vertex(12, 30);
	// vertex(12, 20);
	// bezierVertex(16, 20, 28, 12, 30, 0);
	// bezierVertex(10, -15, 6, -50, 6, -100);
	// endShape();
	pop();	
}

// The Flourish
function hexBlossom(x, y, size, num, hexWNum, hexRotNum, hexSize, partTrans, partTransPre) {

	fill(0, 0, 0, 200);
	rect(0, 0, width, height)

	push();
	translate(x, y);
	scale(size);

	stroke(255, 2555, 255);
	noFill();
	beginShape();
	vertex(0, -40);
	bezierVertex(-20 * sqrt(3), -20, 0, 40, 20 * sqrt(3), 20);
	bezierVertex(20 * sqrt(3), -20, -20 * sqrt(3), -20, -20 * sqrt(3), 20);
	bezierVertex(0, 40, 20 * sqrt(3), -20, 0, -40);
	endShape(CLOSE);

	// noStroke();
	fill(255, 255, 255, 100);

	beginShape();
	vertex(0, 160);
	bezierVertex(4, 112, 40, 84, 90, 62);
	bezierVertex(320, -40, 180, -28, 90, 10);
	bezierVertex(180, -10, 160, 32, 72, 64);
	bezierVertex(-20, 100, -28, 120, -28, 136);
	bezierVertex(-22, 148, -10, 156, 0, 160);
	endShape(CLOSE);

	beginShape();
	vertex(-164,0);
	bezierVertex(-300, 80, -172, 60, -54, -30);
	bezierVertex(0, -72, 32, -108, 60, -110);
	bezierVertex(28, -108, 8, -80, -50, -36);
	bezierVertex(-120, 20, -200, 30, -164, 0);
	endShape();

	beginShape();
	vertex(0, 160);
	bezierVertex();
	endShape(CLOSE);

	pop();
}

// // The 
// function hex() {

// }

// // The 
// function hex() {

// }