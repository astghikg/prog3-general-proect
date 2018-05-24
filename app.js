var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("public"));
app.get('/', function (req, res) {
    res.redirect('public/index.html');
});
server.listen(3000);
var Grass = require('./classes/class.grass.js');
var GrassEater = require('./classes/class.grasseater.js');
var Gishatich = require('./classes/class.gishatich.js');
var Amenaker = require('./classes/class.amenaker.js');
var Mah = require('./classes/class.mah.js');



grassArr = [];
GrassEaterArr = [];
gishatichArr = [];
amenakerArr = [];
mahArr = [];
var xqanak = 30;
var yqanak = 20;

matrix = [];
for (var y = 0; y < yqanak; y++) {
    matrix[y] = [];
    for (var x = 0; x < xqanak; x++) {
        matrix[y][x] = Math.round(Math.random() * 3);
    }
}

//amenakeri stexcum
var amenaker = 2;
while (amenaker > 0) {
    var x = Math.round(Math.random()*(xqanak - 1));
    var y = Math.round(Math.random()*(yqanak - 1));
    if (matrix[y][x] == 0) {
        matrix[y][x] = 4;
        amenaker--;
    }

}
//mahi stexcum
var mah = 1;
while (mah > 0) {
    var x = Math.round(Math.random()*(xqanak - 1));
    var y = Math.round(Math.random()*(yqanak - 1));
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

io.on('connection', function (socket) {
    setInterval(func, 500);
    function func() {
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
        io.sockets.emit('matrix', matrix);

    }

});



