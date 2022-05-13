//Reto 1
let diaN:number;
let mesN:string;

function signoZodiaco(diaN:number,mesN:string):string{
      
       
    if(((diaN >= 19 && diaN <= 31 ) && mesN == "Enero") || (diaN <= 15  && mesN == "Febrero")){
           return "Tu signo del zodiaco es Capricornio"       
       }
            else if(((diaN >= 16 && diaN <= 28 )  && mesN == "Febrero") || (diaN <= 11  && mesN == "Marzo")){
                return "Tu signo del zodiaco es Acuario"          
            }
            else if(((diaN >= 16 && diaN <= 31 )  && mesN == "Marzo") || (diaN <= 18  && mesN == "Abril")){
                return "Tu signo del zodiaco es Piscis"         
            }
            else if(((diaN >= 19 && diaN <= 30 )&& mesN == "Abril") || (diaN <= 13 && mesN == "Mayo")){
                return "Tu signo del zodiaco es Aries"       
            }
            else if(((diaN >= 14 && diaN <= 31 )  && mesN == "Mayo") || (diaN <= 19  && mesN == "Junio")){
                return "Tu signo del zodiaco es Tauro"        
            }
            else if(((diaN >= 20 && diaN <= 30 )  && mesN == "Junio") || (diaN <= 20  && mesN == "Julio")){
                return "Tu signo del zodiaco es Geminis"         
            }
            else if(((diaN >= 21 && diaN <= 31 )  && mesN == "Julio") || (diaN <= 9  && mesN == "Agosto")){
                return "Tu signo del zodiaco es Cáncer"        
            }
            else if(((diaN >= 10 && diaN <= 31 )  && mesN == "Agosto") || (diaN <= 15  && mesN == "Septiembre")){
                return "Tu signo del zodiaco es Leo"       
            }
            else if(((diaN >= 16 && diaN <= 30 ) && mesN == "Septiembre") || (diaN <= 30  && mesN == "Octubre")){
                return "Tu signo del zodiaco es Virgo"        
            }
            else if(((diaN >= 31 && diaN <= 31 ) && mesN == "Octubre") || (diaN <= 22  && mesN == "Noviembre")){
                return "Tu signo del zodiaco es Libra"        
            }
            else if((diaN >= 23 && diaN <=29) && mesN == "Noviembre" ){
                return "Tu signo del zodiaco es Escorpio"        
            }
            else if((diaN == 30  && mesN == "Noviembre") || (diaN <= 15  && mesN == "Diciembre")){
                return "Tu signo del zodiaco es Ofiuco"         
            }
            else if(((diaN >= 18 && diaN <= 31 ) && mesN == "Diciembre") || (diaN <= 15  && mesN == "Enero")){
                return "Tu signo del zodiaco es Sagitario"       
            } else{
                return "Introduce los valores correcots con el formato (dia de nacimiento en numero, nombre del mes de nacimiento entre comillas)"
            }
               
    }

    
  //Reto 2

  function MapaMundi(pais:string):void{
    
             
    if(pais == "Egipto" ||pais == "Marruecos" ||pais == "Congo" ||pais == "Etiopía" ||pais == "Argelia" )  {
           console.log("Estás en el continente Africano" )      
       }
            else if(pais == "Brazil" ||pais == "Estados Unidos" ||pais == "Canadá" ||pais == "México" ||pais == "Paraguay"){
                console.log("Estás en el continente Americano")          
            }
            else if(pais == "Japón" ||pais == "China" ||pais == "Vietnam" ||pais == "Mongolia" ||pais == "Singapur"){
                console.log("Estás en el continente Asiático" )        

            }else if(pais == "Alemania" ||pais == "Ucrania" ||pais == "España" ||pais == "Francia" ||pais == "Albania"){
                console.log("Estás en el continente Europeo"  )        

            }else if(pais == "Australia" ||pais == "Nueva Zelanda" ||pais == "Guam" ||pais == "Kiribati" ||pais == "Papua Nueva Guinea"){
                console.log("Estás en el continente Oceánico" )     

            }else if(pais == "Antártida" ){
                console.log("Estás en el continente Antártico")       
            }else{
                console.log("Estamos trabajando en ampliar nuestro Atlas Geográfico o no has introducido el nombre del país entre comillas. ;]")
            }
        }
    
    //Reto 9

    export function esPar (num:number){
    
        if(num % 2 == 0 ){
            return num + " Es un número par"
        } else { 
            return num + " Es un númer impar"
        }
        
        }