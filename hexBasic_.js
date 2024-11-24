var hexTranslatePre = [0, 0];
var hexTranslate = [0, 0];
var hexScalePre = 1;
var hexScale = 1;

var hexScreen = [640, 640]; //Vital - 640, 640 / 1456, 720
var hexCenter = [320, 320]; //Original wtf can not be opti
var hexMode = 1; //0-Preset mode; 1-Select mode; 2-Check mode; 3-Construct mode; 4-Destroy mode; 5-Dice mode; 6-Exchange mode; 7-Dice_7;
var hexLoadingLV = 2; //Map loading balance (constrain MAP LV <>)
var hexLoadingRate = 5; //Map loading rate (<> / 60 framerate)
var hexLoadingNum = 0;
var hexLoadingLock = false;

function setup() {
	createCanvas(windowWidth - 10, windowHeight - 10);
	// createCanvas(hexScreen[0], hexScreen[1]);
	hexCenter[0] = width / 2;
	hexCenter[1] = height / 2;
	frameRate(60);
	angleMode(DEGREES);
	colorMode(RGB);
	hexPreset();
	hexUpdate();
}

function draw() {
	background(50);
	noStroke();
	fill(47);
	rect(0, 0, width, height);

	if (hexMapRules()) {
		hexBlockNumPre = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12];
		hexBlockSortPre = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4];
		hexBlockPre = [];
		hexBlockCounter = [
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		];
		hexBlock = [];
		hexNode = [];
		hexLink = [];
		hexPreset();
		hexUpdate();
		hexLoadingNum = 0;
	}

	if (hexLoadingNum < hexLoadingRate) {
		hexLoadingNum++;
	} else {
		hexLoadingLock = true;
	}

	hexTranslatePre[0] = ((mouseX - hexTranslate[0]) / hexScale - hexCenter[0]) / 32;
	hexTranslatePre[1] = ((mouseY - hexTranslate[1]) / hexScale - hexCenter[1]) / 32;

	hexTranslate[0] += (-hexTranslatePre[0] * (1 + 5 * (hexScale - 1)) + hexConstructTranslate[0] + hexDestroyTranslate[0] - hexTranslate[0]) / (16 / hexDestroyMoveV);
	hexTranslate[1] += (-hexTranslatePre[1] * (1 + 5 * (hexScale - 1)) + hexConstructTranslate[1] + hexDestroyTranslate[1] - hexTranslate[1]) / (16 / hexDestroyMoveV);
	hexScale += (hexScalePre + hexConstructScale + hexDestroyScale - hexScale) / (16 / hexDestroyMoveV);

	// push();
	// translate(hexTranslate[0], hexTranslate[1]);
	// scale(hexScale);

	hexMap(hexCenter[0], hexCenter[1]);

	hexSelectDraw(hexCenter[0], hexCenter[1]);
	hexConstructDraw(hexCenter[0], hexCenter[1]);
	hexDestroyDraw(hexCenter[0], hexCenter[1]);

	// pop();

	hexPressedDraw();

	spin_Jeb_();

	hexTurnDraw();
	hexTurnPad(width / 2 + hexTurnMove ** 3 * width / 640, height / 2, hexTurnMove ** 3 * 36 / 100 * max(width, height) / 640, 1 - abs(hexTurnMove ** 3) / 750 * max(width, height) / 640);
	
	hexExchangeDraw();
	hexExchangeBG();
	hexExchangeUI_1();
	hexFactionDraw();
	hex7Draw();
	hexFlourishDisplay(hexFaction);
	hexFactionUI();
	hexExchangeUI_2();
	hexDiceDraw();

	hexDebug();
	hexFlourishCalc();
	if (hexMode !== 6) {
		hexFlourishDisplayM(hexFaction);
	}

	hex7Table(hexCenter[0], hexCenter[1], 1.5, tableRot, tableRot2, tableNum1 * (10 - hex7TurntableNum) / 10, tableNum1 * (10 - hex7TurntableNum) / 10, tableRot_7, hex7TurntableNum, hex7TurntablePre);
	
	if (hexClicked) {
		hexClicked = false;
	}
}

function hexMapRules() {
	return (max(hexBlockCounter[0], hexBlockCounter[1]) > hexLoadingLV && frameCount % hexLoadingRate === 0 && !hexLoadingLock)
}

function windowResized() {
	resizeCanvas(windowWidth - 10, windowHeight - 10);
	hexCenter[0] = width / 2;
	hexCenter[1] = height / 2;
}