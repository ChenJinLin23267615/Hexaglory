var hexSelectBlock = true;
var hexSelectNode = true;
var hexSelectLink = true;
var hexSelectPre = [
	[0, 0], 0, 0
]; //0-[x, y]; 1-Size; 2-Transparency
var hexSelectCursor = [
	[0, 0], 0, 0
]; //0-[x, y]; 1-Size; 2-Transparency
var hexSelectNum = 180;
var hexSelectAssure = false;

function hexSelect(x, y) {
	push();
	translate(x + hexTranslate[0], y + hexTranslate[1]);
	scale(hexScale);

	stroke(255 * hexPressedNum, 255 * hexPressedNum, 255 * hexPressedNum, hexSelectCursor[2]);
	strokeWeight(3);
	noFill();
	circle(hexSelectCursor[0][0], hexSelectCursor[0][1], 2 * hexSelectCursor[1]);

	pop();
}

function hexSelectDraw(x, y) {
	for (let i = 0; i < hexBlock.length; i++) {
		if (dist(hexBlock[i][2][0], hexBlock[i][2][1], (mouseX - hexTranslate[0] - hexCenter[0]) / hexScale, (mouseY - hexTranslate[1] - hexCenter[1]) / hexScale) < 35 && hexSelectBlock) {
			hexSelectPre[0][0] = hexBlock[i][2][0];
			hexSelectPre[0][1] = hexBlock[i][2][1];
			hexSelectPre[1] = 35;
			if (hexSelectNum > 170) {
				hexSelectPre[2] = 225;
			}
		}
	}

	for (let i = 0; i < hexNode.length; i++) {
		if (dist(hexNode[i][2][0], hexNode[i][2][1], (mouseX - hexTranslate[0] - hexCenter[0]) / hexScale, (mouseY - hexTranslate[1] - hexCenter[1]) / hexScale) < 15 && hexSelectNode) {
			hexSelectPre[0][0] = hexNode[i][2][0];
			hexSelectPre[0][1] = hexNode[i][2][1];
			hexSelectPre[1] = 15;
			if (hexSelectNum > 170) {
				hexSelectPre[2] = 225;
			}
		}
	}

	for (let i = 0; i < hexLink.length; i++) {
		if (dist(hexLink[i][2][0], hexLink[i][2][1], (mouseX - hexTranslate[0] - hexCenter[0]) / hexScale, (mouseY - hexTranslate[1] - hexCenter[1]) / hexScale) < 15 && hexSelectLink) {
			hexSelectPre[0][0] = hexLink[i][2][0];
			hexSelectPre[0][1] = hexLink[i][2][1];
			hexSelectPre[1] = 15;
			if (hexSelectNum > 170) {
				hexSelectPre[2] = 225;
			}
		}
	}

	if (hexMode === 1) {
		hexSelectCursor[0][0] += (hexSelectPre[0][0] - hexSelectCursor[0][0]) / 6.4;
		hexSelectCursor[0][1] += (hexSelectPre[0][1] - hexSelectCursor[0][1]) / 6.4;
		hexSelectCursor[1] += (hexSelectPre[1] - hexSelectCursor[1]) / 6.4;
		hexSelectCursor[2] += (hexSelectPre[2] - hexSelectCursor[2]) / 6.4;
		hexSelect(x, y);
	}

	if (dist(hexSelectCursor[0][0], hexSelectCursor[0][1], hexSelectPre[0][0], hexSelectPre[0][1]) > hexSelectPre[1]) {
		hexSelectNum = 180;
		hexSelectAssure = true;
	}
	
	if (hexSelectNum > 0) {
		hexSelectNum--;
	} else {
		hexSelectPre[2] = 0;
		hexSelectAssure = false;
	}
	
	if (!hexSelectAssure && hexClicked) {
		hexSelectNum = 180;
		hexSelectAssure = true;
		hexClicked = false;
	}
}