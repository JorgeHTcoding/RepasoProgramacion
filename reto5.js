var ColoresArcoiris = /** @class */ (function () {
    function ColoresArcoiris() {
        this.arrayColores = [];
    }
    ColoresArcoiris.prototype.estaOno = function (array) {
        var losColores = ["Rojo", "Naranja", "Amarillo", "Verde", "Azul", "Índigo", "Violeta"];
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < losColores.length; j++) {
                if (array[i] == losColores[j]) {
                    console.log(losColores[j] + " SI está entre los colores del arcoiris");
                }
            }
        }
    };
    return ColoresArcoiris;
}());
var prueba1 = new ColoresArcoiris();
prueba1.estaOno(["Verde", "Negro", "Dorado", "Carricoche", "Azul"]);
