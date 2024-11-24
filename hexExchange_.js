var hexExchangePre = [
    [1, 1, 1, 1], 
    [0, 0, 0, 0]
];
var hexExchangeMove = [
    [1, 1, 1, 1], 
    [0, 0, 0, 0]
];

var hexExchangeLv = 1;
var hexExchangeSection = [];
var hexExchangeFaction = [false, false, false, false];

var hexExchangeItem = [
    [0, 0, 0, 0], 
    [0, 0, 0, 0], 
    [0, 0, 0, 0], 
    [0, 0, 0, 0]
];
var hexExchangeItemBuffer = [0, 0, 0, 0];
var hexExchangeSystemItem = [0, 0, 0, 0];

var hexExchangeAssure = false;

var hexExchangeLoadingNum = 0;
var hexExchangeNum = 0;
var hexExchangeUIPre= [
    [
        [0, 0, 0, 0], 
        [0, 0, 0, 0], 
        [0, 0, 0, 0], 
        [0, 0, 0, 0]
    ], 
    [
        [0, 0, 0, 0], 
        0, 0, 0, 0
    ]
]; //[[scaleNum x 4] x 4], [rot, positionNum x 4]
var hexExchangeUINum= [
    [
        [0, 0, 0, 0], 
        [0, 0, 0, 0], 
        [0, 0, 0, 0], 
        [0, 0, 0, 0]
    ], 
    [
        [0, 0, 0, 0], 
        0, 0, 0, 0
    ]
]; //[[scaleNum x 4] x 4], [rot, positionNum x 4]

var hexExchangeSystemPre = [0, 0]; //full, hex
var hexExchangeSystemNum = [0, 0]; //full, hex
var hexExchangeSystemUIPre = [
    [1, 1, 1, 1], 
    [0, 0]
]; //[scaleNum x 4], [rot, positionNum]
var hexExchangeSystemUINum = [
    [1, 1, 1, 1], 
    [0, 0]
]; //[scaleNum x 4], [rot, positionNum]

var hexExchangeSystemLv = 0;
var hexExchangeSystemLvPre = [0, 0, 0, 0];
var hexExchangeSystemLvNum = [0, 0, 0, 0];

var hexExchangeSystemCorePre = 1;
var hexExchangeSystemCoreNum = 1; 

var hexExchangeSystem = false;
var hexExchangeSystemWeightP = 0;
var hexExchangeSystemWeightS = 0;
var hexExchangeSystemWeightMax = 12;

function hexExchangeBG() {
    noStroke();
    fill(0, 0, 0, hexExchangeLoadingNum);
    rect(0, 0, width, height);

    textAlign(CENTER);
    textSize(28 * (1 + hexExchangeSystemLvNum[1] / 400));
    textStyle(BOLDITALIC);
    fill(255, 255, 255, 2 * constrain(hexExchangeSystemLvNum[0] - 50, 0, 50) - hexExchangeSystemLvNum[1] * 4 / 5);
    text('HONEST TRANSACTION', (2 * hexExchangeSystemLvNum[0] - 100) / 100 * width * 3 / 11 + 5 + 5 * hexExchangeSystemLvNum[1] / 16, height / 2 + 10 - 20 * hexExchangeSystemLvNum[1] / 16); //诚信交易 //adjustable
    text('FAIR COMPETITION', width - (2 * hexExchangeSystemLvNum[0] - 100) / 100 * width / 4 + 5 - 5 * hexExchangeSystemLvNum[1] / 16, height / 2 + 10 + 20 * hexExchangeSystemLvNum[1] / 16); //公平竞技 //adjustable
    fill(255, 255, 255, hexExchangeSystemLvNum[1] / 5);
    text('||||||||||||||||||||||||||||||||||||||', -110 + 5 * hexExchangeSystemLvNum[1] / 2, height / 2 + 10 + 20 * hexExchangeSystemLvNum[1] / 16); //adjustable
    text('|||||||||||||||||||||||||||||', width + 138 - 5 * hexExchangeSystemLvNum[1] / 2, height / 2 + 10 - 20 * hexExchangeSystemLvNum[1] / 16); //adjustable
    textStyle(NORMAL);
}

