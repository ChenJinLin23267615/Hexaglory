var hexFlourish = [];
var hexTime = 0, hexFlourishScale = [1, 1, 1, 1, 1];

function hexFlourishCalc(){
    //重置变量
    hexFlourish = [true, 0, 0, 0, 0];
    let hexRoadCount = [0, 0, 0, 0];
    //遍历每一个node，求出属于该阵营的房子等级和，加入繁荣度
    hexNode.forEach((element) => {element[0] !== 0 ? hexFlourish[element[0]] += element[1] : 0});
    //遍历每一个road，该阵营每有1条路，计量+1，计量最高+2
    hexLink.forEach((element) => {element[0] !== 0 ? hexRoadCount[element[0]-1] += 1 : 0});
    let hexLinkMax = Math.max(...hexRoadCount), hexLinkMaxCount = hexRoadCount.filter(element => element === hexLinkMax).length, ind = -1;
    hexLinkMaxCount === 1 ? ind = hexRoadCount.indexOf(hexLinkMax) : 0;
    ind !== -1 ? hexFlourish[ind+1] += 2 : 0;
    //取军队量最高者，+2
    let hexArmyMax = Math.max(...hexArmy), hexArmyMaxCount = hexArmy.filter(element => element === hexArmyMax).length, ind2 = -1;
    hexArmyMaxCount === 1 ? ind2 = hexArmy.indexOf(hexArmyMax) : 0;
    ind2 !== -1 ? hexFlourish[ind2+1] += 2 : 0;
    //每使用了一张城镇建设卡牌，+1
    //--To be continue
}

function hexFlourishDisplay(faction){
    let tempcolor = [[255,187,187],[187,187,255],[255,187,255],[187,255,255]];
    let hexFactionPosition = [0,[45, height - 48],[45, 48],[width - 45, 48],[width - 45, height - 48]];
    hexTime < 360 ? hexTime += .12 : hexTime -= 360;
    push();
    hexFlourish.forEach((element,index) => {index !== 0 && element > 6 ? drawPolygon(index,hexFactionPosition[index][0],hexFactionPosition[index][1],36,element - 4, tempcolor[index - 1]) : 0});
    pop();
}
function hexFlourishDisplayM(faction){
    let tempcolor = [[255,187,187],[187,187,255],[255,187,255],[187,255,255]];
    let hexFactionPosition = [0,[45, height - 48],[45, 48],[width - 45, 48],[width - 45, height - 48]];
    push();
    hexFlourish.forEach((element,index) => {index !== 0 && index == faction && element > 6 ? drawPolygon(index,hexFactionPosition[index][0],hexFactionPosition[index][1],36,element - 4, tempcolor[index - 1]) : 0});
    pop();
}

function drawPolygon(index, x, y, radius, npoints, tempcolor) {
    for(let i = 1; i < 5; i += 1){
        hexFlourishScale[i] < 3 && hexFlourishScale[i] >= 1 ? hexFlourishScale[i] += .01 * (0.5 + hexFlourish[i] / 4) : hexFlourishScale[i] = 1;
    }
    beginShape();
    stroke(color(tempcolor[0],tempcolor[1],tempcolor[2]));
    strokeWeight(5);
    noFill();
    for (let i = 1; i <= npoints; i++) {
      vertex(x + radius * cos(360 / npoints * i + hexTime * npoints ** 2), y + radius * sin(360 / npoints * i + hexTime * npoints ** 2));
    }
    endShape(CLOSE);
    
    beginShape();
    stroke(color(tempcolor[0],tempcolor[1],tempcolor[2], 150 - 50 * hexFlourishScale[index]));
    for (let i = 1; i <= npoints; i++) {
        vertex(x + radius * hexFlourishScale[index] * cos(360 / npoints * i + hexTime * npoints ** 2), y + radius * hexFlourishScale[index] * sin(360 / npoints * i + hexTime * npoints ** 2));
    }
    endShape(CLOSE);

    textStyle(NORMAL);
    textSize(18);
    textAlign(CENTER);
    noStroke();
    fill(color(tempcolor[0],tempcolor[1],tempcolor[2]));
    text(npoints + 4, x, y + 6);
    textSize(12);
    index == hexFaction ? text('F l o u r i s h', x, y + 30) : false;
  }