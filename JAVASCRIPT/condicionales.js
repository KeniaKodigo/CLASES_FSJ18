//estructuras condicionales

let cadena = prompt("Ingresa un texto");
//length: saber el tamaño de una cadena o arreglo
if(cadena.length > 5){
    document.write("Tu mensaje tiene mas de 5 caracteres :)");
}else{
    document.write("Tu mensaje no tiene mas de 5 caracteres :(");
}

//operador ternario 
//rango de numeros, 50 y 150
let numero = prompt("Ingresa un numero");
numero >= 50 && numero <= 150 ? document.write("estas en el rango") : document.write("no estas en el rango");

//condicion simple, condiciones anidadas, condiciones compuestas

//switch
//forma de pago => bitcoin, tarjeta, efectivo, deposito
let forma_pago = prompt("Ingresa una forma de pago");
//toLowerCase: devuelve la cadena en minuscula
switch(forma_pago.toLowerCase()){
    case "bitcoin":
        document.write("vas a pagar por medio de bitcoin");
        //break es la forma de salir si el caso se cumple y no seguir evaluando las siguientes condiciones
        break;
    case "tarjeta":
        document.write("pagaras con tarjeta de credito");
        break;
    case "efectivo":
        document.write("vas a pagar en efectivo");
        break;
    default:
        document.write("ingresa correctamente la forma de pago");
}