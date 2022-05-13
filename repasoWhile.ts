//Reto 7

function tieneM(array) {
    var nombreM = true;
    var i = 0;
    while (nombreM && i < array.length) {
        if (array[i][0] == "M") {
            return true;
        }
        else {
            return false;
        }
    }
}