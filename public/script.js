



function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    //matrix = [
    //[0, 0, 1, 0, 0],
    //[1, 0, 0, 0, 0],
    // [0, 1, 0, 2, 0],
    //[4, 0, 1, 0, 0],
    //[1, 1, 2, 4, 0],
    //[1, 1, 0, 0, 0],
    //[1, 1, 0, 3, 0]
    //  ];
}
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill(0, 122, 0);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill(255, 255, 0);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill(255, 0, 0);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill(0, 0, 255);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill(255, 255, 255);
                rect(x * side, y * side, side, side);
            }
            else {
                fill('#acacac');
                rect(x * side, y * side, side, side);
            }
        }
    }
}

















