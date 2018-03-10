/*
function fillArray(m, n) {
    var arr = [];
    for (var a = 0; a <= m; a++) {
        arr.push([])
        for (var b = 0; b <= n; b++) {
            arr[a][b] = Math.round(Math.random());
        }
    }
    return arr;
}
var side = 80;
   var arr = fillArray(5, 5)  
var grassArr = [];

function setup() {
 
    frameRate(5);
    createCanvas(arr[0].length * side, arr.length * side);
    background('#acacac');
    for (var a = 0; a < arr.length; a++) {
        for (var b = 0; b < arr[a].length; b++) {
            if (arr[a][b] == 1) {
                grassArr.push(new Grass(a,b,1));
                
            }
        }
    }
    console.log(grassArr)
}


function draw() {
    for (var y = 0; y < arr.length; y++) {
        for (var x = 0; x < arr[y].length; x++) {
            if (arr[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            } else if (arr[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
        }
    }
}
*/


var matrix = [
    [4, 0, 1, 5, 3],
    [1, 0, 0, 0, 2],
    [0, 1, 0, 0, 2],
    [5, 0, 1, 0, 2],
    [1, 1, 0, 0, 2],
    [1, 1, 0, 0, 2],
    [1, 1, 1, 1, 2]
];


var side = 150;

var grassArr = [];
var xotakerner = [];

var gishatichner = [];
var soxunner = [];
var mardik = [];

function setup() {
    frameRate(2);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    var xot = new Grass(1, 2);
    var datarkVandakner = xot.yntrelVandak(0);


    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var xo = new Xotaker(x, y);
                xotakerner.push(xo);
                //norxotaker.push(xo);
            }
            else if (matrix[y][x] == 8) {

            }

            else if (matrix[y][x] == 3) {
                var gish = new gishatich(x, y);
                gishatichner.push(gish);
            }

            else if (matrix[x][y] == 4) {
                var ameni = new soxun(x, y);
                soxunner.push(ameni);
            }
             else if (matrix[x][y] == 5) {
                var MardArr = new mard(x, y);
                mardik.push(MardArr);
            }

        }
    }

}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("#660000");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("#ffa366");
                rect(x * side, y * side, side, side);
            }


        }
    }



    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }
    for (var i in xotakerner) {
        xotakerner[i].utel();
        xotakerner[i].bazmanal();
        xotakerner[i].mahanal();
    }
    for (var i in gishatichner) {
        gishatichner[i].sharjvel();
        gishatichner[i].utel();
        gishatichner[i].bazmanal();
        gishatichner[i].mahanal();
    }
    for (var i in soxunner) {
        soxunner[i].sharjvel();
        soxunner[i].utel();
        soxunner[i].bazmanal();
        soxunner[i].mahanal();
    }
    for (var i in mardik){
        mardik[i].sharjvel();
        mardik[i].utel();
        mardik[i].bazmanal();
        mardik[i].mahanal();

    }

}


























