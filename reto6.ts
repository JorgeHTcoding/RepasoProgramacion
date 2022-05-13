function calculoPares (numeros:number[]):number{
    
    let pares:number;
    
        for(let i=0; i < numeros.length ; i++){
            if(numeros[i] % 2 == 0){
            console.log(numeros[i] + " es un número par");
            }
        }return pares
    }    
     calculoPares([1,7,5,4,2,8,10])