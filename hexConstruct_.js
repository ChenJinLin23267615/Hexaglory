var hexConstructPre = [0, 0]; //x, y
var hexConstructNum = 0;
var hexConstructRot = 0;
var hexConstructNodePreLoad_1 = [];
var hexConstructNodePreLoad_2 = [];
var hexConstructLinkPreLoad_1 = [];
var hexConstructLinkPreLoad_2 = [];
var hexConstructTranslate = [0, 0]; //x, y
var hexConstructScale = 0;
var attNode1 = 4;
var attNode2 = 2;
var attLink1 = 5;
var attLink2 = 3;
var attNode1Num = [];
var attNode2Num = [];
var attLink1Num = [];
var attLink2Num = [];

function hexConstruct(x, y, num, rot) {
	push();
	translate(x + hexTranslate[0], y + hexTranslate[1]);
	scale(hexScale);

	stroke(color(hexFactionColor[0][hexFaction]));
	strokeWeight(3);
	noFill();
	hexagon(hexConstructPre[0], hexConstructPre[1], num * hexPressedNum ** 2, rot);

	pop();
}

function hexConstructDraw(x, y) {

	for (let i = 0; i < hexNode.length; i++) {
		if (attNode1 > 0 && dist(hexConstructPre[0], hexConstructPre[1], hexNode[i][2][0], hexNode[i][2][1]) < 64) {
			hexConstructNodePreLoad_1.push(hexNode[i][0]);
			attNode1Num.push(i);
			attNode1 -= 1;
		}
		if (attNode2 > 0 && dist(hexConstructPre[0], hexConstructPre[1], hexNode[i][2][0], hexNode[i][2][1]) < 32) {
			hexConstructNodePreLoad_2.push(hexNode[i][0]);
			attNode2Num.push(i);
			attNode2 -= 1;
		}
	}

	for (let i = 0; i < hexLink.length; i++) {
		if (attLink1 > 0 && dist(hexConstructPre[0], hexConstructPre[1], hexLink[i][2][0], hexLink[i][2][1]) < 56) {
			hexConstructLinkPreLoad_1.push(hexLink[i][0]);
			attLink1Num.push(i);
			attLink1 -= 1;
		}
		if (attLink2 > 0 && dist(hexConstructPre[0], hexConstructPre[1], hexLink[i][2][0], hexLink[i][2][1]) < 34) {
			hexConstructLinkPreLoad_2.push(hexLink[i][0]);
			attLink2Num.push(i);
			attLink2 -= 1;
		}
	}

	for (let i = 0; i < hexNode.length; i++) {
		if (dist(hexNode[i][2][0], hexNode[i][2][1], (mouseX - hexTranslate[0] - hexCenter[0]) / hexScale, (mouseY - hexTranslate[1] - hexCenter[1]) / hexScale) < 15 && hexSelectNode) {
			if (hexMode === 1 && hexSelectAssure && hexFaction !== 0 && hexClicked) {
				hexMode = 3;
				hexClicked = false;
			}
			if (hexMode === 3 && dist(hexConstructPre[0], hexConstructPre[1], (mouseX - hexTranslate[0] - hexCenter[0]) / hexScale, (mouseY - hexTranslate[1] - hexCenter[1]) / hexScale) < 15 && hexClicked) {
				for (j = 0; j < 3; j++) {
					const array1 = [0, 0, 0, 0]
					if (hexConstructNodePreLoad_1.every((v, i) => v === array1[i])) {
						if (hexConstructLinkPreLoad_2[j] === hexFaction || hexItem[hexFaction][0] || hexDebugValue) {
							if (hexNode[i][1] === 0 && hexItem[hexFaction][1] >= 2 && hexItem[hexFaction][2] >= 2) {
								hexNode[i][0] = hexFaction;
								hexNode[i][1]++;
								hexItem[hexFaction][1] -= 2;
								hexItem[hexFaction][2] -= 2;
								hexItem[hexFaction][0] = false;
								hexClicked = false;
								break;
							} else {
								//error msg
							}
						}
					}
					if (hexNode[i][1] < 2 && hexNode[i][0] === hexFaction) {
						if (hexItem[hexFaction][2] >= 2 && hexItem[hexFaction][3] >= 2 && hexItem[hexFaction][4] >= 3) {
							hexNode[i][1]++;
							hexItem[hexFaction][2] -= 2;
							hexItem[hexFaction][3] -= 2;
							hexItem[hexFaction][4] -= 3;
							hexClicked = false;
							break;
						} else {
							//error msg
						}
					}
				}
			}
		}
	}

	for (let i = 0; i < hexLink.length; i++) {
		if (dist(hexLink[i][2][0], hexLink[i][2][1], (mouseX - hexTranslate[0] - hexCenter[0]) / hexScale, (mouseY - hexTranslate[1] - hexCenter[1]) / hexScale) < 15 && hexSelectLink) {
			if (hexMode === 1 && hexSelectAssure && hexFaction !== 0 && hexClicked) {
				hexMode = 3;
				hexClicked = false;
			}
			if (hexMode === 3 && dist(hexConstructPre[0], hexConstructPre[1], (mouseX - hexTranslate[0] - hexCenter[0]) / hexScale, (mouseY - hexTranslate[1] - hexCenter[1]) / hexScale) < 15 && hexClicked) {
				for (j = 0; j < 5; j++) {
					if (hexLink[i][0] === 0 && (hexConstructLinkPreLoad_1[j] === hexFaction || hexConstructNodePreLoad_2[j] === hexFaction || hexItem[hexFaction][0] || hexDebugValue)) {
						if (hexItem[hexFaction][2] >= 1 && hexItem[hexFaction][3] >= 1) {
							hexLink[i][0] = hexFaction;
							hexItem[hexFaction][2] -= 1;
							hexItem[hexFaction][3] -= 1;
							hexItem[hexFaction][0] = false;
						} else {
							//error msg
						}
						hexClicked = false;
						break;
					}
				}
			}
		}
	}

	if (hexMode === 3) {
		if (hexFaction !== 0) {
			hexSelectBlock = false;
			hexSelectCursor = [
				[0, 0], 0, 0
			]
			if (hexConstructNum < 180) {
				hexConstructNum += 2;
			} else {
				hexConstructNum = 0;
			}
			if (hexConstructRot < 60) {
				hexConstructRot += 2;
			} else {
				hexConstructRot = 0;
			}
			hexConstruct(x, y, 2.5 + 0.4 * sin(hexConstructNum), hexConstructRot);
			if (dist(hexConstructPre[0], hexConstructPre[1], (mouseX - hexTranslate[0] - hexCenter[0]) / hexScale, (mouseY - hexTranslate[1] - hexCenter[1]) / hexScale) > 100) {
				hexMode = 1;
				hexSelectBlock = true;
			}
			if (hexClicked && dist(hexConstructPre[0], hexConstructPre[1], (mouseX - hexTranslate[0] - hexCenter[0]) / hexScale, (mouseY - hexTranslate[1] - hexCenter[1]) / hexScale) > 15) {
				hexConstructPre[0] = hexSelectPre[0][0];
				hexConstructPre[1] = hexSelectPre[0][1];
				hexConstructNodePreLoad_1 = [];
				hexConstructNodePreLoad_2 = [];
				hexConstructLinkPreLoad_1 = [];
				hexConstructLinkPreLoad_2 = [];
				attLink1 = 5;
				attLink2 = 3;
				attNode1 = 4;
				attNode2 = 2;
				attLink1Num = [];
				attLink2Num = [];
				attNode1Num = [];
				attNode2Num = [];
				hexClicked = false;
			}
		} else {
			hexMode = 1;
		}
		hexConstructTranslate[0] = -0.5 * hexScale * hexConstructPre[0];
		hexConstructTranslate[1] = -0.5 * hexScale * hexConstructPre[1];
		hexConstructScale = 0.64;
	} else {
		hexConstructPre[0] = hexSelectPre[0][0];
		hexConstructPre[1] = hexSelectPre[0][1];
		hexConstructNodePreLoad_1 = [];
		hexConstructNodePreLoad_2 = [];
		hexConstructLinkPreLoad_1 = [];
		hexConstructLinkPreLoad_2 = [];
		attLink1 = 5;
		attLink2 = 3;
		attNode1 = 4;
		attNode2 = 2;
		attLink1Num = [];
		attLink2Num = [];
		attNode1Num = [];
		attNode2Num = [];
		hexConstructTranslate = [0, 0];
		hexConstructScale = 0;
	}
}