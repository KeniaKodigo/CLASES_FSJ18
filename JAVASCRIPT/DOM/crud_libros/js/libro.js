/**
 * asignacion de variables
 */

const btnGuardar = document.querySelector('#btnGuardar');
const txtCodigo = document.querySelector('#txtCodigo');
const txtTitulo = document.querySelector('#txtTitulo');
const txtGenero = document.querySelector('#txtGenero');
const txtAutor = document.querySelector('#txtAutor');
const txtFecha = document.getElementById('txtFecha');
const tbody = document.querySelector('tbody');
let arreglo_libros = [];
let nuevo_libro = true;

//metodo de escucha para guardar el libro
btnGuardar.addEventListener('click', () => {
    //condicionamos cuando el modal este vacio para registrar un nuevo libro
    if(nuevo_libro == true){
        //registramos un nuevo libro, agregamos un objeto con la informacion que el usuario nos ingrese en el modal
        objeto_libro = {
            codigo: txtCodigo.value,
            titulo: txtTitulo.value,
            genero: txtGenero.value,
            autor: txtAutor.value,
            fecha: txtFecha.value
        }

        //agregando libros al arreglo
        arreglo_libros.push(objeto_libro);
        console.table(arreglo_libros);
        listaLibros();
        //haciendo uso de JQUERY, ocultando el modal
        $('#exampleModal').modal('hide');
        vaciarModal();
        
    }else{
        //actualizamos un libro que ya existe

        //actualizando el objeto del libro
        objeto_libro.titulo = txtTitulo.value;
        objeto_libro.genero = txtGenero.value;
        objeto_libro.autor = txtAutor.value;
        objeto_libro.fecha = txtFecha.value;
        listaLibros();
        vaciarModal();
        $('#exampleModal').modal('hide');
    }
})

//metodo para vaciar los campos del modal
function vaciarModal(){
    txtCodigo.value = "";
    txtTitulo.value = "";
    txtGenero.value = "";
    txtAutor.value = "";
    txtFecha.value = "";
    nuevo_libro = true;
}

//metodo para enlistar los libros registrados
function listaLibros(){
    limpiarTabla();
    //mapeando el arreglo
    arreglo_libros.map(item => {
        //crear un elemento tr
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${item.codigo}</td>
            <td>${item.titulo}</td>
            <td>${item.genero}</td>
            <td>${item.autor}</td>
            <td>${item.fecha}</td>
            <td>
                <button class='btn btn-info' onclick="editarLibro(${item.codigo})" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
                <button class='btn btn-danger' onclick="eliminarLibro(${item.codigo})">Eliminar</button>
            </td>
        `;

        //agregando la fila al elemento tbody
        tbody.appendChild(fila);
    })
}

//metodo para eliminar los hijos repetidos
function limpiarTabla(){
    while(tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
    }
}

function editarLibro(codigo_libro){
    nuevo_libro = false;

    //encontrar el libro en base a su codigo
    let libro_encontrado = arreglo_libros.find(item => item.codigo == codigo_libro);
    console.log(libro_encontrado);
    //asignamos los atributos del libro encontrado al modal
    txtCodigo.value = libro_encontrado.codigo;
    txtTitulo.value = libro_encontrado.titulo;
    txtGenero.value = libro_encontrado.genero;
    txtAutor.value = libro_encontrado.autor;
    txtFecha.value = libro_encontrado.fecha;
}

function eliminarLibro(codigo_libro){
    arreglo_libros = arreglo_libros.filter(libro => libro.codigo != codigo_libro);
    listaLibros();
}
