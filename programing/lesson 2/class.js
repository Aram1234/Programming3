/*
class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
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

        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }
    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));

        if (this.multiply >= 5 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }

}
*/
/*
class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [];
        this.index = 2;

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




    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
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

}
*/
//verj
class gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [];
        this.index = 3;

    }

    sharjvel() {
        this.stanalNorKordinatner();
        var datarKvandaknerg = this.yntrelVandak(0);
        var norVandakg = random(datarKvandaknerg);
        if (norVandakg) {
            matrix[this.y][this.x] = 0;
            matrix[norVandakg[1]][norVandakg[0]] = 3;
            this.x = norVandakg[0];
            this.y = norVandakg[1];
            this.energy--;
        }

    }


   mahanal() {
        if (this.energy == 0) {
            for (var i in gishatichner) {
                if (gishatichner[i].x == this.x && gishatichner[i].y == this.y) {
                    gishatichner.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }
            }
        }

    }



    bazmanal() {

        if (this.energy == 7) {
            this.energy = 4;
            this.stanalNorKordinatner();
            var bazmanaluvandakner = this.yntrelVandak(0);
            var norVandak = random(bazmanaluvandakner);
            if (norVandak) {
                var x = norVandak[0];
                var y = norVandak[1];
                var Norxotaker = new gishatich(x, y);
                gishatichner.push(Norxotaker);
      
                matrix[y][x] = 3;


            }
        }


    }




    utel() {
        this.stanalNorKordinatner();
        var datarKvandaknerxot = this.yntrelVandak(2);
        var norVandakdexin = random(datarKvandaknerxot);
        if (norVandakdexin) {
            this.energy++;
            matrix[this.y][this.x] = 0;
            matrix[norVandakdexin[1]][norVandakdexin[0]] = 3;
            this.x = norVandakdexin[0];
            this.y = norVandakdexin[1];

            for (var i in xotakerner) {
                if (xotakerner[i].x == this.x && xotakerner[i].y == this.y) {
                    xotakerner.splice(i, 1);
                    break; 

                }

            }
        }

    }




    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
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


}
//verj
class soxun {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 4;
        this.directions = [];
        this.index = 4;

    }


    sharjvel() {
        this.stanalNorKordinatner();
        var datarKvandaknerg = this.yntrelVandak(0);
        var norVandakg = random(datarKvandaknerg);
        if (norVandakg) {
            matrix[this.y][this.x] = 0;
            matrix[norVandakg[1]][norVandakg[0]] = 4;
            this.x = norVandakg[0];
            this.y = norVandakg[1];
            this.energy--;

        }

    }


  mahanal() {
        if (this.energy == 0) {
            for (var i in soxunner) {
                if (soxunner[i].x == this.x && soxunner[i].y == this.y) {
                    soxunner.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }
            }
        }

    }


    bazmanal() {

        if (this.energy == 9) {
            this.energy = 4;
            this.stanalNorKordinatner();
            var bazmanaluvandakner = this.yntrelVandak(0);
            var norVandak = random(bazmanaluvandakner);
            if (norVandak) {
                var x = norVandak[0];
                var y = norVandak[1];
                var Norxotaker = new soxun(x, y);
                soxunner.push(Norxotaker);
                matrix[y][x] = 4;


            }
        }


    }




    utel() {
        this.stanalNorKordinatner();
        var datarKvandaknerxot = this.yntrelVandak(3);
        var norVandakdexin = random(datarKvandaknerxot);
        if (norVandakdexin) {
            matrix[this.y][this.x] = 0;
            matrix[norVandakdexin[1]][norVandakdexin[0]] = 4;
            this.x = norVandakdexin[0];
            this.y = norVandakdexin[1];
            this.energy++;
            for (var i in gishatichner) {
                if (gishatichner[i].x == this.x && gishatichner[i].y == this.y) {
                    gishatichner.splice(i, 1);
                    break;

                }

            }
        }

    }




    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
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




}
class mard{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [];
        this.index = 5;

    }


  sharjvel() {
        this.stanalNorKordinatner();
        var datarKvandaknerg = this.yntrelVandak(0);
        var norVandakg = random(datarKvandaknerg);
        if (norVandakg) {
            matrix[this.y][this.x] = 0;
            matrix[norVandakg[1]][norVandakg[0]] = 5;
            this.x = norVandakg[0];
            this.y = norVandakg[1];
            this.energy--;

        }

    }




  mahanal() {
        if (this.energy == 0) {
            for (var i in mardik) {
                if (mardik[i].x == this.x && mardik[i].y == this.y) {
                    mardik.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }
            }
        }

    }


    bazmanal() {

        if (this.energy == 10) {
            this.energy = 3;
            this.stanalNorKordinatner();
            var bazmanaluvandakner = this.yntrelVandak(0);
            var norVandak = random(bazmanaluvandakner);
            if (norVandak) {
                var x = norVandak[0];
                var y = norVandak[1];
                var Norxotaker = new mard(x, y);
                mardik.push(Norxotaker);
                matrix[y][x] = 5;


            }
        }


    }


   utel() {
        this.stanalNorKordinatner();
        var datarKvandaknerxot = this.yntrelVandak(4);
        var norVandakdexin = random(datarKvandaknerxot);
        if (norVandakdexin) {
            matrix[this.y][this.x] = 0;
            matrix[norVandakdexin[1]][norVandakdexin[0]] = 5;
            this.x = norVandakdexin[0];
            this.y = norVandakdexin[1];
            this.energy++;
            for (var i in soxunner) {
                if (soxunner[i].x == this.x && soxunner[i].y == this.y) {
                    soxunner.splice(i, 1);
                    break;

                }

            }
        }

    }



    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
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

}

























