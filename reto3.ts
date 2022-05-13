class Impares{

    public numeros:number;

constructor(){

    this.numeros;
    
}
public calculoImpares (numeros:number):number{
let impares;

    for(let i=0; i <numeros ; i++){
        if(i%2 != 0){
       impares = console.log(i);
        }
    }return impares
}    
}


let hoja1 = new Impares();
hoja1.calculoImpares(100);

