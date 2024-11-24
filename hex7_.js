var hex7Value = false;
var hex7EventMax = 10;
var hex7EventTag = ['0', 'Harvest', 'Allocation', 'Famine', 'Regulation', 'Repression', 'Conscription', '...REDICE!', 'Taxation', 'Blowssom', 'Urbanization'];
var hex7TurntablePre = 10;
var hex7TurntableNum = 10;
var hex7RotPre = 0;

var tableNum1 = 0;
var tableNum1Pre = 0;
var tableRot = 0;
var tableRot2 = 0;
var tableRot_7 = 0;
var tableRot_7v = 0;
var table7Ori = 0;

var hexItemEffect = [[1, 1, 1, 1], [0, 0, 0, 0]]; 
//0:multiplyer 1:adder

var hex7RotNum = 0;

function hex7Table(x, y, size, rot, rot2, circleNum, scaleNum, rot_2, totalNum, totalPre) {


	fill(0, 0, 0, 200 * (1 - totalNum / 10));
	rect(0, 0, width, height)

	push();
	translate(x, y);
	scale(size * (1 + totalNum / 2 / (1 + totalPre / 5)) * (1 + circleNum / 500));

	push();
	rotate((1 - 0.5 * tableNum1Pre / 100) * rot);
	
	noFill();
    // strokeWeight((12 - 11 * circleNum / 100 ) / (1 + totalNum * 11 / 10));
    // for (i = 0; i < 100; i++) {
	// 	colorMode(HSB);
	// 	stroke(Jeb_Color, 100 - constrain(2 * totalNum, 0, 10) * totalPre, 100, 0.2 * sin(1.8 * i) * (120 - circleNum) / 120 * (10 - totalNum) / 10 * (0.5 + 0.5 * cos(18 * totalNum ** 2)))
	// 	colorMode(RGB);
	// 	circle(0, 0, 240 + circleNum + i * circleNum / 100 + 20 * sin(5 * rot) * circleNum / 100);
	// } //Hight quality

    // strokeWeight((12 - 2 * circleNum / 100 ) / (1 + totalNum * 11 / 10));
	// for (i = 0; i < 6; i++) {
	// 	colorMode(HSB);
	// 	stroke(Jeb_Color, 100 - constrain(2 * totalNum, 0, 10) * totalPre, 100, 0.2 * sin(30 * i) * (120 - circleNum) / 120 * (10 - totalNum) / 10 * (0.5 + 0.5 * cos(18 * totalNum ** 2)))
	// 	colorMode(RGB);
	// 	circle(0, 0, 240 + circleNum + i * circleNum / 5 + 20 * sin(5 * rot) * circleNum / 100);
	// } //Low quality

    strokeWeight((12 + 13 * circleNum / 100 ) / (1 + totalNum * 11 / 10) - 5 * sin(5 * rot) * circleNum / 100);
	colorMode(HSB);
	stroke(Jeb_Color, 100 - constrain(2 * totalNum, 0, 10) * totalPre, 100, 0.5 * (120 - circleNum) / 120 * (10 - totalNum) / 10 * (0.5 + 0.5 * cos(18 * totalNum ** 2)))
	colorMode(RGB);
	circle(0, 0, 240 + circleNum + (5 + 24 * sin(5 * rot)) * circleNum / 100);
	//No lerp

	// stroke(255, 255, 255, (70 + 50 * sin(1.8 * circleNum + 5 * rot * circleNum / 100)) * max(constrain(min(18000 - rot, rot) / 1000, 0, 1), circleNum / 100));
	// colorMode(HSB);
	// stroke(Jeb_Color, (100 - sqrt(sqrt(circleNum)) * 10 * sqrt(10)), 100,  (80 + 40 * sin(1.8 * circleNum + 5 * rot * circleNum / 100)) * max(constrain(min(18000 - rot, rot) / 1000, 0, 1), circleNum / 100) / (80 + 1.8 * circleNum))
	// colorMode(RGB);
	// strokeWeight(14 - 11 * (sqrt(sqrt(circleNum)) * 10 * sqrt(10)) / 100);
	// beginShape();
	// for (i = 0; i < 9; i++) {
	// 	curveVertex((120 + 4.8 * circleNum) * sin((2 * i + 1) / 7 * 360 + 180), (120 + 4.8 * circleNum) * cos((2 * i + 1) / 7 * 360 + 180));
	// 	curveVertex((120 - 3.2 * circleNum) * sin(2 * (i + 1) / 7 * 360 + 180), (120 - 3.2 * circleNum) * cos(2 * (i + 1) / 7 * 360 + 180));
	// }
	// endShape(); //Legacy outer

	for (j = 0; j < 5; j++) {
		colorMode(HSB);
		stroke(Jeb_Color, constrain((100 - sqrt(sqrt(circleNum)) * 10 * sqrt(10)) - constrain(2 * totalNum, 0, 10) * totalPre, 0, 100), 100, (100 - circleNum / 2 + 20 * sin(5 * rot * circleNum / 100)) * max(constrain(min(18000 - rot, rot) / 1000, 0, 1), circleNum / 100) / (180 + 0.8 * circleNum) * 0.5 * sin(36 * j) * (100 - totalNum ** 2) / 100 * (0.5 + 0.5 * cos(18 * totalNum ** 2)))
		colorMode(RGB);
		strokeWeight((13 - 11 * (sqrt(sqrt(circleNum)) * 10 * sqrt(10)) / 100) * (1 - totalNum * 9 / 10));
		beginShape();
		for (i = 0; i < 9; i++) {
			curveVertex((120 + (4.8 + max(width, height) / 640 / 2.4 + max(width, height) / 640 / 3.2 * j) * circleNum) * sin((2 * i + 1) / 7 * 360 + 180), (120 + (4.8 + max(width, height) / 640 / 2.4 + max(width, height) / 640 / 3.2 * j) * circleNum) * cos((2 * i + 1) / 7 * 360 + 180));
			curveVertex((120 - (3.2 + max(width, height) / 640 / 2.4 + max(width, height) / 640 / 3.2 * j) * circleNum) * sin(2 * (i + 1) / 7 * 360 + 180), (120 - (3.2 + max(width, height) / 640 / 2.4 + max(width, height) / 640 / 3.2 * j) * circleNum) * cos(2 * (i + 1) / 7 * 360 + 180));
		}
		endShape();
	}

	pop();

	push();
	rotate(-rot2);

	noFill();
	colorMode(HSB);
	stroke(Jeb_Color, (100 - sqrt(sqrt(circleNum)) * 10 * sqrt(10)), 100,  (50 + 20 * sin(1.8 * circleNum + 5 * rot * circleNum / 100)) * max(constrain(min(18000 - rot, rot) / 1000, 0, 1), circleNum / 100) / (80 + 1.8 * circleNum) * circleNum / 100 * (10 - totalNum) / 10 * (0.5 + 0.5 * cos(18 * totalNum ** 2)))
	colorMode(RGB);
	strokeWeight(14 - 11 * (sqrt(sqrt(circleNum)) * 10 * sqrt(10)) / 100);
	beginShape();
	for (i = 0; i < 7; i++) {
		curveVertex((120 - 2.6 * circleNum) * sin((3 * i) / 5 * 360 + 180), (120 - 2.6 * circleNum) * cos((3 * i) / 5 * 360 + 180));
		curveVertex((120 + 0.52 * circleNum) * sin((3 * i + 1) / 5 * 360 + 180), (120 + 0.52 * circleNum) * cos((3 * i + 1) / 5 * 360 + 180));
		curveVertex((120 + 0.52 * circleNum) * sin((3 * i + 2) / 5 * 360 + 180), (120 + 0.52 * circleNum) * cos((3 * i + 2) / 5 * 360 + 180));
	}
	endShape();

	pop();
	
	pop();

    // fill(0 ,0 ,0, 200);
    // rect(0, 0, width, height);

    push();
    translate(x, y);
    scale((0.9 + scaleNum / 500) * (1 + totalNum / 2 / (1 + totalPre / 5)) * (1 + circleNum / 500));

    push();
    rotate(table7Ori + rot_2);

    for (let i = 0; i < hex7EventTag.length - 1; i++) {
        stroke(200, 200, 200, 200 * scaleNum / 100 * (10 - totalNum) / 10 * (0.5 + 0.5 * cos(18 * totalNum ** 2)));
        strokeWeight(5 * scaleNum / 100);
        noFill();
        // colorMode(HSB);
        // stroke(Jeb_Color, 100, 100, 0.8);
        // fill(i * 1080 / hex7EventMax % 360, 40 + 15 * sin(Jeb_Color + i * 1080 / hex7EventMax % 360), 60, 0.8 * scaleNum / 100);
        // colorMode(RGB); //Legacy pad
        arc(0, 0, 380, 380, i * 360 / hex7EventMax, (i + 1) * 360 / hex7EventMax);
        for (j = 1; j < 150; j++) {
            noFill();
            strokeWeight(1);
            colorMode(HSB);
            stroke(i * 1080 / hex7EventMax % 360, 50 + 25 * sin(Jeb_Color + i * 1080 / hex7EventMax % 360), 75, (0.8 - 0.006 * j) * scaleNum / 100 * tableNum1 / 100 * (10 - totalNum) / 10 * (0.5 + 0.5 * cos(18 * totalNum ** 2)));
            colorMode(RGB);
            arc(0, 0, 380 - j * tableNum1 / 100, 380 - j * tableNum1 / 100, i * 360 / hex7EventMax, (i + 1) * 360 / hex7EventMax);
        }
    }

    for (let i = 0; i < hex7EventTag.length - 1; i++) {
        push();
        rotate(-i * 360 / hex7EventMax);
        fill(255, 255, 255, 200 * scaleNum / 100 * tableNum1 / 100 * (10 - totalNum) / 10 * (0.5 + 0.5 * cos(18 * totalNum ** 2)));
        textSize(24);
        text(i + 1, 0, 170);
        pop();
    }

    noFill();
    strokeWeight(5 * scaleNum / 100);
    stroke(200, 200, 200, 200 * scaleNum / 100 * (10 - totalNum) / 10 * (0.5 + 0.5 * cos(18 * totalNum ** 2)));
    circle(0, 0, 380 * scaleNum / 100);
    colorMode(HSB);
    stroke(Jeb_Color, 40, 100, 0.4 * (10 - totalNum) / 10 * (0.5 + 0.5 * cos(18 * totalNum ** 2)));
    colorMode(RGB);
    circle(0, 0, 1000 - 600 * scaleNum / 100);
    circle(0, 0, 640 - 240 * scaleNum / 100);
    stroke(200, 200, 200, (60 * scaleNum / 100 + 40 * sin(5 * tableRot)) * (10 - totalNum) / 10 * (0.5 + 0.5 * cos(18 * totalNum ** 2)));
    circle(0, 0, 1000 - 516 * scaleNum / 100);
    // for (i = 0; i < 100; i++) {
    //     stroke(200, 200, 200, 15 * scaleNum / 100 + 5 * sin(5 * tableRot) * sin(1.8 * i));
    //     stroke(200, 200, 200, (60 * scaleNum / 100 + 40 * sin(5 * tableRot)) * 0.5 * sin(0.9 * i));
    //     circle(0, 0, 1020 - (516 + i) * scaleNum / 100);
    // } //White ring

    pop();

    fill(200, 180, 180, 2.55 * scaleNum);
    triangle(-0.16 * scaleNum, 230, 0.16 * scaleNum, 230, 0, 210);

    textSize(36);
    fill(255, 255, 255, 200 * scaleNum / 100 * tableNum1 / 100 * (10 - totalNum) / 10 * (0.5 + 0.5 * cos(18 * totalNum ** 2)));
    text(int(hex7RotPre), 0, 10);

    pop();
}

