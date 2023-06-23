let estudiantes = [
    {
        nombre: "Carlos Solis",
        direccion: "San Salvador",
        bootcamp: "FSJ18",
        edad: 25
    },
    {
        nombre: "Katerin Angel",
        direccion: "San Miguel",
        bootcamp: "FSJ15",
        edad: 17
    },
    {
        nombre: "Abraham Bamaca",
        direccion: "San Vicente",
        bootcamp: "FSJ18",
        edad: 25
    },
    {
        nombre: "Roberto Salinas",
        direccion: "San Salvador",
        bootcamp: "FSJ12",
        edad: 23
    },
    {
        nombre: "Carolina Huezo",
        direccion: "San Miguel",
        bootcamp: "FSJ15",
        edad: 25
    },
]

estudiantes.map(persona => {
    if(persona.direccion == "San Salvador"){
        document.write("Estudiante: " + persona.nombre + "<br>");
    }
})

//metodo filter => sirve para filtrar datos de un arreglo (condicion)
//siempre pide un nuevo arreglo []
document.write("<h3>Utilizando Filter</h3>");
let arreglo_filtrado = estudiantes.filter(item => item.direccion == "San Salvador");

arreglo_filtrado.map(student => {
    document.write("Estudiante Filtrado: " + student.nombre + "<br>");
})

document.write("<h3>Filtrando y mapeando</h3>");
/**
 * inlcudes = es un metodo que devuelve true si el elemento existe en el arreglo y false si no existe
 */
estudiantes.filter(item => item.edad.includes("FSJ18")).map(estudiante => {
    document.write("Persona: " + estudiante.nombre + "<br>");
})
