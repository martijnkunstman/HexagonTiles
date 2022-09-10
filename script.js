let sc = 0.1;
let gridTilesWidth = 18;
let gridTilesHeight = 24;
let useCenterLines = false;
let randomseedExtra = 16;

let pathFindMatrix = [];

for (a = 0; a < (gridTilesHeight * 3 + 2); a++) {
  pathFindMatrix.push([])
  for (b = 0; b < (gridTilesWidth * 2 + 1); b++) {
    pathFindMatrix[a].push(3);
  }
}

//1. find last tile 
//2. find first tile 
//3. return no centerline solution 
//4. return centerline solution 
//5. return random element from solutions
let returnType = 5;
let findLeastUsed = true;
let showUsed = false;
let scroll = 0;
let showPath = 0;

let grid = [];
let firstRun = true;
let randomType = 2;
let scrollx = 0;
let scrolly = 0;

function setup() {
  //firstTime = true;
  scrollx = 0;
  scrolly = 0;
  if (randomType == 0) {
  }
  else {
    randomSeed(randomType + randomseedExtra);
  }
  console.log("seed:"+(randomType + randomseedExtra));
  if (gridTilesHeight % 2 == 1) { gridTitesHeight++; }
  createCanvas(900, 600);
  background(100);
  createGrid();
  solveGrid();
  if (firstRun) {
    options();
    firstRun = false;
  }
  draw102Tiles();
  if (showUsed) {
    showUsedTiles();
  }
  //waveCollapse();
}



function draw102Tiles() {
  teller1 = 1;
  teller2 = 1;
  add = 0;
  for (let a = 0; a < tiles.length; a++) {
    hexagon(360 * teller1 + add, 325 * teller2, sc, (TWO_PI / 6) * tiles[a].rotation, tiles[a].invert, tiles[a].variant, a, 0, 0, 0);
    teller1++;
    if (teller1 > 6) {
      teller1 = 1;
      teller2++;
      if (add == 0) {
        add = 130;
      }
      else { add = 0 }
    }
  }
}

function options() {
  document.getElementById("options").innerHTML += `<select id='returnType' onchange='reset();'>
  <option value='1'>last tile</option>
  <option value='2'>first tile</option> 
  <option value='3'>no centerline</option> 
  <option value='4'>centerline</option> 
  <option value='5' selected>random</option>
  </select>`;
  document.getElementById("options").innerHTML += `<select id='randomType' onchange='reset();'>
  <option value='0'>random</option>
  <option value='1'>randomseed 1</option> 
  <option value='2' selected>randomseed 2</option> 
  <option value='3'>randomseed 3</option> 
  <option value='4'>randomseed 4</option>
  </select>`;
  document.getElementById("options").innerHTML += `<select id='findLeastUsed' onchange='reset();'>
  <option value='1' selected>least used true</option>
  <option value='0'>least used false</option> 
  </select>`;
  document.getElementById("options").innerHTML += `<select id='showUsed' onchange='reset();'>
  <option value='1'>showUsed true</option>
  <option value='0' selected>showUsed false</option> 
  </select><br>`;
  document.getElementById("options").innerHTML += `<select id='scroll' onchange='reset();'>
  <option value='0' selected>none</option>
  <option value='2'>x</option> 
  <option value='3'>x y</option> 
  </select><br>`;
  document.getElementById("options").innerHTML += `<select id='showpath' onchange='reset();'>
  <option value='0' selected>none</option>
  <option value='1'>center</option> 
  <option value='2'>sides</option> 
  <option value='3'>center and sides</option> 
  </select>`;

}
function reset() {
  returnType = document.getElementById("returnType").value;
  randomType = parseInt(document.getElementById("randomType").value);
  console.log("randomType"+randomType);
  findLeastUsed = (document.getElementById("findLeastUsed").value == "1");
  showUsed = (document.getElementById("showUsed").value == "1");
  scroll = document.getElementById("scroll").value;
  showPath = document.getElementById("showpath").value;
  setup();
}


