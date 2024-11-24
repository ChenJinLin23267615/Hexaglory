var hexBlockNumPre = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12];
var hexBlockSortPre = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4];
var hexBlockPre = [];
var hexBlockCounter = [
	[0, 0, 0, 0],
	[0, 0, 0, 0]
];
var hexBlock = []; //0-Num; 1-Sort; 2-[x, y]; 3-Size; 4-Label
var hexNode = []; //0-Faction; 1-Lv; 2-[x, y]; 3-Size; 4-Label
var hexLink = []; //0-Faction; 1-Line; 2-[x, y]; 3-Size; 4-Label
var hexDock = []; //0-Rate; 1-Sort; 2-[x, y]; 3-Size; 4-Label
var hexBlockColor = ['#FFFFFF', '#A8F440', '#4DC440', '#B0ADAD', '#6F6F6F', '#FFDD69'];
var hexBlockTag = ['Default', 'Crop', 'Wood', 'Iron', 'Fuel', 'Desert'];

function hexPreset() {
	let hexBlockNum = shuffle(hexBlockNumPre);
	let hexBlockSort = shuffle(hexBlockSortPre);
	for (let i = 0; i < 18; i++) {
		hexBlockPre.push([
			hexBlockNum[i],
			hexBlockSort[i]
		]);
	}
	hexBlockPre.push(['DESERT', 5]);
	for (let i = 0; i < 54; i++) {
		hexNode.push([0, 0]);
	} //Node-Faction & Lv
	for (let i = 0; i < 72; i++) {
		hexLink.push([0]);
	} //Link-Faction
	hexDock.push([3,0]);
	hexDock.push([2,1]);
	hexDock.push([2,2]);
    hexDock.push([3,0]);
	hexDock.push([2,3]);
	hexDock.push([2,4]);

	
	hexBlock = shuffle(hexBlockPre); //Block shuffle

	hexBlock[0].push([0, 0]);
	for (let i = 0; i < 6; i++) {
		hexBlock[i + 1].push([60 * sqrt(3) * cos(60 * i + 30), 60 * sqrt(3) * sin(60 * i + 30)]);
		hexBlock[2 * i + 7].push([180 * cos(60 * i), 180 * sin(60 * i)]);
		hexBlock[2 * i + 8].push([120 * sqrt(3) * cos(60 * i + 30), 120 * sqrt(3) * sin(60 * i + 30)]);

		hexNode[i].push([60 * cos(60 * i), 60 * sin(60 * i)]);
		hexNode[3 * i + 6].push([dist(0, 0, 150, 30 * sqrt(3)) * cos(60 * i - acos(150 / dist(0, 0, 150, 30 * sqrt(3)))), dist(0, 0, 150, 30 * sqrt(3)) * sin(60 * i - acos(150 / dist(0, 0, 150, 30 * sqrt(3))))]);
		hexNode[3 * i + 7].push([120 * cos(60 * i), 120 * sin(60 * i)]);
		hexNode[3 * i + 8].push([dist(0, 0, 150, 30 * sqrt(3)) * cos(60 * i + acos(150 / dist(0, 0, 150, 30 * sqrt(3)))), dist(0, 0, 150, 30 * sqrt(3)) * sin(60 * i + acos(150 / dist(0, 0, 150, 30 * sqrt(3))))]);
		hexNode[5 * i + 24].push([dist(0, 0, 240, 60 * sqrt(3)) * cos(60 * i - acos(240 / dist(0, 0, 240, 60 * sqrt(3)))), dist(0, 0, 240, 60 * sqrt(3)) * sin(60 * i - acos(240 / dist(0, 0, 240, 60 * sqrt(3))))]);
		hexNode[5 * i + 25].push([dist(0, 0, 210, 30 * sqrt(3)) * cos(60 * i - acos(210 / dist(0, 0, 210, 30 * sqrt(3)))), dist(0, 0, 210, 30 * sqrt(3)) * sin(60 * i - acos(210 / dist(0, 0, 210, 30 * sqrt(3))))]);
		hexNode[5 * i + 26].push([240 * cos(60 * i), 240 * sin(60 * i)]);
		hexNode[5 * i + 27].push([dist(0, 0, 210, 30 * sqrt(3)) * cos(60 * i + acos(210 / dist(0, 0, 210, 30 * sqrt(3)))), dist(0, 0, 210, 30 * sqrt(3)) * sin(60 * i + acos(210 / dist(0, 0, 210, 30 * sqrt(3))))]);
		hexNode[5 * i + 28].push([dist(0, 0, 240, 60 * sqrt(3)) * cos(60 * i + acos(240 / dist(0, 0, 240, 60 * sqrt(3)))), dist(0, 0, 240, 60 * sqrt(3)) * sin(60 * i + acos(240 / dist(0, 0, 240, 60 * sqrt(3))))]);

		hexLink[i].push([
			[60 * cos(60 * i), 60 * sin(60 * i)],
			[60 * cos(60 * i + 60), 60 * sin(60 * i + 60)]
		], [30 * sqrt(3) * cos(60 * i + 30), 30 * sqrt(3) * sin(60 * i + 30)]);
		hexLink[i + 6].push([
			[60 * cos(60 * i), 60 * sin(60 * i)],
			[120 * cos(60 * i), 120 * sin(60 * i)]
		], [90 * cos(60 * i), 90 * sin(60 * i)]);
		hexLink[3 * i + 12].push([
			[dist(0, 0, 150, 30 * sqrt(3)) * cos(60 * i - acos(150 / dist(0, 0, 150, 30 * sqrt(3)))), dist(0, 0, 150, 30 * sqrt(3)) * sin(60 * i - acos(150 / dist(0, 0, 150, 30 * sqrt(3))))],
			[120 * cos(60 * i), 120 * sin(60 * i)]
		], [dist(0, 0, 135, 15 * sqrt(3)) * cos(60 * i - acos(135 / dist(0, 0, 135, 15 * sqrt(3)))), dist(0, 0, 135, 15 * sqrt(3)) * sin(60 * i - acos(135 / dist(0, 0, 135, 15 * sqrt(3))))]);
		hexLink[3 * i + 13].push([
			[120 * cos(60 * i), 120 * sin(60 * i)],
			[dist(0, 0, 150, 30 * sqrt(3)) * cos(60 * i + acos(150 / dist(0, 0, 150, 30 * sqrt(3)))), dist(0, 0, 150, 30 * sqrt(3)) * sin(60 * i + acos(150 / dist(0, 0, 150, 30 * sqrt(3))))]
		], [dist(0, 0, 135, 15 * sqrt(3)) * cos(60 * i + acos(135 / dist(0, 0, 135, 15 * sqrt(3)))), dist(0, 0, 135, 15 * sqrt(3)) * sin(60 * i + acos(135 / dist(0, 0, 135, 15 * sqrt(3))))]);
		hexLink[3 * i + 14].push([
			[dist(0, 0, 150, 30 * sqrt(3)) * cos(60 * i + acos(150 / dist(0, 0, 150, 30 * sqrt(3)))), dist(0, 0, 150, 30 * sqrt(3)) * sin(60 * i + acos(150 / dist(0, 0, 150, 30 * sqrt(3))))],
			[dist(0, 0, 120, 60 * sqrt(3)) * cos(60 * i + acos(120 / dist(0, 0, 120, 60 * sqrt(3)))), dist(0, 0, 120, 60 * sqrt(3)) * sin(60 * i + acos(120 / dist(0, 0, 120, 60 * sqrt(3))))]
		], [dist(0, 0, 135, 45 * sqrt(3)) * cos(60 * i + acos(135 / dist(0, 0, 135, 45 * sqrt(3)))), dist(0, 0, 135, 45 * sqrt(3)) * sin(60 * i + acos(135 / dist(0, 0, 135, 45 * sqrt(3))))]);
		hexLink[2 * i + 30].push([
			[dist(0, 0, 150, 30 * sqrt(3)) * cos(60 * i - acos(150 / dist(0, 0, 150, 30 * sqrt(3)))), dist(0, 0, 150, 30 * sqrt(3)) * sin(60 * i - acos(150 / dist(0, 0, 150, 30 * sqrt(3))))],
			[dist(0, 0, 210, 30 * sqrt(3)) * cos(60 * i - acos(210 / dist(0, 0, 210, 30 * sqrt(3)))), dist(0, 0, 210, 30 * sqrt(3)) * sin(60 * i - acos(210 / dist(0, 0, 210, 30 * sqrt(3))))]
		], [dist(0, 0, 180, 30 * sqrt(3)) * cos(60 * i - acos(180 / dist(0, 0, 180, 30 * sqrt(3)))), dist(0, 0, 180, 30 * sqrt(3)) * sin(60 * i - acos(180 / dist(0, 0, 180, 30 * sqrt(3))))]);
		hexLink[2 * i + 31].push([
			[dist(0, 0, 150, 30 * sqrt(3)) * cos(60 * i + acos(150 / dist(0, 0, 150, 30 * sqrt(3)))), dist(0, 0, 150, 30 * sqrt(3)) * sin(60 * i + acos(150 / dist(0, 0, 150, 30 * sqrt(3))))],
			[dist(0, 0, 210, 30 * sqrt(3)) * cos(60 * i + acos(210 / dist(0, 0, 210, 30 * sqrt(3)))), dist(0, 0, 210, 30 * sqrt(3)) * sin(60 * i + acos(210 / dist(0, 0, 210, 30 * sqrt(3))))]
		], [dist(0, 0, 180, 30 * sqrt(3)) * cos(60 * i + acos(180 / dist(0, 0, 180, 30 * sqrt(3)))), dist(0, 0, 180, 30 * sqrt(3)) * sin(60 * i + acos(180 / dist(0, 0, 180, 30 * sqrt(3))))]);
		hexLink[5 * i + 42].push([
			[dist(0, 0, 240, 60 * sqrt(3)) * cos(60 * i - acos(240 / dist(0, 0, 240, 60 * sqrt(3)))), dist(0, 0, 240, 60 * sqrt(3)) * sin(60 * i - acos(240 / dist(0, 0, 240, 60 * sqrt(3))))],
			[dist(0, 0, 210, 30 * sqrt(3)) * cos(60 * i - acos(210 / dist(0, 0, 210, 30 * sqrt(3)))), dist(0, 0, 210, 30 * sqrt(3)) * sin(60 * i - acos(210 / dist(0, 0, 210, 30 * sqrt(3))))]
		], [dist(0, 0, 225, 45 * sqrt(3)) * cos(60 * i - acos(225 / dist(0, 0, 225, 45 * sqrt(3)))), dist(0, 0, 225, 45 * sqrt(3)) * sin(60 * i - acos(225 / dist(0, 0, 225, 45 * sqrt(3))))]);
		hexLink[5 * i + 43].push([
			[dist(0, 0, 210, 30 * sqrt(3)) * cos(60 * i - acos(210 / dist(0, 0, 210, 30 * sqrt(3)))), dist(0, 0, 210, 30 * sqrt(3)) * sin(60 * i - acos(210 / dist(0, 0, 210, 30 * sqrt(3))))],
			[240 * cos(60 * i), 240 * sin(60 * i)]
		], [dist(0, 0, 225, 15 * sqrt(3)) * cos(60 * i - acos(225 / dist(0, 0, 225, 15 * sqrt(3)))), dist(0, 0, 225, 15 * sqrt(3)) * sin(60 * i - acos(225 / dist(0, 0, 225, 15 * sqrt(3))))]);
		hexLink[5 * i + 44].push([
			[240 * cos(60 * i), 240 * sin(60 * i)],
			[dist(0, 0, 210, 30 * sqrt(3)) * cos(60 * i + acos(210 / dist(0, 0, 210, 30 * sqrt(3)))), dist(0, 0, 210, 30 * sqrt(3)) * sin(60 * i + acos(210 / dist(0, 0, 210, 30 * sqrt(3))))]
		], [dist(0, 0, 225, 15 * sqrt(3)) * cos(60 * i + acos(225 / dist(0, 0, 225, 15 * sqrt(3)))), dist(0, 0, 225, 15 * sqrt(3)) * sin(60 * i + acos(225 / dist(0, 0, 225, 15 * sqrt(3))))]);
		hexLink[5 * i + 45].push([
			[dist(0, 0, 210, 30 * sqrt(3)) * cos(60 * i + acos(210 / dist(0, 0, 210, 30 * sqrt(3)))), dist(0, 0, 210, 30 * sqrt(3)) * sin(60 * i + acos(210 / dist(0, 0, 210, 30 * sqrt(3))))],
			[dist(0, 0, 240, 60 * sqrt(3)) * cos(60 * i + acos(240 / dist(0, 0, 240, 60 * sqrt(3)))), dist(0, 0, 240, 60 * sqrt(3)) * sin(60 * i + acos(240 / dist(0, 0, 240, 60 * sqrt(3))))]
		], [dist(0, 0, 225, 45 * sqrt(3)) * cos(60 * i + acos(225 / dist(0, 0, 225, 45 * sqrt(3)))), dist(0, 0, 225, 45 * sqrt(3)) * sin(60 * i + acos(225 / dist(0, 0, 225, 45 * sqrt(3))))]);
		hexLink[5 * i + 46].push([
			[dist(0, 0, 240, 60 * sqrt(3)) * cos(60 * i + acos(240 / dist(0, 0, 240, 60 * sqrt(3)))), dist(0, 0, 240, 60 * sqrt(3)) * sin(60 * i + acos(240 / dist(0, 0, 240, 60 * sqrt(3))))],
			[dist(0, 0, 210, 90 * sqrt(3)) * cos(60 * i + acos(210 / dist(0, 0, 210, 90 * sqrt(3)))), dist(0, 0, 210, 90 * sqrt(3)) * sin(60 * i + acos(210 / dist(0, 0, 210, 90 * sqrt(3))))]
		], [dist(0, 0, 225, 75 * sqrt(3)) * cos(60 * i + acos(225 / dist(0, 0, 225, 75 * sqrt(3)))), dist(0, 0, 225, 75 * sqrt(3)) * sin(60 * i + acos(225 / dist(0, 0, 225, 75 * sqrt(3))))]);

        hexDock[i].push([268 * cos(60 * i - 90), 268 * sin(60 * i - 90)]);
	} //Block & Node & Link & Dock-[x, y]

	for (let i = 0; i < 19; i++) {
		hexBlock[i].push(1);
		hexBlock[i].push(0);
	} //Block-Size & Label
	for (let i = 0; i < 54; i++) {
		hexNode[i].push(2);
		hexNode[i].push(0);
	} //Node-Size & Label
	for (let i = 0; i < 72; i++) {
		hexLink[i].push(3);
		hexLink[i].push(0);
	} //Link-Size & Label
    for (let i = 0; i < 6; i++) {
        hexDock[i].push(1);
        hexDock[i].push(0);
    } //Dock-Size & Label
}

