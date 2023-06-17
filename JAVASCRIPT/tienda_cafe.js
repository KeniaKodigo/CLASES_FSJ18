/**
 * variables, constantes, tipos de datos, operadores
 * estructuras de control, funciones
 */

//let: variable que trabaja local y no se puede sobredeclarar
//var: variable que trabaja de manera global y se puede sobredeclarar

var nombre = 'kenia'
nombre; //kenia
var nombre = 'jose';
nombre; //jose

let apellido = 'paiz'
apellido = 'chacon'
//let apellido 
function calcularEdad(){
    let edad
}
var dato; //undefined
let dato2;
const PI = 3.1416; //float, double
let numero = "5"; //string
let suma = 6 + numero;
suma; //11
let nulo = null; //null
let booleano = false; //true 

//asignacion de arreglos
let frutas = ["uva","manzana","sandia","fresa"];
console.log(frutas[2]);

let array_datos = Array(23,8.0,"hola",true,null);
console.log(array_datos);
console.table(array_datos);

//asignacion de objetos
let animal = {
    nombre: "pancho",
    color: "cafe",
    edad: 3,
    raza: "angora",
    comida: {
        desayuno: "pan con huevo",
        almuerzo: "pollo",
        cena: "pan"
    },
    hobbies: ["jugar con la lana","estar en el techo","dormir"]
}
console.log(animal.comida.desayuno); //entrando en un objeto
console.log(animal.hobbies[1]); //entrando en un objeto y arreglo

let estudiantes = [
    {
        nombre: "juan solis",
        bootcamp: "FSJ18"
    }, 
    {
        nombre: "diego hernandez",
        bootcamp: "FSJ18"
    },
    {
        nombre: "karen chacon",
        bootcamp: "FSJ18"
    }
]
console.log(estudiantes[0].nombre);

//estructura if-else if-else

//prompt
let cantidad = prompt("Cuantos cafes quieres?");

const PRECIO = 25;
let subTotal = 0;
let total = 0;

if(cantidad >= 5 && cantidad <= 10){
    subTotal = cantidad * PRECIO;
    total = subTotal - (subTotal * 0.20);
    document.write("Descuento del 20%, su total a pagar es $" + total); //${}
}else if(cantidad > 10 && cantidad <= 20){
    subTotal = cantidad * PRECIO;
    total = subTotal - (subTotal * 0.40);
    document.write(`Descuento del 40%, su total a pagar es $${total}`);
}else if(cantidad > 20){
    subTotal = cantidad * PRECIO;
    total = subTotal - (subTotal * 0.50);
    document.write(`Descuento del 50%, su total a pagar es $${total}`);
}else{
    total = cantidad * PRECIO;
    document.write("Tu total a pagar es $" + total + " no aplica descuento");
}
//console.log(Number(5) + Number(5)); //55