function hexExchangeUI_1() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            push();

            // scale(max(width, height) / 640);
            // translate((width + (70 + hexExchangeUINum[1][i + 1]) * cos(90 * i - 45)) % width, (height + (10 + 0.8 * hexExchangeUINum[1][i + 1]) * sin(90 * i - 45)) % height);
            // rotate((sin(90 * i - 45) * sqrt(2) * 180 + sin(90 * i + 45) * sqrt(2) * (45 * sqrt(2) * sin(90 * i - 45) + 20 * sin(90 * i - 45) + sin(90 * i - 45) * sqrt(2) * constrain(100 - hexExchangeUINum[1][i + 1], 0, 100) + 7 / 20 * hexExchangeUINum[1][i + 1] * (j - 1.5))) % 180);
            noStroke();
            fill(color(hexBlockColor[j + 1]));
            // hexagon(1.6 * hexExchangeUINum[1][i + 1], 0, hexExchangeUINum[1][i + 1] / 32, hexExchangeUINum[1][0][j]);
            hexagon((width + (70 + hexExchangeUINum[1][i + 1]) * cos(90 * i - 45)) % width + 1.6 * hexExchangeUINum[1][i + 1] * cos((sin(90 * i - 45) * sqrt(2) * 180 + sin(90 * i + 45) * sqrt(2) * (45 * sqrt(2) * sin(90 * i - 45) + 20 * sin(90 * i - 45) + sin(90 * i - 45) * sqrt(2) * constrain(100 - hexExchangeUINum[1][i + 1], 0, 100) + 7 / 20 * hexExchangeUINum[1][i + 1] * (j - 1.5))) % 180), (height + (10 + 0.8 * hexExchangeUINum[1][i + 1]) * sin(90 * i - 45)) % height + 1.6 * hexExchangeUINum[1][i + 1] * sin((sin(90 * i - 45) * sqrt(2) * 180 + sin(90 * i + 45) * sqrt(2) * (45 * sqrt(2) * sin(90 * i - 45) + 20 * sin(90 * i - 45) + sin(90 * i - 45) * sqrt(2) * constrain(100 - hexExchangeUINum[1][i + 1], 0, 100) + 7 / 20 * hexExchangeUINum[1][i + 1] * (j - 1.5))) % 180), hexExchangeUINum[1][i + 1] / 32 * hexExchangeUINum[0][i][j], hexExchangeUINum[1][0][j]);
            textAlign(CENTER);
            fill(255, 255, 255, 2.55 * hexExchangeUINum[1][i + 1]);
            if (hexExchangeItem[i][j] === 0) {
                textSize(12 * hexExchangeUINum[1][i + 1] / 32 * hexExchangeUINum[0][i][j]);
                text("+", (width + (70 + hexExchangeUINum[1][i + 1]) * cos(90 * i - 45)) % width + 1.6 * hexExchangeUINum[1][i + 1] * cos((sin(90 * i - 45) * sqrt(2) * 180 + sin(90 * i + 45) * sqrt(2) * (45 * sqrt(2) * sin(90 * i - 45) + 20 * sin(90 * i - 45) + sin(90 * i - 45) * sqrt(2) * constrain(100 - hexExchangeUINum[1][i + 1], 0, 100) + 7 / 20 * hexExchangeUINum[1][i + 1] * (j - 1.5))) % 180), (height + (10 + 0.8 * hexExchangeUINum[1][i + 1]) * sin(90 * i - 45)) % height + 1.6 * hexExchangeUINum[1][i + 1] * sin((sin(90 * i - 45) * sqrt(2) * 180 + sin(90 * i + 45) * sqrt(2) * (45 * sqrt(2) * sin(90 * i - 45) + 20 * sin(90 * i - 45) + sin(90 * i - 45) * sqrt(2) * constrain(100 - hexExchangeUINum[1][i + 1], 0, 100) + 7 / 20 * hexExchangeUINum[1][i + 1] * (j - 1.5))) % 180) + 3 * hexExchangeUINum[1][i + 1] / 32 * hexExchangeUINum[0][i][j]);
            } else {
                textSize(8 * hexExchangeUINum[1][i + 1] / 32 * hexExchangeUINum[0][i][j]);
                text(hexExchangeItem[i][j], (width + (70 + hexExchangeUINum[1][i + 1]) * cos(90 * i - 45)) % width + 1.6 * hexExchangeUINum[1][i + 1] * cos((sin(90 * i - 45) * sqrt(2) * 180 + sin(90 * i + 45) * sqrt(2) * (45 * sqrt(2) * sin(90 * i - 45) + 20 * sin(90 * i - 45) + sin(90 * i - 45) * sqrt(2) * constrain(100 - hexExchangeUINum[1][i + 1], 0, 100) + 7 / 20 * hexExchangeUINum[1][i + 1] * (j - 1.5))) % 180), (height + (10 + 0.8 * hexExchangeUINum[1][i + 1]) * sin(90 * i - 45)) % height + 1.6 * hexExchangeUINum[1][i + 1] * sin((sin(90 * i - 45) * sqrt(2) * 180 + sin(90 * i + 45) * sqrt(2) * (45 * sqrt(2) * sin(90 * i - 45) + 20 * sin(90 * i - 45) + sin(90 * i - 45) * sqrt(2) * constrain(100 - hexExchangeUINum[1][i + 1], 0, 100) + 7 / 20 * hexExchangeUINum[1][i + 1] * (j - 1.5))) % 180) + 3 * hexExchangeUINum[1][i + 1] / 32 * hexExchangeUINum[0][i][j]);
            }
            pop();
        }
    }
}

        // (width - 5 * cos(90 * i + 135) * hexExchangeMove[0][i]) % width, (height - 5 * sin(90 * i + 135) * (1 + hexExchangeMove[0][i])) % height
		// (width - 5 * cos(90 * i + 135) * hexExchangeMove[0][i]) % width, (height - (55 + 3 / 4 * sqrt(3) * hexFactionMove[i]) * sin(90 * i + 135) * (1 + hexExchangeMove[0][i])) % height
		// (width - (200 + 1 / 8 * hexFactionMove[i] + hexExchangeMove[1][i]) * cos(90 * i + 135) * (1 + hexExchangeMove[0][i])) % width, (height - (55 + 3 / 4 * sqrt(3) * hexFactionMove[i]) * sin(90 * i + 135) * (1 + hexExchangeMove[0][i])) % height
		// (width - (200 + 9 / 8 * hexFactionMove[i] + hexExchangeMove[1][i]) * cos(90 * i + 135) * (1 + hexExchangeMove[0][i])) % width, (height - 5 * sin(90 * i + 135) * (1 + hexExchangeMove[0][i])) % height


