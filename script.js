let sc = 0.1;
let gridTitlesWidth = 18;
let gridTitlesHeight = 22;

let grid = [];

function setup() {
  //randomSeed(0);
  if (gridTitlesHeight % 2 == 1) { gridTitlesHeight++; }
  createCanvas(800, 600);
  createGrid();
  solveGrid();
  console.log(gridTitlesWidth * 260);
}

function createGrid() {
  for (let a = 0; a < gridTitlesHeight; a++) {
    grid.push([])
    for (let b = 0; b < gridTitlesWidth; b++) {
      grid[a].push(-1);
    }
  }
}

function solveGrid() {
  grid[0][0] = 0;
  for (let a = 0; a < gridTitlesHeight; a++) {
    for (let b = 0; b < gridTitlesWidth; b++) {
      if ((a != 0) || (b != 0)) {
        grid[a][b] = findSolution(b, a);
      }
    }
  }
}

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
      return gridTitlesWidth - 1;
    }
    if (value > gridTitlesWidth - 1) {
      return 0;
    }
  }
  if (dimension == "h") {
    if (value < 0) {
      return gridTitlesHeight - 1;
    }
    if (value > gridTitlesHeight - 1) {
      return 0;
    }
  }
  return value;
}

function findPointValue(tile, point) {
  return (titles[tile].points[point]);
}

function findTile(corners) {
  solutions = [];

  for (let a = 0; a < titles.length; a++) {
    if ((titles[a].points[0] == corners[0] || corners[0] == -1) && (titles[a].points[1] == corners[1] || corners[1] == -1) && (titles[a].points[2] == corners[2] || corners[2] == -1) && (titles[a].points[3] == corners[3] || corners[3] == -1) && (titles[a].points[4] == corners[4] || corners[4] == -1) && (titles[a].points[5] == corners[5] || corners[5] == -1)) {
      solutions.push(a);
    }
  }
  //prevent circle solutions

  //find one that is not used so much yet


  //find first tile
  /*
  solutions.sort((a, b) => a - b);
  solutions.reverse();
  return solutions[0];
  */

  //find last tile
  /*
  solutions.sort((a, b) => a - b);
  return solutions[0];
  */

  //random element from solutions
  return random(solutions);
}

let scrollx = 0;
let scrolly = 0;

function draw() {
  background(100);
  stroke(0);
  strokeWeight(2);
  stroke(0);
  strokeWeight(2);
  scrollx += 0.5/sc;
  scrolly += 0.5/sc;

  for (let a = 0; a < gridTitlesHeight; a++) {
    for (let b = 0; b < gridTitlesWidth; b++) {
      //let extra = 260*gridTitlesHeight;
      //let extra = 0;
      hexagon(280 / sc + (260 * b + 130 * a + scrollx) % (gridTitlesWidth * 260), 40 / sc + (225 * a + scrolly) % (gridTitlesHeight * 225), sc, (TWO_PI / 6) * titles[grid[a][b]].rotation, titles[grid[a][b]].invert, titles[grid[a][b]].variant);
    }
  }

  teller1 = 1;
  teller2 = 1;
  add = 0;
  for (let a = 0; a < titles.length; a++) {
    hexagon(360 * teller1 + add, 325 * teller2, sc, (TWO_PI / 6) * titles[a].rotation, titles[a].invert, titles[a].variant);
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

function hexagon(transX, transY, s, r, i, variant) {
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
  pop();
}