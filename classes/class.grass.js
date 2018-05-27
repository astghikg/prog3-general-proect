var LivingCreature = require("./cnox.class");
module.exports = class Grass extends LivingCreature {

    mul() {
        this.multiply++;
        var vandak = this.chooseCell(0);
        var index = Math.floor(Math.random() * vandak.length);
        var newCell = vandak[index];
        if (this.multiply >= 2 && newCell) {
            console.log('bazmacav');
            xotbazm1++;
            console.log(xotbazm1);
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.multiply = 0;
        }

    }
}
