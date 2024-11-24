var hexDestroyLv = 1;
var hexDestroyPre = [
	[0, 0], 0
]; //0-[x, y]; 1-Transparency
var hexDestroyCursor = [
	[0, 0], 0
]; //0-[x, y]; 1-Transparency
var hexDestroyNum = 0;
var hexDestroyLv3Num = 0;
var hexDestroyLv3Color = 0;
var hexDestroyLv3ColorPre = 0;
var hexDestroyTranslate = [0, 0]; //x, y
var hexDestroyScale = 0;
var hexDestroyMoveV = 1;

function hexDestroy(x, y, num) {
	push();
	translate(x + hexTranslate[0], y + hexTranslate[1]);
	scale(hexScale);

	stroke(color(hexFactionColor[0][hexFaction]));
	strokeWeight(3);
	noFill();
	circle(hexDestroyCursor[0][0], hexDestroyCursor[0][1], 30 + num);
	for (i = 0; i < 4; i++) {
		line(hexDestroyCursor[0][0] + (15 + num - 4) * cos(90 * i + num), hexDestroyCursor[0][1] + (15 + num - 4) * sin(90 * i + num), hexDestroyCursor[0][0] + (15 + num + 4) * cos(90 * i + num), hexDestroyCursor[0][1] + (15 + num + 4) * sin(90 * i + num));
	}

	pop();
}

function hexDestroyLv3(x, y, num) {
	push();
	translate(x + hexTranslate[0], y + hexTranslate[1]);
	scale(hexScale);

	colorMode(HSB);
	stroke(color(hexDestroyLv3Color, 100, 100));
	colorMode(RGB);

	hexDestroyLv3Color += (hexDestroyLv3ColorPre - hexDestroyLv3Color) / 10;

	strokeWeight(2);
	noFill();
	rect(hexDestroyCursor[0][0] - 20 - num / 2, hexDestroyCursor[0][1] - 20 - num / 2, 40 + num);

	pop();
}

