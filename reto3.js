var Impares = /** @class */ (function () {
    function Impares() {
        this.numeros;
    }
    Impares.prototype.calculoImpares = function (numeros) {
        var impares;
        for (var i = 0; i < numeros; i++) {
            if (i % 2 != 0) {
                impares = console.log(i);
            }
        }
        return impares;
    };
    return Impares;
}());
var hoja1 = new Impares();
hoja1.calculoImpares(100);