function hexUpdate() {
	for (let n = 1; n < 5; n++) {
		for (let i = 0; i < 19; i++) {
			for (let j = i; j < 19; j++) {
				if (hexBlock[i][1] == n && hexBlock[j][1] == n && i != j) {
					if (dist(hexBlock[i][2][0], hexBlock[i][2][1], hexBlock[j][2][0], hexBlock[j][2][1]) < 104) {
						hexBlockCounter[0][n - 1] += 1;
						if (hexBlock[i][4] >= 1 || hexBlock[j][4] >= 1) {
							hexBlockCounter[0][n - 1] += 1;
						}
						hexBlock[i][4]++;
						hexBlock[j][4]++;
					}
				}
			}
		}

		for (let i = 0; i < 19; i++) {
			hexBlock[i][4] = 0;
		}

		for (let i = 18; i >= 0; i--) {
			for (let j = i; j >= 0; j--) {
				if (hexBlock[i][1] == n && hexBlock[j][1] == n && i != j) {
					if (dist(hexBlock[i][2][0], hexBlock[i][2][1], hexBlock[j][2][0], hexBlock[j][2][1]) < 104) {
						hexBlockCounter[1][n - 1] += 1;
						if (hexBlock[i][4] >= 1 || hexBlock[j][4] >= 1) {
							hexBlockCounter[1][n - 1] += 1;
						}
						hexBlock[i][4]++;
						hexBlock[j][4]++;
					}
				}
			}
		}
	}
}

