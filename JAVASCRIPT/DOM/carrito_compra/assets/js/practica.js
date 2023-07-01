
let arreglo = [2,3,4,5,23,19,27];

//some() => true, false (||)

//every() => true, false (&&)

arreglo.every(numero => numero > 15); //false
arreglo.some(numero => numero > 15); //true


let carrito = [
    {
        imagen: "",
        titulo: "html",
        id: "1",
        cantidad: "2"
    },
    {
        imagen: "",
        titulo: "html",
        id: "4"
    },
    {
        imagen: "",
        titulo: "html",
        id: "6"
    },
    {
        imagen: "",
        titulo: "html",
        id: "1"
    },
]


let arreglo2 = ["ramon","carlos","danny","sara"];
//sacar elementos en especifico de un arreglo
arreglo2.slice(0, 1); //ramon
//sirve para eliminar un elemento
arreglo2.slice(1, -1); //carlos

let string = "$15.00"; 
 //15.00
console.log(otro2);
//carlos, danny
