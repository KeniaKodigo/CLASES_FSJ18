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
        nombre: "Abraham Bamaca", //td
        direccion: "San Vicente",
        bootcamp: "FSJ18"
    },
    {
        nombre: "Roberto Salinas", //roberto salinas
        direccion: "San Salvador",
        bootcamp: "FSJ12"
    },
    {
        nombre: "Carolina Huezo",
        direccion: "San Miguel",
        bootcamp: "FSJ15"
    },
]

//asignacion de variables

//llamando a la etiqueta tbody
let tabla = document.querySelector(".cuerpo-tabla");

//llamando la funcion para que se ejecute
dibujarTabla("");

//metodo para capturar el nombre de un estudiante
function buscarEstudiante(){
    let nombre = document.querySelector('#buscador');
    console.log(nombre.value);
    //llamando la funcion dibujarTabla para capturar lo que la persona ingrese en el input
    dibujarTabla(nombre.value);
}

//metodo para mapear el arreglo y retornar la informacion en la tabla
function dibujarTabla(nombre_estudiante){

    //llamamos a la funcion para limpiar la tabla
    limpiarTabla();
    //filtrando los datos que coincidad con lo que ingreso la persona

    //toLowerCase() = el texto se convierten en minusculas
    estudiantes.filter(estudiante => estudiante.nombre.toLowerCase().includes(nombre_estudiante)).map(item => {
        //creando el elemento <tr> para las filas de cada objeto del arreglo
        const fila = document.createElement('tr');

        //creamos las celdas que iran dentro de cada fila con los valores de cada estudiante del arreglo
        fila.innerHTML = `
            <td>${item.nombre}</td>
            <td>${item.direccion}</td>
            <td>${item.bootcamp}</td>
        `;

        //insertando la fila en el html (dentro del tbody)
        tabla.appendChild(fila);
    })
}

//metodo para eliminar hijo repetidos (anteriores) del tbody
function limpiarTabla(){
    //removeChild => se utiliza para remover hijos de un elemento
    while(tabla.firstChild){
        //removiendo el primer hijo de cada iteracion
        tabla.removeChild(tabla.firstChild);
    }
}