function hexMap(x, y) {
	push();
	translate(x + hexTranslate[0], y + hexTranslate[1]);
	scale(hexScale);

	for (let i = 0; i < 19; i++) {
		noStroke();
		fill(color(hexBlockColor[hexBlock[i][1]]));
		hexagon(hexBlock[i][2][0], hexBlock[i][2][1], 9.5 * hexBlock[i][3], 0);
		fill(255);
		textAlign(CENTER);
		textSize(24);
		text(hexBlock[i][0], hexBlock[i][2][0], hexBlock[i][2][1] + 8)
	} //Constructure of hexBlock

    for (let i = 0; i < 6; i++) {
        push();
        rotate(60 * i - 90);

        hexDockM(269, 0, hexDock[i][3], hexDock[i][1]);

        pop();

        hexDockTXT(290 * cos(60 * i - 90), 290 * sin(60 * i - 90) + 5, 0, 15 * hexDock[i][3], '1 : ' + hexDock[i][0]);
    } //Constructure of hexDock

	for (let i = 0; i < 72; i++) {
		stroke(color(hexFactionColor[0][hexLink[i][0]]));
		strokeWeight(2 * hexLink[i][3]);
		line(hexLink[i][1][0][0], hexLink[i][1][0][1], hexLink[i][1][1][0], hexLink[i][1][1][1]);
	} //Constructure of hexLink

    for (let i = 0; i < 54; i++) {
		if (hexNode[i][1] >= 1) {
			hexBuilding(hexNode[i][2][0], hexNode[i][2][1], hexNode[i][3], hexFactionColor[0][hexNode[i][0]]);
			if (hexNode[i][1] >= 2) {
				stroke(color(hexFactionColor[0][hexNode[i][0]]));
				strokeWeight(2 * hexNode[i][3]);
				noFill();
				circle(hexNode[i][2][0], hexNode[i][2][1], 20 * hexNode[i][3]);
			}
		}
	} //Constructure of hexNode

	pop();
}