function hexDestroyDraw(x, y) {
	if (hexMode === 4) {
		if (hexFaction !== 0) {
			hexSelectCursor = [
				[0, 0], 0, 0
			]

			if (hexDestroyLv >= 2) {
				hexDestroyCursor[0][0] = hexDestroyPre[0][0];
				hexDestroyCursor[0][1] = hexDestroyPre[0][1];
			} else {
				hexDestroyCursor[0][0] += ((mouseX - hexTranslate[0] - hexCenter[0]) / hexScale - hexDestroyCursor[0][0]) / 3.2;
				hexDestroyCursor[0][1] += ((mouseY - hexTranslate[1] - hexCenter[1]) / hexScale - hexDestroyCursor[0][1]) / 3.2;
				hexDestroyCursor[1] += (1 - hexDestroyCursor[1]) / 3.2;
			}

			for (let i = 0; i < hexNode.length; i++) {
				if (dist(hexNode[i][2][0], hexNode[i][2][1], (mouseX - hexTranslate[0] - hexCenter[0]) / hexScale, (mouseY - hexTranslate[1] - hexCenter[1]) / hexScale) < 15 && hexSelectNode) {
					if ((hexDestroyLv === 1 || (hexDestroyLv === 2 && dist(hexDestroyPre[0][0], hexDestroyPre[0][1], (mouseX - hexTranslate[0] - hexCenter[0]) / hexScale, (mouseY - hexTranslate[1] - hexCenter[1]) / hexScale) > 15)) && hexNode[i][0] !== 0 && hexClicked) {
						hexDestroyPre[0][0] = hexSelectPre[0][0];
						hexDestroyPre[0][1] = hexSelectPre[0][1];
						hexDestroyLv = 2;
						hexClicked = false;
					}
					if (dist(hexDestroyPre[0][0], hexDestroyPre[0][1], (mouseX - hexTranslate[0] - hexCenter[0]) / hexScale, (mouseY - hexTranslate[1] - hexCenter[1]) / hexScale) < 15 && hexClicked) {
						if (hexDestroyLv >= 3) {
							if (hexNode[i][1] === 1) {
								if (hexDestroyLv === 4) {
									hexItem[hexNode[i][0]][1] += 2;
									hexItem[hexNode[i][0]][2] += 2;
								}
								hexNode[i][0] = 0;
							} else if (hexDestroyLv === 4) {
								hexItem[hexNode[i][0]][2] += 2;
								hexItem[hexNode[i][0]][3] += 2;
								hexItem[hexNode[i][0]][4] += 3;
							}
							hexNode[i][1]--;
							hexDestroyLv = 1;
							hexMode = 1;
						} else {
							hexDestroyLv = 3;
						}
						hexClicked = false;
					}
				}
			}

			for (let i = 0; i < hexLink.length; i++) {
				if (dist(hexLink[i][2][0], hexLink[i][2][1], (mouseX - hexTranslate[0] - hexCenter[0]) / hexScale, (mouseY - hexTranslate[1] - hexCenter[1]) / hexScale) < 15 && hexSelectLink) {
					if ((hexDestroyLv === 1 || hexDestroyLv === 2 && dist(hexDestroyPre[0][0], hexDestroyPre[0][1], (mouseX - hexTranslate[0] - hexCenter[0]) / hexScale, (mouseY - hexTranslate[1] - hexCenter[1]) / hexScale) > 15) && hexLink[i][0] !== 0 && hexClicked) {
						hexDestroyPre[0][0] = hexSelectPre[0][0];
						hexDestroyPre[0][1] = hexSelectPre[0][1];
						hexDestroyLv = 2;
						hexClicked = false;
					}
					if (dist(hexDestroyPre[0][0], hexDestroyPre[0][1], (mouseX - hexTranslate[0] - hexCenter[0]) / hexScale, (mouseY - hexTranslate[1] - hexCenter[1]) / hexScale) < 15 && hexClicked) {
						if (hexDestroyLv >= 3) {
							if (hexDestroyLv === 4) {
								hexItem[hexLink[i][0]][2] += 1;
								hexItem[hexLink[i][0]][3] += 1;
							}
							hexLink[i][0] = 0;
							hexDestroyLv = 1;
							hexMode = 1;
						} else {
							hexDestroyLv = 3;
						}
						hexClicked = false;
					}
				}
			}

			if (dist(hexDestroyPre[0][0], hexDestroyPre[0][1], (mouseX - hexTranslate[0] - hexCenter[0]) / hexScale, (mouseY - hexTranslate[1] - hexCenter[1]) / hexScale) > 160) {
				hexDestroyLv = 1;
			}
		}

		if (hexDestroyLv <= 2) {
			hexDestroy(x, y, hexDestroyNum);
		} else {
			hexDestroyLv3(x, y, hexDestroyLv3Num);
		}
		
		if (hexDestroyLv === 1) {
			hexDestroyTranslate[0] = -0.5 * hexScale * hexDestroyPre[0][0];
			hexDestroyTranslate[1] = -0.5 * hexScale * hexDestroyPre[0][1];
			hexDestroyScale = 0.2;
		}
		if (hexDestroyLv === 2) {
			hexDestroyTranslate[0] = -0.5 * hexScale * hexDestroyPre[0][0];
			hexDestroyTranslate[1] = -0.5 * hexScale * hexDestroyPre[0][1];
			hexDestroyScale = 0.64;
		}
		if (hexDestroyLv === 3) {
			hexDestroyTranslate[0] = -0.5 * hexScale * hexDestroyPre[0][0];
			hexDestroyTranslate[1] = -0.5 * hexScale * hexDestroyPre[0][1];
			hexDestroyScale = 0.96;
			hexDestroyMoveV = 2;
		} else {
			hexDestroyMoveV = 1;
		}
	} else {
		hexDestroyCursor[1] = 0;
		hexDestroyTranslatePre = [0, 0];
		hexDestroyScalePre = 0;
		hexDestroyTranslate = [0, 0];
		hexDestroyScale = 0;
		hexDestroyLv = 1;
		hexDestroyLv3ColorPre = 0;
		hexDestroyLv3Color = 0;
	}
}