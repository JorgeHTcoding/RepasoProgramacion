function tieneM (array:string[]):boolean{

let nombreM:boolean = true

let i = 0;
while(nombreM && i < array.length){
if( array[i][0] == "M"){
      return true
   
} else { 
    return false
}

}
}
console.log(tieneM(["Mepe","Muan","María","Macinta","Manoli","Mana"]))