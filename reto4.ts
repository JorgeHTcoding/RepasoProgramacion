class Inversor {

public array:number[];

    constructor(){

        this.array = []
    }
public invertir(array:number[]):number[]{
 let arrayInv:number[] = [];
 let valorInv = 0;
//hacemos el for loop "invertido" para recorrerlo de atrás hacia adelante y nada más iremos guardando cada uno de los valores de las posiciones dentro del nuevo array vacio.
    for(let i = array.length -1 ; i >= 0; i--){
      
      arrayInv[valorInv] = array[i]
        valorInv++

     }return arrayInv
  
 
}
}
let invert = new Inversor();
console.log(invert.invertir([1,2,3,4,5,6]))