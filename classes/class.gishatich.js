var Square = require("./cnox.class");
module.exports = class Gishatich {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 15;
        this.index = index;
        this.directions = [];
    }


    getNewCoordinates() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y + 2],
            [this.x - 2, this.y],
            [this.x - 1, this.y],
            [this.x, this.y],
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],

        ];
    }

    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);

                }
            }
        }
        return found;
    }

    move() {
        var datarkVandakner = this.chooseCell(0);
        var index = Math.floor(Math.random()*datarkVandakner.length);
        var miVandak = datarkVandakner[index];
        if (miVandak) {
            this.energy--;

            var newX = miVandak[0];
            var newY = miVandak[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 3;

            this.y = newY;
            this.x = newX;

            if (this.energy <= 0) {
                this.die();
            }

        }
    }


    die() {
        for (var i in gishatichArr) {
            if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                matrix[this.y][this.x] = 0;
                gishatichArr.splice(i, 1);
                break;
            }
        }

    }

    eat() {
        var vandak = this.chooseCell(2);
        var index = Math.floor(Math.random()*vandak.length);
        var mekvandak = vandak[index];
        if (mekvandak) {
            this.energy++;
            var newX = mekvandak[0];
            var newY = mekvandak[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 3;

            this.y = newY;
            this.x = newX;
            for (var i in GrassEaterArr) {
                if (newX == GrassEaterArr[i].x && newY == GrassEaterArr[i].y) {
                    GrassEaterArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 18) {
                this.mul();
            }
        }
        else {
            this.move();
        }


    }
    mul() {
        var vandak = this.chooseCell(0);
        var index = Math.floor(Math.random()*vandak.length);
        var mekvandak = vandak[index];
        if (mekvandak) {
            var newX = mekvandak[0];
            var newY = mekvandak[1];
            matrix[newY][newX] = this.index;

            var newgishatich = new Gishatich(newX, newY, this.index);
            gishatichArr.push(newgishatich);
            this.energy = 10;


        }
    }
}