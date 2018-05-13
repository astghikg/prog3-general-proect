var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public/index.html");
});

app.listen(3000, function () {
    console.log("Example is running on port 3000");
});

var xqanak = 30;
var yqanak = 20;
var grassArr = [];
var GrassEaterArr = [];
var gishatichArr = [];
var amenakerArr = [];
var mahArr = [];

var matrix = [];
for (var y = 0; y < yqanak; y++) {
    matrix[y] = [];
    for (var x = 0; x < xqanak; x++) {
        matrix[y][x] = Math.round(Math.random() * 3);
    }
}
var side = 15;

var amenaker = 2;
while (amenaker > 0) {
    var x = Math.round(random(xqanak - 1));
    var y = Math.round(random(yqanak - 1));
    if (matrix[y][x] == 0) {
        matrix[y][x] = 4;
        amenaker--;
    }

}
var mah = 1;
while (mah > 0) {
    var x = Math.round(random(xqanak - 1));
    var y = Math.round(random(yqanak - 1));
    if (matrix[y][x] == 0) {
        matrix[y][x] = 5;
        mah--;
    }

}

for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[0].length; x++) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y, 1);
            grassArr.push(gr);
        }
        else if (matrix[y][x] == 2) {
            var great = new GrassEater(x, y, 2)
            GrassEaterArr.push(great);
        }
        else if (matrix[y][x] == 3) {
            var gish = new Gishatich(x, y, 3)
            gishatichArr.push(gish);
        }
        else if (matrix[y][x] == 4) {
            var amen = new Amenaker(x, y, 4)
            amenakerArr.push(amen);
        }
        else if (matrix[y][x] == 5) {
            var mahik = new Mah()
            mahArr.push(mahik);
        }

    }
}
console.log(grassArr);
console.log(GrassEaterArr);
console.log(gishatichArr);
console.log(amenakerArr);

for (var i in grassArr) {
    grassArr[i].mul();
}

for (var j in GrassEaterArr) {
    GrassEaterArr[j].eat();
}

for (var j in gishatichArr) {
    gishatichArr[j].eat();
}
for (var j in amenakerArr) {
    amenakerArr[j].move();
}
for (var j in mahArr) {
    mahArr[j].mernel();
}