function hexExchangeUI_2() {

    push();
    // scale(max(width, height) / 640);
    // translate(hexCenter[0] / max(width, height) * 640, hexCenter[1] / max(width, height) * 640);
    translate(hexCenter[0], hexCenter[1]);
    for (let i = 0; i < 4; i++) {
        noStroke();
        fill(color(hexBlockColor[i + 1]));
        hexagon(hexExchangeSystemUINum[1][1] * cos(90 * i + 35 + hexExchangeSystemUINum[1][1]), hexExchangeSystemUINum[1][1] * sin(90 * i + 35 + hexExchangeSystemUINum[1][1]) / 2, hexExchangeSystemUINum[1][1] / 32 * hexExchangeSystemUINum[0][i], hexExchangeSystemUINum[1][0]);
        textAlign(CENTER);
        fill(255, 255, 255, 2.55 * hexExchangeSystemUINum[1][1]);
        if (hexExchangeSystemItem[i] === 0) {
            textSize(12 * hexExchangeSystemUINum[1][1] / 32 * hexExchangeSystemUINum[0][i]);
            text("+", hexExchangeSystemUINum[1][1] * cos(90 * i + 35 + hexExchangeSystemUINum[1][1]), hexExchangeSystemUINum[1][1] * sin(90 * i + 35 + hexExchangeSystemUINum[1][1]) / 2 + 3 * hexExchangeSystemUINum[1][1] / 32 * hexExchangeSystemUINum[0][i])
        } else {
            textSize(8 * hexExchangeSystemUINum[1][1] / 32 * hexExchangeSystemUINum[0][i]);
            text(hexExchangeSystemItem[i], hexExchangeSystemUINum[1][1] * cos(90 * i + 35 + hexExchangeSystemUINum[1][1]), hexExchangeSystemUINum[1][1] * sin(90 * i + 35 + hexExchangeSystemUINum[1][1]) / 2 + 3 * hexExchangeSystemUINum[1][1] / 32 * hexExchangeSystemUINum[0][i])
        }
    }
    pop();

    //x, y, size, num, hexWNum, hexRotNum
    hexLibra(hexCenter[0], hexCenter[1], 0.75 + 0.1 * sin((1.2 * (1 + hexExchangeSystemLvPre[2] / 100)) * constrain(hexExchangeSystemLvNum[2] * max(width, height) / 640, 0, 50)), hexExchangeSystemLvNum[1] / 2 + hexExchangeSystemLvNum[2] / 4 + hexExchangeSystemLvNum[3] / 2 + 0.5 * hexExchangeSystemLvPre[0] / 100 * hexExchangeSystemLvPre[1] / 100 * (100 - hexExchangeSystemLvPre[2]) * sin(180 * constrain(hexExchangeSystemLvNum[2], 0, 1)), hexExchangeSystemLvNum[1] / 10 + hexExchangeSystemLvNum[3] * 2 / 5, 0, hexExchangeSystemCoreNum, hexExchangeSystemLvNum[2], hexExchangeSystemLvNum[3], hexExchangeSystemLvPre[2]);
}