function hex7Draw() {
    // hex7Value = true;

    if (hexMode === 7) {
        hex7TurntablePre = 0;
    } else {
        hex7TurntablePre = 10;
        tableNum1Pre = 0;
    }
    if (tableNum1 < 0.0005) {
        tableNum1 = 0;
    }
    hex7TurntableNum += (hex7TurntablePre - hex7TurntableNum) / 10;

    if (tableRot > 18000) {
        tableRot = 0;
    }
    tableNum1 += (tableNum1Pre - tableNum1) / 10;
    tableRot += 50 / (tableNum1 + 1);
    tableRot2 += 50 / (tableNum1 + 1) * constrain(tableRot_7v, 0, 1);

    if (tableRot_7v > 0.064) {
        tableRot_7 += tableRot_7v;
        if (tableRot_7v >= 25) {
            tableRot_7v += -0.005 * tableRot_7v ** 1.5
        } else if (tableRot_7v >= 0.5) {
            tableRot_7v += -0.005 * tableRot_7v ** 1.4
        } else if (tableRot_7v >= -0.002) {
            tableRot_7v += -0.005 * tableRot_7v
        } else {
            tableRot_7v = 0;
        }
    }

    hex7RotPre = 1 + (table7Ori + tableRot_7 + 18) % 360 / 360 * hex7EventMax;

    switch(hex7RotNum){
        case 1:
            hexItemEffect[0] = [2, 2, 2, 2];
            break;

        case 3:
            hexItemEffect[1] = [-1, -1, -1, -1];
            break;
        
        case 6:
            hexArmy[hexFaction - 1] += 1;
            break;
        case 7:
            hexMode = 5;
            hexDiceInput = null;
			hexDiceAssure = false;
            break;
        
        default:
            break;
    }

}



// function hexTurnLastingEffect(type, last){
//     switch(type){
        
//     }
// }

// function hexInstantEffect(type){
//     switch(type){

//     }
// }