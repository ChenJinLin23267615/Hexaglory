var hexDebugValue = false;
var hexDetectValue = false;
var hexDebugExtension = 0;

var hexModeTag = ['Preset Mode', 'Select Mode', 'Check Mode', 'Construct Mode', 'Destroy Mode', 'Dice Mode', 'Exchange Mode', 'Dice_7']

function hexDebug() {
	// print(hexMapRules());
	// print(hexLoadingLock);
	// print(hexSelectNum);
	// print(hexSelectPre[2]);
	// print(hexSelectCursor[2]);
	// print(hexSelectPre[2] - hexSelectCursor[2]);
	// print(hexSelectAssure);
	
	// print(hexDestroyLv);
	// print(hexTranslate[0],hexTranslate[1])
	// print(hexDestroyPre[0][0] + hexCenter[0], hexDestroyPre[0][1] + hexCenter[1], (mouseX - hexTranslate[0]) / hexScale, (mouseY - hexTranslate[1]) / hexScale);

	// print(hexSelectPre);
	// print(hexDestroyPre);
	// print(hexTranslate);

    // console.log(hexConstructPre);
    // print(hexExchangePre[1]);
    // print(hexExchangeLv);
    // print(hexExchangeUINum[1][0]);
    // print(hexExchangeItemBuffer);

    // print(hexFlourish);

    // print(hexExchangeSystemUINum[1][1] * cos(90 * 1 + 135 + hexExchangeSystemUINum[1][1]), hexExchangeSystemUINum[1][1] * sin(90 * 1 + 135 + hexExchangeSystemUINum[1][1]));
	// print(hexExchangeSystemUIPre[1]);
    // print(hexExchangeSystemUINum[1]);
    // print(hexExchangeSystemLvPre);
    // print(hexExchangeSystemLvNum);
    // print(hexExchangeSystem);
    // print(dist(mouseX, mouseY, hexExchangeSystemUINum[1][1] * cos(90 * 0 + 35 + hexExchangeSystemUINum[1][1]), hexExchangeSystemUINum[1][1] * sin(90 * 0 + 35 + hexExchangeSystemUINum[1][1]) / 2));
    // print(hexExchangeSystemUIPre[0]);
    // print(hexExchangeSystemUINum[0]);
    // print(hexExchangeSystemWeightP);
    // print(hexExchangeSystemWeightS);
    // print(hexExchangeSystemWeightMax);

    // fill(0, 0, 0, 230);
    // rect(0, 0, width, height);
    // hexLibra(hexCenter[0], hexCenter[1], 1, 100, 10, 0, 1);
    // hexBlossom(hexCenter[0], hexCenter[1], 1, 100, 10, 0, 1);
    
    // fill(255);
    // text(int(tableNum1), 320, 320);
    // text(int(tableRot), 320, 360);

    if (hexDebugValue) {
        noStroke();
        fill(0, 0, 0, 100);
        rect(0, 0, width, 50 + hexDebugExtension);
        rect(0, height - 50, width, 50);

        if (hexDetectValue) {
            hexDebugExtension = 20;
        } else {
            hexDebugExtension = 0;
        }
        
        hexDetectValue = false;

        fill(255);
        for (let i = 0; i < hexBlock.length; i++) {
            if (dist(hexBlock[i][2][0], hexBlock[i][2][1], (mouseX - hexTranslate[0] - hexCenter[0]) / hexScale, (mouseY - hexTranslate[1] - hexCenter[1]) / hexScale) < 35) {
                textAlign(CENTER);
                textSize(16);
                text('/Block' + i + '/' + hexBlock[i][0] + '_' + hexBlock[i][1] + '_' + int(hexBlock[i][2]) + '_' + hexBlock[i][3], width / 2, 60);
                hexDetectValue = true;
            }
        }
        for (let i = 0; i < hexNode.length; i++) {
            if (dist(hexNode[i][2][0], hexNode[i][2][1], (mouseX - hexTranslate[0] - hexCenter[0]) / hexScale, (mouseY - hexTranslate[1] - hexCenter[1]) / hexScale) < 15) {
                textAlign(CENTER);
                textSize(16);
                text('/Node' + i + '/' + hexNode[i][0] + '_' + hexNode[i][1] + '_' + int(hexNode[i][2]) + '_' + hexNode[i][3], width / 2, 60);
                hexDetectValue = true;
            }
        }
        for (let i = 0; i < hexLink.length; i++) {
            if (dist(hexLink[i][2][0], hexLink[i][2][1], (mouseX - hexTranslate[0] - hexCenter[0]) / hexScale, (mouseY - hexTranslate[1] - hexCenter[1]) / hexScale) < 15) {
                textAlign(CENTER);
                textSize(16);
                text('/Link' + i + '/' + hexLink[i][0] + '_' + int(hexLink[i][1]) + '_' + int(hexLink[i][2]) + '_' + hexLink[i][3], width / 2, 60);
                hexDetectValue = true;
            }
        }
        textAlign(CENTER);
        textSize(16);
        text('MAP LV ' + max(hexBlockCounter[0][0], hexBlockCounter[1][0]) + ',' + max(hexBlockCounter[0][1], hexBlockCounter[1][1]) + ',' + max(hexBlockCounter[0][2], hexBlockCounter[1][2]) + ',' + max(hexBlockCounter[0][3], hexBlockCounter[1][3]), width / 2, 20);
    
        textAlign(CENTER);
        textSize(16);
        text('TURN ' + hexTurn[0], width / 2, height - 30);
        text(hexTurnTag[constrain(hexTurn[1], 0, 4)], width / 2, height - 8);

		textAlign(CENTER);
		textSize(16);
		text('DEBUG' + hexModeDetector(hexMode), width / 2, 40);
	}

	// print(hexBlock[0]);
	// print("***********");
	// print(hexConstructLinkPreLoad_1);
	// print(hexConstructNodePreLoad_2);
	// print('Num1_' + attLink1Num[j]); //road1Num
	// print('t1' + (hexConstructLinkPreLoad_1[j] === hexFaction)); //road1
	// print('Num1.2_' + attLink1Num[2 + j]); //road1Num
	// print('t1.2' + (hexConstructLinkPreLoad_1[2 + j] === hexFaction)); //road2
	// print('Num2_' + attNode2Num[j]); //houseNum
	// print('t2' + (hexConstructNodePreLoad_2[j] === hexFaction)); //house
	// print('t3' + hexConstructFree);
}

function hexModeDetector(value) {
    if (value === 0) {
        return('');
    } else {
        return(': ' + hexModeTag[value]);
    }
}