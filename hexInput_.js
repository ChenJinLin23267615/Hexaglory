var hexClicked = false;
var hexPressed = 1;
var hexPressedNum = 1;

function keyPressed() {

	if (hexLoadingLock) {
		
		if (hexMode === 7) {
			if (keyCode === 67) {
				if (tableNum1Pre === 0) {
					tableNum1Pre = 100;
					tableRot_7v = random(50, 100);
					table7Ori = random(0, 360);
				} else {
					tableNum1Pre = 0;
					tableRot_7 = 0;
				}
			}
		}

		if (keyCode === 70) {
			if (!hexDebugValue) {
				hexDebugValue = true;
			} else {
				hexDebugValue = false;
			}
		}

		if (hexMode !== 5 || hexDebugValue) {
			if (keyCode === 8) {
				hexMode = 1;
			}
		}

		if (hexMode === 1) {
			if (keyCode === 32) {
				hexTurn[1]++;
				if (hexTurn[0] > 0 && hexTurn[1] !== 5) {
					hexMode = 5;
				}
			}
			if (hexDebugValue) {
				if (keyCode === 188 && !(hexTurn[0] === 0 && hexTurn[1] === 0)) {
					hexTurn[1]--;
				}
				if (keyCode === 190) {
					hexTurn[1]++;
					if (hexTurn[0] > 0 && hexTurn[1] !== 5) {
						hexMode = 5;
					}
				}
			}
		}

		if (hexFaction !== 0) {
			if (keyCode === 68) {
				if (hexMode === 1) {
					if (hexDebugValue) {
						hexDestroyCursor[0][0] = (mouseX - hexTranslate[0]) / hexScale - hexCenter[0];
						hexDestroyCursor[0][1] = (mouseY - hexTranslate[1]) / hexScale - hexCenter[1];
						hexMode = 4;
					}
				} else if (hexMode === 4 && hexDestroyLv === 1) {
					hexMode = 1;
				}
			}
		}

		if (hexMode === 5 && hexDiceMode === 1) {
			if (keyCode === 50) {
				hexDiceInput = 2;
			}
			if (keyCode === 51) {
				hexDiceInput = 3;
			}
			if (keyCode === 52) {
				hexDiceInput = 4;
			}
			if (keyCode === 53) {
				hexDiceInput = 5;
			}
			if (keyCode === 54) {
				hexDiceInput = 6;
			}
			if (keyCode === 55) {
				hexDiceInput = 7;
			}
			if (keyCode === 56) {
				hexDiceInput = 8;
			}
			if (keyCode === 57) {
				hexDiceInput = 9;
			}
			if (keyCode === 48) {
				hexDiceInput = 10;
			}
			if (keyCode === 189) {
				hexDiceInput = 11;
			}
			if (keyCode === 187) {
				hexDiceInput = 12;
			}
			if (keyCode === 13 && hexDiceInput !== null) {
				hexDiceAssure = true;
			}
		}

		if (keyCode === 69) {
			if (hexMode === 1) {
				hexMode = 6;
			} else if (hexExchangeLv === 1) {
				hexMode = 1;
			}
		}

		if (keyCode === 13) {
			if (hexMode === 6 && hexExchangeLv === 3) {
				hexExchangeAssure = true;
			}
		}
	}
}

function mouseClicked() {
	if (hexLoadingLock) {
		hexClicked = true;
	}
}

function mouseWheel(event) {
    if (hexMode === 4) {
	    if (event.delta > 0 && hexDestroyLv === 3) {
	    	hexDestroyLv = 4;
            hexDestroyLv3ColorPre = 120;
	    }
        if (event.delta < 0 && hexDestroyLv === 4) {
		    hexDestroyLv = 3;
            hexDestroyLv3ColorPre = 0;
	    }
    }
}

function hexPressedDraw() {
	if (mouseIsPressed) {
		hexPressed = 0.8;
		if (hexMode === 1) {
			hexSelectNum = 180;
		}
	} else {
		hexPressed = 1;
	}
	hexPressedNum += (hexPressed - hexPressedNum) / 2;
}