function hexExchangeDraw() {
    for (let i = 0; i < 4; i++) {
        if (hexMode === 6) {
            if (dist(mouseX, mouseY, (width - 5 * cos(90 * i + 135) * hexExchangeMove[0][i]) % width, (height - 5 * sin(90 * i + 135) * hexExchangeMove[0][i]) % height) < 200) {
                hexExchangePre[0][i] = 1.2 * hexPressedNum;
                if (hexClicked) {
                    if (hexExchangeLv === 1) {
                        hexExchangePre[1][i] = 100;
                        hexExchangeFaction[i] = true;
                        hexExchangeSection.push(i + 1);
                        hexExchangeLv = 2;
                        hexClicked = false;
                    }
                    if (hexClicked) {
                        if (hexExchangeLv === 2) {
                            if (hexExchangeFaction[i]) {
                                hexExchangeSection.push(0);
                                hexExchangeSystemPre[0] = 100;
                            } else {
                                hexExchangeFaction[i] = true;
                                hexExchangeSection.push(i + 1);
                            }
                            hexExchangePre[1] = [0, 0, 0, 0];
                            hexExchangeLv = 3;
                            hexExchangeSystemLv = 2;
                            hexClicked = false;
                        }
                    }
                    if (hexExchangeLv === 3) {
                        if (!hexExchangeFaction[i]) {
                            hexExchangeFaction = [false, false, false, false]
                            hexExchangeSection = [];
                            hexExchangePre[1] = [0, 0, 0, 0];
                            hexExchangeFaction[i] = true;
                            hexExchangeSection.push(i + 1);
                            hexExchangePre[1][i] = 100;
                            hexExchangeLv = 2;
                            hexExchangeSystemLvPre[2] = 0;
                            hexExchangeSystemLvPre[3] = 0;
                            hexExchangeSystemLv = 1; 
                            hexClicked = false;
                        }
                    }
                }
                if (hexExchangeLv === 3 && hexExchangeFaction[i]) {
                    hexExchangeUIPre[1][i + 1] = 100;
                }
            } else {
                if (hexExchangeFaction[i]) {
                    if (dist(mouseX, mouseY, (width - 5 * cos(90 * i + 135) * hexExchangeMove[0][i]) % width, (height - 5 * sin(90 * i + 135) * hexExchangeMove[0][i]) % height) > 400) {
                        hexExchangePre[0][i] = 1;
                        hexExchangeUIPre[1][i + 1] = 0;
                    }
                } else {
                    hexExchangePre[0][i] = 1;
                    hexExchangeUIPre[1][i + 1] = 0;
                }
            }
            if (dist(mouseX, mouseY, 5, 5) >= 200 && dist(mouseX, mouseY, width - 5, 5) >= 200 && dist(mouseX, mouseY, 5, height - 5) >= 200 && dist(mouseX, mouseY, width - 5, height - 5) >= 200) {
                if (hexClicked) {
                    if (hexExchangeLv === 2) {
                        hexExchangePre = [
                            [1, 1, 1, 1], 
                            [0, 0, 0, 0]
                        ];
                        hexExchangeFaction = [false, false, false, false];
                        hexExchangeSection = [];
                        hexExchangeLv = 1;
                        hexExchangeSystemLvPre[2] = 0;
                        hexExchangeSystemLvPre[3] = 0;
                        hexExchangeSystemLv = 1; 
                        hexClicked = false;
                    }
                }
            }

            for (let j = 0; j < 4; j++) {
                if (dist(mouseX, mouseY, (width + (70 + hexExchangeUINum[1][i + 1]) * cos(90 * i - 45)) % width + 1.6 * hexExchangeUINum[1][i + 1] * cos((sin(90 * i - 45) * sqrt(2) * 180 + sin(90 * i + 45) * sqrt(2) * (45 * sqrt(2) * sin(90 * i - 45) + 20 * sin(90 * i - 45) + sin(90 * i - 45) * sqrt(2) * constrain(100 - hexExchangeUINum[1][i + 1], 0, 100) + 7 / 20 * hexExchangeUINum[1][i + 1] * (j - 1.5))) % 180), (height + (10 + 0.8 * hexExchangeUINum[1][i + 1]) * sin(90 * i - 45)) % height + 1.6 * hexExchangeUINum[1][i + 1] * sin((sin(90 * i - 45) * sqrt(2) * 180 + sin(90 * i + 45) * sqrt(2) * (45 * sqrt(2) * sin(90 * i - 45) + 20 * sin(90 * i - 45) + sin(90 * i - 45) * sqrt(2) * constrain(100 - hexExchangeUINum[1][i + 1], 0, 100) + 7 / 20 * hexExchangeUINum[1][i + 1] * (j - 1.5))) % 180)) < 40) {
                    hexExchangeUIPre[0][i][j] = 1.5 * hexPressedNum ** 2;
                    if (hexClicked && hexExchangeUINum[1][i + 1] > 95) {
                        if (hexExchangeItem[i][j] < hexItem[i + 1][j + 1]) {
                            hexExchangeItem[i][j]++;
                        }
                    }
                } else {
                    hexExchangeUIPre[0][i][j] = 1;
                }
            }
        
            if (hexExchangeLoadingNum < 210) {
            hexExchangeLoadingNum += 5;
            }

            if (hexExchangeSystemLv === 0) {
                hexExchangeSystemLv = 1;
                hexExchangeSystemLvPre[0] = 100;
            }
            if (hexExchangeSystemLv === 1 && hexExchangeSystemLvNum[0] > 98 || hexExchangeSystemLv > 1) {
                hexExchangeSystemLvPre[1] = 100;
            }
            if (hexExchangeSystemLv >= 2) {
                hexExchangeSystemLvPre[2] = 100;
            }
            if (hexExchangeSystemLv === 3) {
                hexExchangeSystemLvPre[3] = 100;
            }

            if (hexExchangeLv <= 2) {
                hexFactionMove[i] += -hexFactionMove[i] / 6;
                hexExchangeItem = [
                    [0, 0, 0, 0], 
                    [0, 0, 0, 0], 
                    [0, 0, 0, 0], 
                    [0, 0, 0, 0]
                ];
                hexExchangeItemBuffer = [0, 0, 0, 0];
                if (hexExchangeFaction[i]) {
                    hexExchangeMove[1][i] += (hexExchangePre[1][i] - hexExchangeMove[1][i]) / 5;
                } else {
                    hexExchangeMove[1][i] += (16 * sin(hexExchangeNum) - hexExchangeMove[1][i]) / 5;
                }
                hexExchangeSystemItem = [0, 0, 0, 0];
                hexExchangeSystemPre = [0, 0];
                hexExchangeSystemUIPre = [
                    [1, 1, 1, 1], 
                    [0, 0]
                ];
                hexExchangeSystemCorePre = 1;

                hexExchangeSystem = false;

                hexExchangeSystemWeightP = 0;
                hexExchangeSystemWeightS = 0;
            } else {
                if (hexExchangeFaction[i]) {
                    hexFactionMove[i] += (100 - hexFactionMove[i]) / 6;
                    hexExchangeMove[0][i] += (hexExchangePre[0][i] - hexExchangeMove[0][i]) / 5;
                    hexExchangeMove[1][i] += (hexExchangePre[1][i] - hexExchangeMove[1][i]) / 5;
                } else {
                    hexExchangeMove[0][i] += -hexExchangeMove[0][i] / 5;
                    hexFactionMove[i] += -hexFactionMove[i] / 6;
                }

                if (hexExchangeSection[0] === 0 || hexExchangeSection[1] === 0) {
                    if (dist(mouseX, mouseY, hexCenter[0], hexCenter[1]) < 40) {
                        hexExchangeSystemUIPre[1][1] = 100;
                        hexExchangeSystem = true;
                    } else if (dist(mouseX, mouseY, hexCenter[0], hexCenter[1]) > 200) {
                        hexExchangeSystemUIPre[1][1] = 0;
                        hexExchangeSystem = false;
                    }
                    if (hexExchangeSystem) {
                        if (dist(mouseX, mouseY, hexExchangeSystemUINum[1][1] * cos(90 * i + 35 + hexExchangeSystemUINum[1][1]) + hexCenter[0], hexExchangeSystemUINum[1][1] * sin(90 * i + 35 + hexExchangeSystemUINum[1][1]) / 2 + hexCenter[1]) < 40) {
                            hexExchangeSystemUIPre[0][i] = 1.5 * hexPressed ** 2;
                            if (hexClicked && hexExchangeSystemUINum[1][1] > 95) {
                                hexExchangeItem[hexExchangeSection[0] - 1].forEach(element => {hexExchangeSystemWeightP += element * 3});
                                hexExchangeSystemItem.forEach(element => {hexExchangeSystemWeightS += element});
                                if (hexExchangeSystemWeightP >= (1 + hexExchangeSystemWeightS) * hexExchangeSystemWeightMax || hexDebugValue) {
                                    hexExchangeSystemItem[i]++;
                                }
                                hexExchangeSystemWeightP = 0;
                                hexExchangeSystemWeightS = 0;
                            }
                        } else {
                            hexExchangeSystemUIPre[0][i] = 1;
                        }
                    }
                    hexExchangeSystemLv = 3;
                }

                if (hexExchangeAssure) {
                    print(1)
                    // if (hexExchangeItemBuffer.forEach((element) => {element === 0 ? true : false})) {
                    if (hexExchangeItemBuffer[0] !== 0 || hexExchangeItemBuffer[1] !== 0 || hexExchangeItemBuffer[2] !== 0 || hexExchangeItemBuffer[3] !== 0) { //////////////buffer_empty_check//////////////
                        print(2)
                        if (hexExchangeSection[0] !== 0 && hexExchangeSection[1] !== 0) {
                            for (let j = 0; j < 4; j++) {
                                hexItem[hexExchangeSection[1]][j + 1] -= hexExchangeItemBuffer[j];
                                hexItem[hexExchangeSection[0]][j + 1] += hexExchangeItemBuffer[j];
                            }
                        } else {
                            for (let j = 0; j < 4; j++) {
                                hexItem[hexExchangeSection[0]][j + 1] += hexExchangeItemBuffer[j];
                            }
                            hexExchangeSystemItem = [0, 0, 0, 0];
                        }
                        hexExchangeItem = [                            
                            [0, 0, 0, 0], 
                            [0, 0, 0, 0], 
                            [0, 0, 0, 0], 
                            [0, 0, 0, 0]
                        ];
                        hexExchangeItemBuffer = [0, 0, 0, 0];
                        hexExchangeSystemWeightP = 0;
                        hexExchangeSystemWeightS = 0;
                    }
                    hexExchangeAssure = false;
                }
                if (dist(mouseX, mouseY, hexCenter[0], hexCenter[1]) < 30) {
                    hexExchangeSystemCorePre = 1.1 * hexPressed;
                    if (hexClicked) {
                        hexExchangeAssure = true;
                    }
                } else {
                    hexExchangeSystemCorePre = 1;
                }
            }
        } else {
            if (hexExchangeLoadingNum > 0) {
                hexExchangeLoadingNum -= 5;
            }
            hexExchangeNum = 0;
            hexExchangePre = [
                [1, 1, 1, 1], 
                [0, 0, 0, 0]
            ];
            hexExchangeSection = [];
            hexExchangeFaction = [false, false, false, false];
            hexExchangeItem = [
                [0, 0, 0, 0], 
                [0, 0, 0, 0], 
                [0, 0, 0, 0], 
                [0, 0, 0, 0]
            ];
            hexExchangeItemBuffer = [0, 0, 0, 0];
            hexExchangeUIPre= [
                [
                    [0, 0, 0, 0], 
                    [0, 0, 0, 0], 
                    [0, 0, 0, 0], 
                    [0, 0, 0, 0]
                ], 
                [
                    [0, 0, 0, 0], 
                    0, 0, 0, 0
                ]
            ];
            hexExchangeLv = 1;

            hexExchangeSystemPre = [0, 0];
            hexExchangeSystemUIPre = [
                [1, 1, 1, 1], 
                [0, 0]
            ];
            hexExchangeSystemLv = 0;
            hexExchangeSystemLvPre = [0, 0, 0, 0];
            hexExchangeSystemCorePre = 1;

            hexExchangeSystem = false;

            hexExchangeSystemWeightP = 0;
            hexExchangeSystemWeightS = 0;
        }
        for (let j = 0; j < 4; j++) {
            hexExchangeUINum[0][i][j] += (hexExchangeUIPre[0][i][j] - hexExchangeUINum[0][i][j]) / 5;
        }
        if (hexExchangeUINum[1][0][i] > 180) {
            hexExchangeUINum[1][0][i] = 0;
        }
        hexExchangeUINum[1][0][i] += 4 * (1 - abs(sin(hexExchangeUIPre[1][0][i] - 90 - 20 * i)));
        hexExchangeUINum[1][i + 1] += (hexExchangeUIPre[1][i + 1] - hexExchangeUINum[1][i + 1]) / 10;
        hexExchangeMove[0][i] += (hexExchangePre[0][i] - hexExchangeMove[0][i]) / 5;
        hexExchangeMove[1][i] += (hexExchangePre[1][i] - hexExchangeMove[1][i]) / 5;
        if (hexExchangeLv === 3) {
            if (hexExchangeSection[0] !== 0 && hexExchangeSection[1] !== 0) {
                hexExchangeItemBuffer[i] = hexExchangeItem[hexExchangeSection[1] - 1][i] - hexExchangeItem[hexExchangeSection[0] - 1][i];
            } else {
                hexExchangeItemBuffer[i] = hexExchangeSystemItem[i] - hexExchangeItem[hexExchangeSection[0] - 1][i];
            }
        }
        hexExchangeSystemUINum[0][i] += (hexExchangeSystemUIPre[0][i] - hexExchangeSystemUINum[0][i]) / 5;
        hexExchangeSystemLvNum[i] += (hexExchangeSystemLvPre[i] - hexExchangeSystemLvNum[i]) / 16;
    }
    if (hexExchangeSystemUINum[1][0] > 180) {
        hexExchangeSystemUINum[1][0] = 0;
    }
    if (hexExchangeSystemLv === 0) {
        hexExchangeSystemLvNum[1] += (hexExchangeSystemLvPre[1] - hexExchangeSystemLvNum[1]) / 4;
    }
    hexExchangeSystemUINum[1][1] += (hexExchangeSystemUIPre[1][1] - hexExchangeSystemUINum[1][1]) / 10;
    hexExchangeSystemNum[0] += (hexExchangeSystemPre[0] - hexExchangeSystemNum[0]) / 10;
    hexExchangeSystemCoreNum += (hexExchangeSystemCorePre - hexExchangeSystemCoreNum) / 5;
    if (hexMode === 6) {
        if (hexExchangeLv <= 2) {
            if (hexExchangeNum < 180) {
                hexExchangeNum += 3;
            } else {
                hexExchangeNum = 0;
            }
        } else {
            hexExchangeNum = 0;
            for (let j = 0; j < 4; j++) {
                if (hexExchangeUIPre[1][0][j] < 180) {
                    hexExchangeUIPre[1][0][j] += 2;
                } else {
                    hexExchangeUIPre[1][0][j] = 0;
                }
            }
        }
    }
}