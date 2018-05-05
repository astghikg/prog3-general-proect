class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.directions = [];
    }


    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
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
        var miVandak = random(datarkVandakner);
        if (miVandak) {
            var newX = miVandak[0];
            var newY = miVandak[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 2;

            this.y = newY;
            this.x = newX;


            //mernel
            this.energy--;
            if (this.energy <= 0) {
                this.die();

            }
        }

    }

    eat() {
        var vandak = this.chooseCell(1);
        var mekvandak = random(vandak);
        if (mekvandak) {
            var newX = mekvandak[0];
            var newY = mekvandak[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 2;

            this.y = newY;
            this.x = newX;
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

            //bazmanal
            this.energy++;
            if (this.energy >= 12) {
                this.mul();
            }
        }
        else {
            this.move();
        }


    }

    die() {
        for (var i in GrassEaterArr) {
            if (this.x == GrassEaterArr[i].x && this.y == GrassEaterArr[i].y) {
                matrix[this.y][this.x] = 0;
                GrassEaterArr.splice(i, 1);
                break;
            }
        }

    }
    mul() {
        var vandak = this.chooseCell(0);
        var mekvandak = random(vandak);
        if (mekvandak && this.energy >= 12) {
            var newX = mekvandak[0];
            var newY = mekvandak[1];
            matrix[newY][newX] = this.index;

            var newGrassEater = new GrassEater(newX, newY, this.index);
            GrassEaterArr.push(newGrassEater);
            this.energy = 0;
        }

    }

}