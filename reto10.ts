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

