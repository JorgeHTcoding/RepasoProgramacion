var Atlas = /** @class */ (function () {
    function Atlas() {
        this.pais = "";
    }
    Atlas.prototype.MapaMundi = function (pais) {
        if (pais == "Egipto" || pais == "Marruecos" || pais == "Congo" || pais == "Etiopía" || pais == "Argelia") {
            console.log("Estás en el continente Africano");
        }
        else if (pais == "Brazil" || pais == "Estados Unidos" || pais == "Canadá" || pais == "México" || pais == "Paraguay") {
            console.log("Estás en el continente Americano");
        }
        else if (pais == "Japón" || pais == "China" || pais == "Vietnam" || pais == "Mongolia" || pais == "Singapur") {
            console.log("Estás en el continente Asiático");
        }
        else if (pais == "Alemania" || pais == "Ucrania" || pais == "España" || pais == "Francia" || pais == "Albania") {
            console.log("Estás en el continente Europeo");
        }
        else if (pais == "Australia" || pais == "Nueva Zelanda" || pais == "Guam" || pais == "Kiribati" || pais == "Papua Nueva Guinea") {
            console.log("Estás en el continente Oceánico");
        }
        else if (pais == "Antártida") {
            console.log("Estás en el continente Antártico");
        }
        else {
            console.log("Estamos trabajando en ampliar nuestro Atlas Geográfico o no has introducido el nombre del país entre comillas. ;]");
        }
    };
    return Atlas;
}());
var atlas = new Atlas();
atlas.MapaMundi("Chile");
