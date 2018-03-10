class Xotaker extends KendaniEak {
    constructor(x, y, index){
        super(x, y, index);
        this.tariq = 0;
    }
   stanalNorKordinatner() {
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
   yntrelVandak(ch) {
       this.stanalNorKordinatner();
       return super.yntrelVandak(ch);
   }

     sharjvel() {

        this.stanalNorKordinatner();
        var datarKvandakner = this.yntrelVandak(0);
        var norVandak = random(datarKvandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy--;
            //console.log(this.energy);
        }

    }
    

    mahanal() {
        if (this.energy == 0) {
            for (var i in xotakerner) {
                if (xotakerner[i].x == this.x && xotakerner[i].y == this.y) {
                    xotakerner.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }
            }
        }

    }


    bazmanal() {

        if (this.energy == 8) {
            this.energy = 5;
            this.stanalNorKordinatner();
            var bazmanaluvandakner = this.yntrelVandak(0);
            var norVandak = random(bazmanaluvandakner);
            if (norVandak) {
                var x = norVandak[0];
                var y = norVandak[1];
                var Norxotaker = new Xotaker(x, y);
                xotakerner.push(Norxotaker);
      
                matrix[y][x] = 2;


            }
        }


    }

    utel() {
        this.stanalNorKordinatner();
        var datarKvandaknerxot = this.yntrelVandak(1);
        var norVandakdexin = random(datarKvandaknerxot);
        if (norVandakdexin) {
            this.energy++;
            //console.log(this.energy);
            matrix[this.y][this.x] = 0;
            matrix[norVandakdexin[1]][norVandakdexin[0]] = 2;
            this.x = norVandakdexin[0];
            this.y = norVandakdexin[1];

            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                    break;

                }

            }
        }
        else{
            this.sharjvel();
        }

    }

}