function showUsedTiles() {
  let used = [];
  for (let a = 0; a < tiles.length; a++) {
    used.push(0);
  }
  for (let a = 0; a < gridTilesHeight; a++) {
    for (let b = 0; b < gridTilesWidth; b++) {
      used[grid[a][b]] = used[grid[a][b]] + 1;
    }
  }
  teller1 = 1;
  teller2 = 1;
  add = 0;
  fill(255);
  textSize(12);
  for (let a = 0; a < tiles.length; a++) {
    text(used[a], (360 * teller1 + add) * sc, (325 * teller2) * sc);
    teller1++;
    if (teller1 > 6) {
      teller1 = 1;
      teller2++;
      if (add == 0) {
        add = 130;
      }
      else { add = 0 }
    }
  }
}

function createGrid() {
  grid = [];
  for (let a = 0; a < gridTilesHeight; a++) {
    grid.push([])
    for (let b = 0; b < gridTilesWidth; b++) {
      grid[a].push(-1);
    }
  }
}

function solveGrid() {
  grid[0][0] = int(random(0, tiles.length));
  for (let a = 0; a < gridTilesHeight; a++) {
    for (let b = 0; b < gridTilesWidth; b++) {
      if ((a != 0) || (b != 0)) {
        grid[a][b] = findSolution(b, a);
      }
    }
  }
}

//---------------- work in progress - start ----------------

// waveCollapse functions

function waveCollapse() {
  grid[Math.round(gridTilesHeight / 2)][Math.round(gridTilesWidth / 2)] = 10;
  findSolutions();
}

function findSolutions() {
  for (let a = 0; a < gridTilesHeight; a++) {
    for (let b = 0; b < gridTilesWidth; b++) {
      //console.log(a + "-" + b);
      if ((grid[a][b] == -1) || (typeof grid[a][b] == "Array")) {
        grid[a][b] = findSolution(b, a);
      }
      //console.log(grid);
    }
  }
  //console.log(grid);
  //findLowestEntropy();
  //checkForCollapse();
}
function findLowestEntropy() {
  for (let a = 0; a < gridTilesHeight; a++) {
    for (let b = 0; b < gridTilesWidth; b++) {
      if (grid[a][b] != -1) {
        grid[a][b] = findSolution(b, a);
      }
    }
  }
}
function checkForCollapse() {
  collapse = false;
  for (let a = 0; a < grid.length; a++) {
    for (let b = 0; b < grid[a].length; b++) {
      if ((grid[a][b] != -1) && (typeof grid[a][b] != "Array")) {
        collapse = true;
      }
    }
  }
  if (!collapse) {
    findSolutions()
  } else {
    //console.log(grid);
  }
}

//---------------- work in progress - end ----------------


function findSolution(x, y) {
  let corners;

  let corner0 = lookUpCorners(x, y, 0, 2, 4);//top
  let corner1 = lookUpCorners(x, y, 1, 5, 3);//top right
  let corner2 = lookUpCorners(x, y, 2, 4, 0);//bottom right
  let corner3 = lookUpCorners(x, y, 3, 5, 1);//bottom
  let corner4 = lookUpCorners(x, y, 4, 2, 0);//bottom left
  let corner5 = lookUpCorners(x, y, 5, 1, 3);//top left

  corners = [corner0, corner1, corner2, corner3, corner4, corner5];
  solution = findTile(corners)
  return solution;
}

