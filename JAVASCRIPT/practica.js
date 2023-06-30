/**
 * condicionales
 * if-else  if-else if-else switch
 * 
 * for, while, do while
 */


//if-else
//verificando si la persona puede votar en las elecciones

//parametro => es una variable donde se almacena un valor desconocido
function verificarVoto(edad){
    //let mensaje = "Estas asignando para las elecciones";
    let anios_falta = 0;
    if(edad >= 18){ //si es verdadero
        console.log("Si puedes votar");
    }else{ //sino (cuando es falso)
        anios_falta = 18 - edad;
        console.log("Aun no puedes votar, te faltan " + anios_falta + "años");
    }
}
//argumento => es el valor que se ingresa en el parametro
verificarVoto(22); //juan
verificarVoto(15); //maria
verificarVoto(90); //rodrigo

//if - else if - else (multiples condiciones)

function verificarPago(){
    //llamando el html
    //let tipo_pago = document.getElementById('tipoPago');
    let tipo_pago = document.querySelector('#tipoPago'); //elemento html
    if(tipo_pago.value == "Efectivo"){
        alert("Elegiste efectivo");
    }else if(tipo_pago.value == "Tarjeta de Credito"){
        alert("Elegiste Tarjeta de Credito");
    }else{
        alert("Elegiste paypall");
    }
}

//estaciones del año (switch)

//cargar eventos

//cargar_eventos
//cargarEventos clean code

//BUCLES => contador, hasta donde va llegar (condicion), incrementa/decremento

//25 - 50 
for(let contador=25; contador <= 50; contador++){
    console.log(contador + ","); //25,26,27,28....50
}

//100 - 75 => 100, 99, 98 .... 75
for(let contador2=100; contador2 >= 75; contador2--){
    console.log("decrementando: " + contador2);
}

function iterarPalabra(){
    let palabra = document.querySelector('.palabra').value; //hola
    /**
     * h*o*l*a*
     * 
     * 
     * length => devuelve el tamaño de una cadena o arreglo
     * 
     * palabra[0] = "h"
     * palabra[1] = "o"
     */
    for(let i=0; i < palabra.length; i++){
        document.write(palabra[i] + "*");
    }
    document.write("<br>");

    for(let j= palabra.length - 1; j >= 0; j--){
        document.write(palabra[j] + "*");
    }
}


/**
 * contador = contador + 1;
 * 25 = 25 + 1; //26
 * 26 = 26 + 1
 */

let estudiantes = [
    {
        nombre: "Carlos Solis",
        direccion: "San Salvador",
        bootcamp: "FSJ18"
    },
    {
        nombre: "Katerin Angel",
        direccion: "San Miguel",
        bootcamp: "FSJ15"
    },
    {
        nombre: "Abraham Bamaca",
        direccion: "San Vicente",
        bootcamp: "FSJ18"
    },
    {
        nombre: "Roberto Salinas",
        direccion: "San Salvador",
        bootcamp: "FSJ12"
    },
    {
        nombre: "Carolina Huezo",
        direccion: "San Miguel",
        bootcamp: "FSJ15"
    },
]

console.log(estudiantes[0]); //estatico

//while - do while
let arreglo_nombres = ["ana","maria","moises","rodrigo"];
document.write("<h2>Trabajando con while</h2>");
let contador3 = 0;
while(contador3 < arreglo_nombres.length){
    document.write("Tu nombre: " + arreglo_nombres[contador3] + "<br>");
    contador3++;
}

document.write("<h2>WHILE en decremento</h2>");
let contador4 = arreglo_nombres.length - 1;
while(contador4 >= 0){
    document.write("Tu nombre: " + arreglo_nombres[contador4] + "<br>");
    contador4--;
}

//do while (hacer mientras)
let contador5 = 24;
do{
    document.write("Numero: " + contador5);
    contador5++;
}while(contador5 < 12);






















