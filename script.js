let sc = 0.1;
let count;
let titles = [];
let grid = [];

function setup() {
  randomSeed(0);
  createCanvas(800, 800);
  createTileData();
  createGrid();
  solveGrid();
  console.log(titles.length);
}

function createTileData() {

  titles.push({ rotation: 0, invert: false, variant: 1, points: [1, 0, 0, 0, 0, 0] });
  titles.push({ rotation: 1, invert: false, variant: 1, points: [0, 1, 0, 0, 0, 0] });
  titles.push({ rotation: 2, invert: false, variant: 1, points: [0, 0, 1, 0, 0, 0] });
  titles.push({ rotation: 3, invert: false, variant: 1, points: [0, 0, 0, 1, 0, 0] });
  titles.push({ rotation: 4, invert: false, variant: 1, points: [0, 0, 0, 0, 1, 0] });
  titles.push({ rotation: 5, invert: false, variant: 1, points: [0, 0, 0, 0, 0, 1] });

  titles.push({ rotation: 0, invert: true, variant: 1, points: [0, 1, 1, 1, 1, 1] });
  titles.push({ rotation: 1, invert: true, variant: 1, points: [1, 0, 1, 1, 1, 1] });
  titles.push({ rotation: 2, invert: true, variant: 1, points: [1, 1, 0, 1, 1, 1] });
  titles.push({ rotation: 3, invert: true, variant: 1, points: [1, 1, 1, 0, 1, 1] });
  titles.push({ rotation: 4, invert: true, variant: 1, points: [1, 1, 1, 1, 0, 1] });
  titles.push({ rotation: 5, invert: true, variant: 1, points: [1, 1, 1, 1, 1, 0] });


  titles.push({ rotation: 0, invert: false, variant: 2, points: [1, 0, 1, 0, 0, 0] });
  titles.push({ rotation: 1, invert: false, variant: 2, points: [0, 1, 0, 1, 0, 0] });
  titles.push({ rotation: 2, invert: false, variant: 2, points: [0, 0, 1, 0, 1, 0] });
  titles.push({ rotation: 3, invert: false, variant: 2, points: [0, 0, 0, 1, 0, 1] });
  titles.push({ rotation: 4, invert: false, variant: 2, points: [1, 0, 0, 0, 1, 0] });
  titles.push({ rotation: 5, invert: false, variant: 2, points: [0, 1, 0, 0, 0, 1] });

  titles.push({ rotation: 0, invert: true, variant: 2, points: [0, 1, 0, 1, 1, 1] });
  titles.push({ rotation: 1, invert: true, variant: 2, points: [1, 0, 1, 0, 1, 1] });
  titles.push({ rotation: 2, invert: true, variant: 2, points: [1, 1, 0, 1, 0, 1] });
  titles.push({ rotation: 3, invert: true, variant: 2, points: [1, 1, 1, 0, 1, 0] });
  titles.push({ rotation: 4, invert: true, variant: 2, points: [0, 1, 1, 1, 0, 1] });
  titles.push({ rotation: 5, invert: true, variant: 2, points: [1, 0, 1, 1, 1, 0] });


  titles.push({ rotation: 0, invert: false, variant: 3, points: [1, 0, 1, 0, 1, 0] });
  titles.push({ rotation: 1, invert: false, variant: 3, points: [0, 1, 0, 1, 0, 1] });

  titles.push({ rotation: 0, invert: true, variant: 3, points: [0, 1, 0, 1, 0, 1] });
  titles.push({ rotation: 1, invert: true, variant: 3, points: [1, 0, 1, 0, 1, 0] });


  titles.push({ rotation: 0, invert: false, variant: 4, points: [1, 0, 0, 1, 0, 0] });
  titles.push({ rotation: 1, invert: false, variant: 4, points: [0, 1, 0, 0, 1, 0] });
  titles.push({ rotation: 2, invert: false, variant: 4, points: [0, 0, 1, 0, 0, 1] });

  titles.push({ rotation: 0, invert: true, variant: 4, points: [0, 1, 1, 0, 1, 1] });
  titles.push({ rotation: 1, invert: true, variant: 4, points: [1, 0, 1, 1, 0, 1] });
  titles.push({ rotation: 2, invert: true, variant: 4, points: [1, 1, 0, 1, 1, 0] });


  titles.push({ rotation: 0, invert: false, variant: 5, points: [1, 1, 0, 0, 0, 0] });
  titles.push({ rotation: 1, invert: false, variant: 5, points: [0, 1, 1, 0, 0, 0] });
  titles.push({ rotation: 2, invert: false, variant: 5, points: [0, 0, 1, 1, 0, 0] });
  titles.push({ rotation: 3, invert: false, variant: 5, points: [0, 0, 0, 1, 1, 0] });
  titles.push({ rotation: 4, invert: false, variant: 5, points: [0, 0, 0, 0, 1, 1] });
  titles.push({ rotation: 5, invert: false, variant: 5, points: [1, 0, 0, 0, 0, 1] });

  titles.push({ rotation: 0, invert: true, variant: 5, points: [0, 0, 1, 1, 1, 1] });
  titles.push({ rotation: 1, invert: true, variant: 5, points: [1, 0, 0, 1, 1, 1] });
  titles.push({ rotation: 2, invert: true, variant: 5, points: [1, 1, 0, 0, 1, 1] });
  titles.push({ rotation: 3, invert: true, variant: 5, points: [1, 1, 1, 0, 0, 1] });
  titles.push({ rotation: 4, invert: true, variant: 5, points: [1, 1, 1, 1, 0, 0] });
  titles.push({ rotation: 5, invert: true, variant: 5, points: [0, 1, 1, 1, 1, 0] });


  titles.push({ rotation: 0, invert: false, variant: 6, points: [1, 1, 0, 1, 1, 0] });
  titles.push({ rotation: 1, invert: false, variant: 6, points: [0, 1, 1, 0, 1, 1] });
  titles.push({ rotation: 2, invert: false, variant: 6, points: [1, 0, 1, 1, 0, 1] });

  titles.push({ rotation: 0, invert: true, variant: 6, points: [0, 0, 1, 0, 0, 1] });
  titles.push({ rotation: 1, invert: true, variant: 6, points: [1, 0, 0, 1, 0, 0] });
  titles.push({ rotation: 2, invert: true, variant: 6, points: [0, 1, 0, 0, 1, 0] });


  titles.push({ rotation: 0, invert: false, variant: 7, points: [0, 0, 0, 0, 0, 0] });
  titles.push({ rotation: 1, invert: true, variant: 7, points: [1, 1, 1, 1, 1, 1] });


  titles.push({ rotation: 0, invert: false, variant: 8, points: [1, 1, 0, 1, 0, 0] });
  titles.push({ rotation: 1, invert: false, variant: 8, points: [0, 1, 1, 0, 1, 0] });
  titles.push({ rotation: 2, invert: false, variant: 8, points: [0, 0, 1, 1, 0, 1] });
  titles.push({ rotation: 3, invert: false, variant: 8, points: [1, 0, 0, 1, 1, 0] });
  titles.push({ rotation: 4, invert: false, variant: 8, points: [0, 1, 0, 0, 1, 1] });
  titles.push({ rotation: 5, invert: false, variant: 8, points: [1, 0, 1, 0, 0, 1] });

  titles.push({ rotation: 0, invert: true, variant: 8, points: [0, 0, 1, 0, 1, 1] });
  titles.push({ rotation: 1, invert: true, variant: 8, points: [1, 0, 0, 1, 0, 1] });
  titles.push({ rotation: 2, invert: true, variant: 8, points: [1, 1, 0, 0, 1, 0] });
  titles.push({ rotation: 3, invert: true, variant: 8, points: [0, 1, 1, 0, 0, 1] });
  titles.push({ rotation: 4, invert: true, variant: 8, points: [1, 0, 1, 1, 0, 0] });
  titles.push({ rotation: 5, invert: true, variant: 8, points: [0, 1, 0, 1, 1, 0] });


  titles.push({ rotation: 0, invert: false, variant: 9, points: [1, 1, 0, 0, 1, 0] });
  titles.push({ rotation: 1, invert: false, variant: 9, points: [0, 1, 1, 0, 0, 1] });
  titles.push({ rotation: 2, invert: false, variant: 9, points: [1, 0, 1, 1, 0, 0] });
  titles.push({ rotation: 3, invert: false, variant: 9, points: [0, 1, 0, 1, 1, 0] });
  titles.push({ rotation: 4, invert: false, variant: 9, points: [0, 0, 1, 0, 1, 1] });
  titles.push({ rotation: 5, invert: false, variant: 9, points: [1, 0, 0, 1, 0, 1] });

  titles.push({ rotation: 0, invert: true, variant: 9, points: [0, 0, 1, 1, 0, 1] });
  titles.push({ rotation: 1, invert: true, variant: 9, points: [1, 0, 0, 1, 1, 0] });
  titles.push({ rotation: 2, invert: true, variant: 9, points: [0, 1, 0, 0, 1, 1] });
  titles.push({ rotation: 3, invert: true, variant: 9, points: [1, 0, 1, 0, 0, 1] });
  titles.push({ rotation: 4, invert: true, variant: 9, points: [1, 1, 0, 1, 0, 0] });
  titles.push({ rotation: 5, invert: true, variant: 9, points: [0, 1, 1, 0, 1, 0] });


  titles.push({ rotation: 0, invert: false, variant: 10, points: [1, 1, 1, 0, 0, 0] });
  titles.push({ rotation: 1, invert: false, variant: 10, points: [0, 1, 1, 1, 0, 0] });
  titles.push({ rotation: 2, invert: false, variant: 10, points: [0, 0, 1, 1, 1, 0] });

  titles.push({ rotation: 0, invert: true, variant: 10, points: [0, 0, 0, 1, 1, 1] });
  titles.push({ rotation: 1, invert: true, variant: 10, points: [1, 0, 0, 0, 1, 1] });
  titles.push({ rotation: 2, invert: true, variant: 10, points: [1, 1, 0, 0, 0, 1] });


  titles.push({ rotation: 0, invert: false, variant: 11, points: [1, 1, 1, 0, 1, 0] });
  titles.push({ rotation: 1, invert: false, variant: 11, points: [0, 1, 1, 1, 0, 1] });
  titles.push({ rotation: 2, invert: false, variant: 11, points: [1, 0, 1, 1, 1, 0] });
  titles.push({ rotation: 3, invert: false, variant: 11, points: [0, 1, 0, 1, 1, 1] });
  titles.push({ rotation: 4, invert: false, variant: 11, points: [1, 0, 1, 0, 1, 1] });
  titles.push({ rotation: 5, invert: false, variant: 11, points: [1, 1, 0, 1, 0, 1] });

  titles.push({ rotation: 0, invert: true, variant: 11, points: [0, 0, 0, 1, 0, 1] });
  titles.push({ rotation: 1, invert: true, variant: 11, points: [1, 0, 0, 0, 1, 0] });
  titles.push({ rotation: 2, invert: true, variant: 11, points: [0, 1, 0, 0, 0, 1] });
  titles.push({ rotation: 3, invert: true, variant: 11, points: [1, 0, 1, 0, 0, 0] });
  titles.push({ rotation: 4, invert: true, variant: 11, points: [0, 1, 0, 1, 0, 0] });
  titles.push({ rotation: 5, invert: true, variant: 11, points: [0, 0, 1, 0, 1, 0] });


  titles.push({ rotation: 0, invert: false, variant: 12, points: [1, 0, 1, 0, 1, 0] });
  titles.push({ rotation: 1, invert: false, variant: 12, points: [0, 1, 0, 1, 0, 1] });
  titles.push({ rotation: 2, invert: false, variant: 12, points: [1, 0, 1, 0, 1, 0] });
  titles.push({ rotation: 3, invert: false, variant: 12, points: [0, 1, 0, 1, 0, 1] });
  titles.push({ rotation: 4, invert: false, variant: 12, points: [1, 0, 1, 0, 1, 0] });
  titles.push({ rotation: 5, invert: false, variant: 12, points: [0, 1, 0, 1, 0, 1] });
}