function lookUpCorners(x, y, corner, corner1, corner2) {
  let topx;
  let topy;
  let returncorner = -1;
  if (corner == 0) {
    topx = x;
    topy = borders(y - 1, "h");
  }
  if (corner == 1) {
    topx = borders(x + 1, "w");
    topy = y;
  }
  if (corner == 2) {
    topx = borders(x + 1, "w");
    topy = y;
  }
  if (corner == 3) {
    topx = x
    topy = borders(y + 1, "h");
  }
  if (corner == 4) {
    topx = borders(x - 1, "w");
    topy = y
  }
  if (corner == 5) {
    topx = borders(x - 1, "w");
    topy = y
  }
  tile1 = grid[topy][topx];

  if (corner == 0) {
    topx = borders(x + 1, "w");
    topy = borders(y - 1, "h");
  }
  if (corner == 1) {
    topx = borders(x + 1, "w");
    topy = borders(y - 1, "h");
  }
  if (corner == 2) {
    topx = x;
    topy = borders(y + 1, "h");
  }
  if (corner == 3) {
    topx = borders(x - 1, "w");
    topy = borders(y + 1, "h");
  }
  if (corner == 4) {
    topx = borders(x - 1, "w");
    topy = borders(y + 1, "h");
  }
  if (corner == 5) {
    topx = x;
    topy = borders(y - 1, "h");
  }
  tile2 = grid[topy][topx];

  let temp1 = -1;
  let temp2 = -1;

  if (tile1 != -1) {
    returncorner = findPointValue(tile1, corner1);
    temp1 = corner;
  }
  if (tile2 != -1) {
    returncorner = findPointValue(tile2, corner2);
    temp2 = corner;
  }

  if ((temp1 != -1) && (temp2 != -1)) {
    if (temp1 != temp2) {
      console.log("ERROR: " + temp1 + " != " + temp2);
    }
  }
  return returncorner;
}


function borders(value, dimension) {
  if (dimension == "w") {
    if (value < 0) {
      return gridTilesWidth - 1;
    }
    if (value > gridTilesWidth - 1) {
      return 0;
    }
  }
  if (dimension == "h") {
    if (value < 0) {
      return gridTilesHeight - 1;
    }
    if (value > gridTilesHeight - 1) {
      return 0;
    }
  }
  return value;
}

function findPointValue(tile, point) {
  return (tiles[tile].points[point]);
}

function findTile(corners) {
  solutions = [];

  for (let a = 0; a < tiles.length; a++) {
    if ((tiles[a].points[0] == corners[0] || corners[0] == -1) && (tiles[a].points[1] == corners[1] || corners[1] == -1) && (tiles[a].points[2] == corners[2] || corners[2] == -1) && (tiles[a].points[3] == corners[3] || corners[3] == -1) && (tiles[a].points[4] == corners[4] || corners[4] == -1) && (tiles[a].points[5] == corners[5] || corners[5] == -1)) {
      solutions.push(a);
    }
  }

  //1. find last tile  
  if (returnType == 1) {
    solutions.sort((a, b) => a - b);
    solutions.reverse();
    return solutions[0];
  }

  //2. find first tile  
  if (returnType == 2) {
    solutions.sort((a, b) => a - b);
    return solutions[0];
  }

  //3. return no centerline solution
  if (returnType == 3) {
    solutions = filterCenterline(solutions, false);
    if (findLeastUsed) {
      solutions = findLeastUsedTileFromSoulutions(solutions)
    }
    return random(solutions);
  }

  //4. return centerline solution
  if (returnType == 4) {
    solutions = filterCenterline(solutions, true);
    if (findLeastUsed) {
      solutions = findLeastUsedTileFromSoulutions(solutions)
    }
    return random(solutions);
  }

  //5. return random element from solutions
  if (returnType == 5) {
    if (findLeastUsed) {
      solutions = findLeastUsedTileFromSoulutions(solutions)
    }
    return random(solutions);

  }

  //prevent circle solutions
  //find one that is not used so much yet

  //6. return all solutions
  if (returnType == 6) {
    return solutions;
  }

}

function filterCenterline(solutions, centerline) {
  let noCenterlineSolutions = [];
  let centerlineSolutions = [];
  for (let a = 0; a < solutions.length; a++) {
    if (tiles[solutions[a]].centerline) {
      centerlineSolutions.push(solutions[a]);
    } else {
      noCenterlineSolutions.push(solutions[a]);
    }
  }
  if (centerline) {
    if (centerlineSolutions.length > 0) {
      return centerlineSolutions;
    } else {
      return noCenterlineSolutions;
    }
  }
  else {
    if (noCenterlineSolutions.length > 0) {
      return noCenterlineSolutions;
    } else {
      return centerlineSolutions;
    }
  }
}

