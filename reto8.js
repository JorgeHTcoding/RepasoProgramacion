"use strict";
exports.__esModule = true;
exports.sumaCaracteres = void 0;
function sumaCaracteres(arrayCaracter) {
    var resultado = 0;
    for (var i = 0; i < arrayCaracter.length; i++) {
        resultado += arrayCaracter[i].length;
    }
    return resultado;
}
exports.sumaCaracteres = sumaCaracteres;
