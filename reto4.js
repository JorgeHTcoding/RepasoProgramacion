var Inversor = /** @class */ (function () {
    function Inversor() {
        this.array = [];
    }
    Inversor.prototype.invertir = function (array) {
        var arrayInv = [];
        var valorInv = 0;
        for (var i = array.length - 1; i >= 0; i--) {
            arrayInv[valorInv] = array[i];
            valorInv++;
        }
        return arrayInv;
    };
    return Inversor;
}());
var invert = new Inversor();
console.log(invert.invertir([1, 2, 3, 4, 5, 6]));