function findLeastUsedTileFromSoulutions(solutions) {
  let used = [];
  for (let a = 0; a < solutions.length; a++) {
    used.push({ index: a, count: 0 })
  }
  for (let a = 0; a < gridTilesHeight; a++) {
    for (let b = 0; b < gridTilesWidth; b++) {
      if (grid[a][b] != -1) {
        for (let c = 0; c < solutions.length; c++) {
          if (grid[a][b] == solutions[c]) {
            used[c].count++;
          }
        }
      }
    }
  }
  used.sort((a, b) => a.count - b.count);
  let count = used[0].count;
  let lessUsedSolutions = [];
  for (let a = 0; a < used.length; a++) {
    if (used[a].count == count) {
      lessUsedSolutions.push(solutions[used[a].index]);
    }
  }
  return lessUsedSolutions;

}
let firstTime = true;
function draw() {
  //background(100);
  stroke(0);
  strokeWeight(2);

  if (scroll == "1") {
    scrolly += 1 / sc;
  }
  if (scroll == "2") {
    scrollx += 1 / sc;
  }
  if (scroll == "3") {
    scrollx += 1 / sc;
    scrolly += 1 / sc;
  }

  for (let a = 0; a < gridTilesHeight; a++) {
    y = (225 * a + scrolly);
    extra = Math.floor(y / (225 * gridTilesHeight));
    y = y % (225 * gridTilesHeight);
    for (let b = 0; b < gridTilesWidth; b++) {
      x = (260 * b + 130 * a + scrollx);
      x = x - extra * (260 * gridTilesHeight / 2);
      x = x % (260 * gridTilesWidth);
      hexagon(280 / sc + x, 40 / sc + y, sc, (TWO_PI / 6) * tiles[grid[a][b]].rotation, tiles[grid[a][b]].invert, tiles[grid[a][b]].variant, grid[a][b], b, a, 1);
    }
  }

  //noLoop();

  //console.log(pathFindMatrix);
  //showPoints();

  if (firstTime) {
    cleanUpMatrix();
    var graph = new Graph(pathFindMatrix, { diagonal: true });
    var start = graph.grid[0][5];
    var end = graph.grid[gridTilesHeight*3][8];
    result = astar.search(graph, start, end, { heuristic: astar.heuristics.diagonal });
  }
  showResult(result);
  firstTime = false;
}
var result;
function cleanUpMatrix() {
  let temp = [];
  for (a = 0; a < pathFindMatrix.length; a++) {
    temp[a] = [];
    for (b = 0; b < gridTilesWidth * 2; b++) {
      temp[a].push("3");
    }
  }
  for (a = 0; a < pathFindMatrix.length; a++) {
    for (b = 0; b < pathFindMatrix[a].length; b++) {
      at = a;
      bt = b % (gridTilesWidth * 2);
      if (pathFindMatrix[a][b] == 0) {
        temp[at][bt] = 1;
      }
      else {
        temp[at][bt] = 0;
      }
    }
  }
  pathFindMatrix = temp;
}

function showPoints() {
  stroke('purple'); // Change the color
  strokeWeight(5);
  for (a = 0; a < pathFindMatrix.length; a++) {
    for (b = 0; b < pathFindMatrix[a].length; b++) {
      if (pathFindMatrix[a][b] == 1) {
        point(b * 13 + 266, a * 7.5 + 25);
        //console.log(a + "-" + b)
      }
    }
  }
}
let showPoint = 0;
function showResult(result) {
  stroke('red'); // Change the color
  strokeWeight(10);
  for (a = 0; a < result.length; a++) {
    x = result[a].y * 13 + scrollx / 10;
    y = result[a].x * 7.5 + scrolly / 10;
    if (showPoint==a)
    { 
    point((x % (gridTilesWidth * 26)) + 266, y % (gridTilesHeight* 22.5) + 25);
    }
  }
  showPoint++;
  if(showPoint>result.length-1)
  {
    showPoint=0;
  }
}

function makeLine(x1, y1, x2, y2) {
  push();
  scale(sc);
  line(280 / sc + x1, y1 + 40 / sc, 280 / sc + x2, y2 + 40 / sc);
  pop();
}

