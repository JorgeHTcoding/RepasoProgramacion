
export function sumaCaracteres(arrayCaracter:string[]):number{

    let resultado:number= 0;
for(let i = 0; i < arrayCaracter.length; i++){
   resultado += arrayCaracter[i].length    
}

    return resultado
}
