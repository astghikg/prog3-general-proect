var xqanak = 30;
var yqanak = 20;
var side = 15;

function setup() {
    createCanvas(xqanak * side, yqanak * side);
    background('#acacac');
}

socket.on("matrix", function (data) {
    for (i in data){
        for (j in data) {
            if (data[i][j] == 1) {
                fill(0, 122, 0);
                rect(i * side, j * side, side, side);
            }
            else if (data[i][j]  == 2) {
                fill(255, 255, 0);
                rect(i * side, j * side, side, side);
            }
            else if (data[i][j]  == 3) {
                fill(255, 0, 0);
                rect(i * side, j * side, side, side);
            }
            else if (data[i][j]  == 4) {
                fill(0, 0, 255);
                rect(i * side, j * side, side, side);
            }
            else if (data[i][j]  == 5) {
                fill(255, 255, 255);
                rect(i * side, j * side, side, side);
            }
            else {
                fill('#acacac');
                rect(i * side, j * side, side, side);
            }
        }
    }
});

