function hexagon(transX, transY, s, r, i, variant, id, x, y, add) {
  stroke(100);
  strokeWeight(5);
  if (i) {
    fill(0);
  } else {
    fill(255);
  }
  push();
  scale(s);
  translate(transX, transY);
  rotate(r);
  beginShape();
  vertex(0, -150);
  vertex(130, -75);
  vertex(130, 75);
  vertex(0, 150);
  vertex(-130, 75);
  vertex(-130, -75);
  endShape(CLOSE);
  if (!i) {
    fill(0);
  } else {
    fill(255);
  }
  if (variant == 1) {
    arc(0, -150, 150, 150, TWO_PI / 12, (TWO_PI / 12) * 5);
  }
  if (variant == 2) {
    arc(0, -150, 150, 150, TWO_PI / 12, (TWO_PI / 12) * 5);
    arc(130, 75, 150, 150, (TWO_PI / 12) * 5, (TWO_PI / 12) * 9);
  }
  if (variant == 3) {
    arc(0, -150, 150, 150, TWO_PI / 12, (TWO_PI / 12) * 5);
    arc(130, 75, 150, 150, (TWO_PI / 12) * 5, (TWO_PI / 12) * 9);
    arc(-130, 75, 150, 150, (TWO_PI / 12) * 9, (TWO_PI / 12) * 1);
  }
  if (variant == 4) {
    arc(0, -150, 150, 150, TWO_PI / 12, (TWO_PI / 12) * 5);
    arc(0, 150, 150, 150, (TWO_PI / 12) * 7, (TWO_PI / 12) * 11);
  }
  if (variant == 5) {
    beginShape();
    vertex(-65, -75 * 1.5);
    vertex(0, -150);
    vertex(130, -75);
    vertex(130, 0);
    bezierVertex(65, 0, -65 / 2, (-75 * 1.5) / 2, -65, -75 * 1.5);
    endShape(CLOSE);
  }
  if (variant == 6) {
    beginShape();
    vertex(-65, -75 * 1.5);
    vertex(0, -150);
    vertex(130, -75);
    vertex(130, 0);
    bezierVertex(65, 0, -65 / 2, (-75 * 1.5) / 2, -65, -75 * 1.5);
    endShape(CLOSE);
    beginShape();
    vertex(65, 75 * 1.5);
    vertex(0, 150);
    vertex(-130, 75);
    vertex(-130, 0);
    bezierVertex(-65, 0, 65 / 2, (75 * 1.5) / 2, 65, 75 * 1.5);
    endShape(CLOSE);
  }
  if (variant == 7) {
  }
  if (variant == 8) {
    beginShape();
    vertex(-65, -75 * 1.5);
    vertex(0, -150);
    vertex(130, -75);
    vertex(130, 0);
    bezierVertex(65, 0, -65 / 2, (-75 * 1.5) / 2, -65, -75 * 1.5);
    endShape(CLOSE);
    arc(0, 150, 150, 150, (TWO_PI / 12) * 7, (TWO_PI / 12) * 11);
  }
  if (variant == 9) {
    beginShape();
    vertex(-65, -75 * 1.5);
    vertex(0, -150);
    vertex(130, -75);
    vertex(130, 0);
    bezierVertex(65, 0, -65 / 2, (-75 * 1.5) / 2, -65, -75 * 1.5);
    endShape(CLOSE);
    arc(-130, 75, 150, 150, (TWO_PI / 12) * 9, (TWO_PI / 12) * 1);
  }

  if (variant == 10) {
    beginShape();
    vertex(-65, -75 * 1.5);
    vertex(0, -150);
    vertex(130, -75);
    vertex(130, 75);
    vertex(64, 75 * 1.5);
    endShape(CLOSE);
  }

  if (variant == 11) {
    beginShape();
    vertex(-65, -75 * 1.5);
    vertex(0, -150);
    vertex(130, -75);
    vertex(130, 75);
    vertex(64, 75 * 1.5);
    endShape(CLOSE);
    arc(-130, 75, 150, 150, (TWO_PI / 12) * 9, (TWO_PI / 12) * 1);
  }
  if (variant == 12) {
    beginShape();
    vertex(-65, -75 * 1.5);
    vertex(0, -150);
    vertex(130, -75);
    vertex(130, 75);
    vertex(64, 75 * 1.5);
    endShape(CLOSE);
    arc(-130, 75, 150, 150, (TWO_PI / 12) * 9, (TWO_PI / 12) * 1);

    if (i) {
      fill(0);
    } else {
      fill(255);
    }
    arc(130, -75, -150, -150, (TWO_PI / 12) * 3, (TWO_PI / 12) * 7);
  }
  // draw connected sides

  if ((showPath == 2) || (showPath == 3)) {
    rotate(-r);
    stroke(255, 0, 0);
    strokeWeight(20);
    if ((tiles[id].points[0] == 0) && (tiles[id].points[1] == 0)) {
      line(0, -150, 130, -75);
    }
    if ((tiles[id].points[1] == 0) && (tiles[id].points[2] == 0)) {
      line(130, -75, 130, 75);
    }
    if ((tiles[id].points[2] == 0) && (tiles[id].points[3] == 0)) {
      line(130, 75, 0, 150);
    }
    if ((tiles[id].points[3] == 0) && (tiles[id].points[4] == 0)) {
      line(0, 150, -130, 75);
    }
    if ((tiles[id].points[4] == 0) && (tiles[id].points[5] == 0)) {
      line(-130, 75, -130, -75);
    }
    if ((tiles[id].points[5] == 0) && (tiles[id].points[0] == 0)) {
      line(-130, -75, 0, -150);
    }
    rotate(r)
  }


  // draw from center to corner

  if ((showPath == 1) || (showPath == 3)) {
    rotate(-r);
    stroke(255, 0, 0);
    strokeWeight(20)
    if (tiles[id].centerValue == 0) {
      if ((tiles[id].center[0] == 1) && (tiles[id].points[0] == 0)) {
        line(0, 0, 0, -150);	// top
      }
      if ((tiles[id].center[1] == 1) && (tiles[id].points[1] == 0)) {
        line(0, 0, 130, -75);	// top right
      }
      if ((tiles[id].center[2] == 1) && (tiles[id].points[2] == 0)) {
        line(0, 0, 130, 75);	// bottom right
      }
      if ((tiles[id].center[3] == 1) && (tiles[id].points[3] == 0)) {
        line(0, 0, 0, 150);	// bottom
      }
      if ((tiles[id].center[4] == 1) && (tiles[id].points[4] == 0)) {
        line(0, 0, -130, 75);	// bottom left
      }
      if ((tiles[id].center[5] == 1) && (tiles[id].points[5] == 0)) {
        line(0, 0, -130, -75);	// top left
      }

    }
    rotate(r)

  }
  let makeBlocks = true;

  if (makeBlocks) {
    if (add) {
      makeBlocksF(r, id, x, y);
    }
  }
  pop();

}
function makeBlocksF(r, id, x, y) {
  drawRect = false;

  colorBlocked = 'rgba(0,255,0,0.5)';
  colorNotBlocked = 'rgba(255,255,255,0)';

  //colorBlocked = 'rgba(255,255,255,0)';
  //colorNotBlocked = 'rgba(255,255,255,0)';

  rotate(-r);
  strokeWeight(5);
  stroke(0, 0, 255);
  hhh = 75
  //5 2 8 4 6 1 3 7 9 0 10
  //
  // 5=2,1  2=1,1  8=3,1  4=2,0  6=2,2  1=1,0  3=1,2  7=3,0  9=3,2  0=0,1  10=4,1 
  //
  //5
  let z = y;
  if (tiles[id].path[5] == 0) {
    fill(colorNotBlocked);
    pathFindMatrix[y * 3 + 2][x * 2 + 1 + z] = 0;
  }
  else {
    fill(colorBlocked);
    pathFindMatrix[y * 3 + 2][x * 2 + 1 + z] = 1;
  }
  if (drawRect) rect(-65, -hhh / 2, 130, hhh);
  //2
  if (tiles[id].path[2] == 0) {
    fill(colorNotBlocked);
    pathFindMatrix[y * 3 + 1][x * 2 + 1 + z] = 0;
  }
  else {
    fill(colorBlocked);
    pathFindMatrix[y * 3 + 1][x * 2 + 1 + z] = 1;
  }
  if (drawRect) rect(-65, -hhh / 2 - hhh, 130, hhh);
  //8
  if (tiles[id].path[8] == 0) {
    fill(colorNotBlocked);
    pathFindMatrix[y * 3 + 3][x * 2 + 1 + z] = 0;
  }
  else {
    fill(colorBlocked);
    pathFindMatrix[y * 3 + 3][x * 2 + 1 + z] = 1;
  }
  if (drawRect) rect(-65, -hhh / 2 + hhh, 130, hhh);
  //4  
  if (tiles[id].path[4] == 0) {
    fill(colorNotBlocked);
    pathFindMatrix[y * 3 + 2][x * 2 + z] = 0;
  }
  else {
    fill(colorBlocked);
    pathFindMatrix[y * 3 + 2][x * 2 + z] = 1;
  }
  if (drawRect) rect(-195, -hhh / 2, 130, hhh);
  //6
  if (tiles[id].path[6] == 0) {
    fill(colorNotBlocked);
    pathFindMatrix[y * 3 + 2][x * 2 + 2 + z] = 0;
  }
  else {
    fill(colorBlocked);
    pathFindMatrix[y * 3 + 2][x * 2 + 2 + z] = 1;
  }
  if (drawRect) rect(65, -hhh / 2, 130, hhh);
  //1
  if (tiles[id].path[1] == 0) {
    fill(colorNotBlocked);
    pathFindMatrix[y * 3 + 1][x * 2 + z] = 0;
  }
  else {
    fill(colorBlocked);
    pathFindMatrix[y * 3 + 1][x * 2 + z] = 1;
  }
  if (drawRect) rect(-195, -hhh / 2 - hhh, 130, hhh);
  //3
  if (tiles[id].path[3] == 0) {
    fill(colorNotBlocked);
    pathFindMatrix[y * 3 + 1][x * 2 + 2 + z] = 0;
  }
  else {
    fill(colorBlocked);
    pathFindMatrix[y * 3 + 1][x * 2 + 2 + z] = 1;
  }
  if (drawRect) rect(65, -hhh / 2 - hhh, 130, hhh);
  //7
  if (tiles[id].path[7] == 0) {
    fill(colorNotBlocked);
    pathFindMatrix[y * 3 + 3][x * 2 + z] = 0;
  }
  else {
    fill(colorBlocked);
    pathFindMatrix[y * 3 + 3][x * 2 + z] = 1;
  }
  if (drawRect) rect(-195, -hhh / 2 + hhh, 130, hhh);
  //9
  if (tiles[id].path[9] == 0) {
    fill(colorNotBlocked);
    pathFindMatrix[y * 3 + 3][x * 2 + 2 + z] = 0;
  }
  else {
    fill(colorBlocked);
    pathFindMatrix[y * 3 + 3][x * 2 + 2 + z] = 1;
  }
  if (drawRect) rect(65, -hhh / 2 + hhh, 130, hhh);
  //0
  if (tiles[id].path[0] == 0) {
    fill(colorNotBlocked);
    pathFindMatrix[y * 3][x * 2 + 1 + z] = 0;
  }
  else {
    fill(colorBlocked);
    pathFindMatrix[y * 3][x * 2 + 1 + z] = 1;
  }
  if (drawRect) rect(-65, -hhh / 2 - hhh * 2, 130, hhh);
  //10
  if (tiles[id].path[10] == 0) {
    fill(colorNotBlocked);
    pathFindMatrix[y * 3 + 4][x * 2 + 1 + z] = 0;
  }
  else {
    fill(colorBlocked);
    pathFindMatrix[y * 3 + 4][x * 2 + 1 + z] = 1;
  }
  if (drawRect) rect(-65, -hhh / 2 + hhh * 2, 130, hhh);
  //
  rotate(r)
}

