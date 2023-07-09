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
        `;

        //agregando la fila al elemento tbody
        tbody.appendChild(fila);
    })
}
