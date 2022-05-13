//Reto 3

function calculoImpares (numeros:number):number{
    let impares;
    
        for(let i=0; i <numeros ; i++){
            if(i%2 != 0){
           impares = console.log(i);
            }
        }return impares
    }    
    
//Reto 4
    
    function invertir(array:number[]):number[]{
        let arrayInv:number[] = [];
        let valorInv = 0;
       //hacemos el for loop "invertido" para recorrerlo de atrás hacia adelante y nada más iremos guardando cada uno de los valores de las posiciones dentro del nuevo array vacio.
           for(let i = array.length -1 ; i >= 0; i--){
             
             arrayInv[valorInv] = array[i]
               valorInv++
       
            }return arrayInv
         
        
       }

//Reto 5

       function  estaOno(array:string[]):void{

       let losColores = ["Rojo","Naranja","Amarillo","Verde","Azul","Índigo","Violeta"]
       
       for(let i = 0; i < array.length; i++ ){
           for(let j = 0; j <losColores.length;j++){
            if(array[i] == losColores[j]){            
            console.log(losColores[j] + " SI está entre los colores del arcoiris")                            
                  }
              }
          } 
       }

//Reto 6

function calculoPares (numeros:number[]):number{
    
    let pares:number;
    
        for(let i=0; i < numeros.length ; i++){
            if(numeros[i] % 2 == 0){
            console.log(numeros[i] + " es un número par");
            }
        }return pares
    }    

//Reto 8

export function sumaCaracteres(arrayCaracter:string[]):number{

        let resultado:number= 0;
    for(let i = 0; i < arrayCaracter.length; i++){
       resultado += arrayCaracter[i].length    
    }
    
        return resultado
    }
    
//Reto 10
//le meto el import con fines demostrativos para enseñar la función completa aunque no funcione :D 

import { sumaCaracteres } from "./reto8"
import { esPar } from "./reto9"

let suma1:number = sumaCaracteres(["Casa", "Coche", "Ciudad", "Cesta"])
let suma2:number = sumaCaracteres(["Barco", "Baca", "Bicicleta", "Bisiesto" , "Brasil"])
let suma3:number = sumaCaracteres(["Venezuela", "Veneno", "Voltaje"])

let esPar1:string = esPar(suma1)
let esPar2:string = esPar(suma2)
let esPar3:string = esPar(suma3)

console.log(esPar1)
console.log(esPar2)
console.log(esPar3)


    
       