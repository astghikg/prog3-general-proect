var socket = io.connect('http://localhost:3000');
var xqanak = 40;
var yqanak = 40;
var side = 15;

function setup() {
    createCanvas(xqanak * side, yqanak * side);

}

socket.on("matrix", function (data) {

    for (i in data) {
        for (j in data) {
            if (data[i][j] == 1) {
                fill(0, 122, 0);
                rect(i * side, j * side, side, side);
            }
            else if (data[i][j] == 2) {
                fill(255, 255, 0);
                rect(i * side, j * side, side, side);
            }
            else if (data[i][j] == 3) {
                fill(255, 0, 0);
                rect(i * side, j * side, side, side);
            }
            else if (data[i][j] == 4) {
                fill(0, 0, 255);
                rect(i * side, j * side, side, side);
            }
            else if (data[i][j] == 5) {
                fill(255, 255, 255);
                rect(i * side, j * side, side, side);
            }
            else {
                fill(col);
                rect(i * side, j * side, side, side);
            }
        }
    }
});
socket.on('nerkir', colors);

socket.on('merannn', function () {
    background('black');
});

var col = '#acacac';
function colors(weather) {
    if (weather == 'garun') {
        col = '#00ff00';
    }
    else if (weather == 'amar') {
        col = '#ffff00';
    }
    else if (weather == 'ashun') {
        col = '#ff6600';
    }
    else if (weather == 'dzmer') {
        col = '#80ffff';
    }

}




















