var graph = new Graph([
    [1, 1, 1, 1, 0, 1, 1, 1],
    [0, 1, 1, 0, 0, 1, 1, 1],
    [0, 0, 1, 1, 0, 1, 1, 1],
    [0, 0, 0, 1, 1, 0, 1, 1],
    [0, 0, 0, 1, 0, 1, 1, 1],
    [0, 1, 1, 1, 0, 1, 1, 1],
    [0, 1, 0, 0, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 0, 1, 1]
]);
var start = graph.grid[0][0];
var end = graph.grid[7][7];
var result = astar.search(graph, start, end);

createResult();

// result is an array containing the shortest path
//console.log(result);
var graphDiagonal = new Graph([
    [1, 1, 1, 1],
    [0, 1, 1, 0],
    [0, 0, 1, 1]
], { diagonal: true });

var start = graphDiagonal.grid[0][0];
var end = graphDiagonal.grid[1][2];
var resultWithDiagonals = astar.search(graphDiagonal, start, end, { heuristic: astar.heuristics.diagonal });
// Weight can easily be added by increasing the values within the graph, and where 0 is infinite (a wall)
var graphWithWeight = new Graph([
    [1, 1, 2, 30],
    [0, 4, 1.3, 0],
    [0, 0, 5, 1]
]);
var startWithWeight = graphWithWeight.grid[0][0];
var endWithWeight = graphWithWeight.grid[1][2];
var resultWithWeight = astar.search(graphWithWeight, startWithWeight, endWithWeight);
// resultWithWeight is an array containing the shortest path taking into account the weight of a node


function createResult() {
    for (a = 0; a < graph.grid.length; a++) {
        for (b = 0; b < graph.grid[a].length; b++) {
            if (graph.grid[a][b].weight == 1) {
                color = "red";
            }
            else {
                color = "white";
            }
            console.log(graph.grid[a][b])
            document.getElementById("result").innerHTML += "<div id='a" + a + "b" + b + "' style='background:" + color + ";' class='cell'>" + graph.grid[a][b].x + "</div>";
        }
        document.getElementById("result").innerHTML += "<br>"
    }
    for (a = 0; a < result.length; a++) {
        document.getElementById("a" + result[a].x + "b" + result[a].y).style.background = "green";
    }
    console.log(result)

}