var Grass = require('./class.grass.js');
var GrassEater = require('./class.grasseater.js');
var Gishatich = require('./class.gishatich.js');
var Amenaker = require('./class.amenaker.js');


module.exports = class Mah {
    constructor() {
        this.multiply = 0;
    }
    mernel() {
        this.multiply++;

        if (this.multiply >= 16) {
            grassArr = [];
            GrassEaterArr = [];
            gishatichArr = [];
            amenakerArr = [];
            spanel = true;



        }
        if (this.multiply % 20 == 0) {
            console.log("exav");
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

                }
            }
            this.multiply = 0;
            spanel = false;

        }



    }


}