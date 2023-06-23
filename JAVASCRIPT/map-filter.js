/**
 * MAP() => iterar arreglos
 * - mapea de manera optimizada
 * - puedo retornar un nuevo arreglo 
 * - puedo actualizar el arreglo
 * - visualizar indice y valor
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

/**
 * indice => posicion de los elementos del arreglo //0 1 2
 * valor => los elementos de cada posicion
 * callback => llamado denuevo al arreglo
 */
document.write("<h3>Arreglo Viejito</h3>");
estudiantes.map(estudiante => {
    estudiante.direccion = "Chalatenango";
    document.write("Estudiante: " + estudiante.nombre + "<br>Bootcamp: " + estudiante.bootcamp + "<br>Direccion: " + estudiante.direccion + "<br>");
})
console.log(estudiantes); //modifico el arreglo

document.write("<h3>Nuevo Arreglo</h3>");
//creamos un nuevo arreglo con la informacion del arreglo "estudiantes"
let nuevo_arreglo = estudiantes.map(value => {
    value.bootcamp = "FSJ18";
    return value; //retornamos nombre, direccion, bootcamp al arreglo "nuevo_arreglo"
})
console.log(nuevo_arreglo);
//mapeamos el nuevo arreglo con su informacion
nuevo_arreglo.map(item => {
    document.write("Estudiante: " + item.nombre + "<br>Bootcamp: " + item.bootcamp + "<br>Direccion: " + item.direccion + "<br>");
})

/*nuevo_arreglo = [
    {
        nombre: "Carlos Solis",
        direccion: "San Salvador",
        bootcamp: "FSJ18"
    },
    {
        nombre: "Katerin Angel",
        direccion: "San Miguel",
        bootcamp: "FSJ18"
    },
    {
        nombre: "Abraham Bamaca",
        direccion: "San Vicente",
        bootcamp: "FSJ18"
    },
    {
        nombre: "Roberto Salinas",
        direccion: "San Salvador",
        bootcamp: "FSJ18"
    },
    {
        nombre: "Carolina Huezo",
        direccion: "San Miguel",
        bootcamp: "FSJ18"
    },
]*/
