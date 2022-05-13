class ColoresArcoiris{

public arrayColores:string[];

    constructor(){

    this.arrayColores = []

}

public  estaOno(array:string[]):void{
    let losColores = ["Rojo","Naranja","Amarillo","Verde","Azul","Índigo","Violeta"]
   
   for(let i = 0; i < array.length; i++ ){
       for(let j = 0; j <losColores.length;j++){
        if(array[i] == losColores[j]){            
        console.log(losColores[j] + " SI está entre los colores del arcoiris")                            
              }
          }
      } 
   }
}

let prueba1 = new ColoresArcoiris()
prueba1.estaOno(["Verde","Negro","Dorado","Carricoche" ,"Azul"])
