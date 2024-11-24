var hexDiceNum = [1, 2, 3, 4, 5, 6];
var hexDiceNum = [1, 2, 3, 4, 5, 6];
var hexDiceMode = 1;
var hexDiceInput = null;
var hexDiceBgNum = 0;
var hexDiceAssure = false;

function hexDice() {
	noStroke();
	fill(0, 0, 0, hexDiceBgNum);
	rect(0, 0, width, height);
	fill(255, 255, 255, 2.55 * hexDiceBgNum)
	textSize(32);
	textAlign(CENTER);
	text('The 2d6 result is...', width / 2, height / 2 - 20);
	if (hexDiceInput !== null) {
		text(hexDiceInput, width / 2, height / 2 + 20);
		textSize(15);
		text('Press Enter to ensure', width / 2, height / 2 + 40);
	}
}

function hexDiceDraw() {
	hexDice();
	
	if (hexMode === 5) {
		if (hexDiceBgNum < 100) {
			hexDiceBgNum += 5;
		}
		if (hexDiceAssure) {
			for (let i = 0; i < hexBlock.length; i++) {
				if (hexBlock[i][0] === hexDiceInput) {
					for (let j = 0; j < hexNode.length; j++) {
						if (dist(hexBlock[i][2][0], hexBlock[i][2][1], hexNode[j][2][0], hexNode[j][2][1]) < 64 && hexNode[j][0] !== 0) {
							
							switch(hexBlock[i][1]){
								case 1:
								case 2:
								case 3:
								case 4:
									hexItem[hexNode[j][0]][hexBlock[i][1]] += hexNode[j][1] * hexItemEffect[0][hexBlock[i][1] - 1] + hexItemEffect[1][hexBlock[i][1] - 1];
									break;
							}
						}
					}
				}
			}
			hexItemEffect = [[1, 1, 1, 1],[0, 0, 0, 0]];
			if (hexDiceInput === 7) {
				hexMode = 7;
			} else {
				hexMode = 1;
			}
			hexDiceInput = null;
			hexDiceAssure = false;
			
		}
	} else {
		if (hexDiceBgNum > 0) {
			hexDiceBgNum -= 5;
		}
	}
}