function createGrid() {
  for (let a = 0; a < 16; a++) {
    grid.push([])
    for (let b = 0; b < 16; b++) {
      grid[a].push(-1);
    }
  }
}

function solveGrid() {
  grid[0][0] = 0;
  for (let a = 0; a < grid.length; a++) {
    for (let b = 0; b < grid[a].length; b++) {
      if ((a != 0) || (b != 0)) {
        grid[a][b] = findSolution(b, a);
      }
    }
  }
}

function findSolution(x, y) {
  //kijk welke nummers er al zijn gedefinierd rondom deze hexagon...
  let corners = [-1, -1, -1, -1, -1, -1];

  //top
  let corner1 = -1;

  let topx = x;
  let topy = borders(y - 1);
  tile1 = grid[topy][topx];

  topx = borders(x + 1);
  topy = borders(y - 1);
  tile2 = grid[topy][topx];

  topx = borders(x + 1);

  temp1 = -1;
  temp2 = -1;

  if (tile1 != -1) {
    corner1 = findPointValue(tile1, 2);
    temp1 = corner1;
  }
  if (tile2 != -1) {
    corner1 = findPointValue(tile2, 4);
    temp2 = corner1;
  }
  
  if ((temp1 != -1)&&(temp2 != -1)) {
    if (temp1 != temp2) {
     console.log("ERROR: " + temp1 + " != " + temp2);
    }
  }

  //top right
  let corner2 = -1;

  topx = borders(x + 1);
  topy = y;
  tile1 = grid[topy][topx];

  topx = borders(x + 1);
  topy = borders(y - 1);
  tile2 = grid[topy][topx];

  temp1 = -1;
  temp2 = -1;

  if (tile1 != -1) {
    corner2 = findPointValue(tile1, 5);
    temp1 = corner2;
  }
  if (tile2 != -1) {
    corner2 = findPointValue(tile2, 3);
    temp2 = corner2;
  }

  if ((temp1 != -1)&&(temp2 != -1)) {
    if (temp1 != temp2) {
     console.log("ERROR: " + temp1 + " != " + temp2);
    }
  }

  //bottom right
  let corner3 = -1;

  topx = borders(x + 1);
  topy = y;
  tile1 = grid[topy][topx];

  topx = x;
  topy = borders(y + 1);
  tile2 = grid[topy][topx];

  temp1 = -1;
  temp2 = -1;

  if (tile1 != -1) {
    corner3 = findPointValue(tile1, 4);
    temp1 = corner3;
  }
  if (tile2 != -1) {
    corner3 = findPointValue(tile2, 0);
    temp2 = corner3;
  }

  if ((temp1 != -1)&&(temp2 != -1)) {
    if (temp1 != temp2) {
     console.log("ERROR: " + temp1 + " != " + temp2);
    }
  }

  //bottom
  let corner4 = -1;

  topx = x
  topy = borders(y + 1);
  tile1 = grid[topy][topx];

  topx = borders(x - 1);
  topy = borders(y + 1);
  tile2 = grid[topy][topx];

  temp1 = -1;
  temp2 = -1;

  if (tile1 != -1) {
    corner4 = findPointValue(tile1, 5);
    temp1 = corner4;
  }
  if (tile2 != -1) {
    corner4 = findPointValue(tile2, 1);

  }

  if ((temp1 != -1)&&(temp2 != -1)) {
    if (temp1 != temp2) {
     console.log("ERROR: " + temp1 + " != " + temp2);
    }
  }

  //bottom left
  let corner5 = -1;

  topx = borders(x - 1);
  topy = y
  tile1 = grid[topy][topx];

  topx = borders(x - 1);
  topy = borders(y + 1);
  tile2 = grid[topy][topx];

  temp1 = -1;
  temp2 = -1;

  if (tile1 != -1) {
    corner5 = findPointValue(tile1, 2);
    temp1 = corner5;
  }
  if (tile2 != -1) {
    corner5 = findPointValue(tile2, 0);
    temp2 = corner5;
  }

  if ((temp1 != -1)&&(temp2 != -1)) {
    if (temp1 != temp2) {
     console.log("ERROR: " + temp1 + " != " + temp2);
    }
  }

  //top left
  let corner6 = -1;

  topx = borders(x - 1);
  topy = y
  tile1 = grid[topy][topx];

  topx = x
  topy = borders(y - 1);
  tile2 = grid[topy][topx];

  temp1 = -1;
  temp2 = -1;

  if (tile1 != -1) {
    corner6 = findPointValue(tile1, 1);
    temp1 = corner6;
  }
  if (tile2 != -1) {
    corner6 = findPointValue(tile2, 3);
    temp2 = corner6;
  }

  if ((temp1 != -1)&&(temp2 != -1)) {
    if (temp1 != temp2) {
     console.log("ERROR: " + temp1 + " != " + temp2);
    }
  }
  corners = [corner1, corner2, corner3, corner4, corner5, corner6];
  solution = findTile(corners)
  return solution;

}

function borders(value) {
  if (value < 0) {
    value = grid.length - 1;
  }
  if (value > grid.length - 1) {
    value = 0;
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
  return random(solutions);
}



function draw() {
  count = 0;
  background(100);
  stroke(0);
  strokeWeight(2);
  stroke(0);
  strokeWeight(2);

  for (let a = 0; a < grid.length; a++) {
    for (let b = 0; b < grid[a].length; b++) {
      hexagon(2200 + 260 * b + 130 * (a % 2), 800 + 225 * a, sc, (TWO_PI / 6) * titles[grid[a][b]].rotation, titles[grid[a][b]].invert, titles[grid[a][b]].variant);
    }
  }





  teller1 = 1;
  teller2 = 1;
  add = 0;
  for (let a = 0; a < titles.length; a++) {
    hexagon(260 * teller1 + add, 225 * teller2, sc, (TWO_PI / 6) * titles[a].rotation, titles[a].invert, titles[a].variant);
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


  text(count, 400, 400, 500, 500);
}

function hexagon(transX, transY, s, r, i, variant) {
  count++;
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