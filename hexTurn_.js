var hexTurnTag = ['DEFAULT', 'FACTION 1', 'FACTION 2', 'FACTION 3', 'FACTION 4', 'DEFAULT'];
var hexTurn = [0, 0]; //0-Turn; 1-Event
var hexTurnNum = 0;
var hexTurnMove = -8;
var hexTurnShow = true;

function hexTurnDraw() {
	for (let i = 0; i <= 4; i++) {
		if (hexTurn[1] === i + 1) {
			hexFactionNum[i] = 100;
		} else {
			hexFactionNum[i] = 0;
		}

		if (hexMode !== 6) {
			hexFactionMove[i] += (hexFactionNum[i] - hexFactionMove[i]) / 6;
		}
	}
	if (hexTurn[1] > 4) {
		hexTurn[0]++;
		hexTurn[1] = 0;
		hexTurnShow = true;
		hexTurnNum = 0;
		hexTurnMove = -8;
	}
	if (hexTurn[1] < 0) {
		hexTurn[0]--;
		hexTurn[1] = 4;
		hexTurnShow = true;
		hexTurnNum = 0;
		hexTurnMove = -8;
	}
	if (hexTurnShow) {
		hexTurnNum += 1;
	}
	if (hexTurnNum > 200) {
		hexTurnShow = false;
	}
	if (hexTurnMove ** 3 < 328 * (1 + int(hexTurnNum / 100) * width / 640) && hexTurnShow === true) {
		hexTurnMove += 0.1;
	}
}