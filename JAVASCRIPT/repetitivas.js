/**
 * bucles: contador, limitante, incremento/decremento
 * 
 * for, foreach, while, do while, for in, for of
 */

/*let texto = prompt("ingresa un texto");

//i++
//i = i + 1
for(let i = 0; i < texto.length; i++){
    /*
        texto = hola
        texto[0] = h
        texto[1] = o
        texto[2] = l
        texto[3] = a
    
    console.log(texto[i]);
} */


//while

//recorrer una cadena
function iterarCadena(cadena){
    let contador = 0;
    while(contador < cadena.length){ //3
        /**
         * cadena[0] = H
         * cadena[1] = o
         * cadena[2] = l
         * cadena[3] = a
         */
        document.write(cadena[contador] + "<br>");
        contador++;
    }
}
iterarCadena("Hola");

function contarVocales(arreglo){ //[]
    let contador2 = 0;
    let contar_vocales = 0;
    while(contador2 < arreglo.length){
        if(arreglo[contador2] == "a" || arreglo[contador2] == "e" || arreglo[contador2] == "i" || arreglo[contador2] == "o" || arreglo[contador2] == "u"){
            contar_vocales++; //contar_vocales = contar_vocales + 1
        }
        contador2++;
    }
    document.write("<br>Tu arreglo tiene " + contar_vocales + " vocales");
}
contarVocales(["c","a","r","l","o","s"]);
document.write("<h2>Utilizando Do While</h2>");
//do while
function contador(numero){
    do{
        document.write("numero: " + numero + "<br>");
        numero++;
    }while(numero <= 20)
}
contador(5);

function decremento(mensaje){
    let contador3 = mensaje.length - 1; //10
    do{
        document.write(mensaje[contador3]);
        contador3--;
    }while(contador3 >= 0);
}
decremento("Hola Mundo");

for(let k=3; k <= 23; k++){
    console.log(k);
}

//FOR OF (javascript) => evalua arreglos y cadenas donde se saca su valor
document.write("<h3>FOR OF</h3>");
let frutas = ["mandarina","pera","melocoton","sandia"];
for(const item of frutas){
    document.write("Fruta: " + item + "<br>");
}

//FOR IN => evalua arreglo y objetos donde se saca el indice de los elementos
document.write("<h3>FOR IN</h3>");
for(const value in frutas){
    document.write("Indice: " + value + "<br>");
}

let mascotas = [
    {
        nombre: "pancho",
        color: "cafe",
        edad: 2
    },
    {
        nombre: "pepe",
        color: "negro",
        edad: 3
    },
    {
        nombre: "talio",
        color: "cafe",
        edad: 5
    }
]

for(const posicion in mascotas){
    document.write(posicion);
    //interactuando con un atributo en especifico de un objeto
    console.table(mascotas[posicion].nombre);
}

console.log(mascotas[1].nombre);






