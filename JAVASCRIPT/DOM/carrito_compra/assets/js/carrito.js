/** aignacion de variables */
const carrito = document.getElementById('carrito');
const bodyCarrito = document.querySelector('tbody');
const footerCarrito = document.querySelector('tfoot');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('.lista-cursos');
//arreglo para los cursos que vaya seleccionando el usuario
let arregloCarrito = [];

cargarEventos();

//metodo para llamar a las demas funciones que se efectuaran en el carrito
function cargarEventos(){
    //addEvenlistener
    //asignamos la atencion al contenedor main para seleccionar un curso
    listaCursos.addEventListener('click', seleccionarCurso);
}

//metodo para saber que curso selecciono el usuario
function seleccionarCurso(e){
    //validar que el hipervinculo no genere la redireccion
    //preventDefault = es un metodo que cancela la accion por default de un elemento html
    e.preventDefault();

    //condicionamos si la persona le dio click al boton agregar curso
    //classList.contains => metodo para verificar si existe una clase en html devuelve true si la clase existe y false si no existe
    if(e.target.classList.contains('agregar-carrito')){
        //target => representa el llamado de un elemento html (etiqueta)

        //parentElement => sacamos el elemento padre de la etiqueta
        console.log(e.target.parentElement.parentElement);
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Curso Agregado',
            showConfirmButton: false,
            timer: 1500
        })
    }
}

//metodo para almacenar los valores del curso en un arreglo
function leerDatosCurso(curso){
    //console.log(curso);

    const objetoCurso = {
        imagen: curso.querySelector('img').src, //capturando la direccion de la imagen
        titulo: curso.querySelector('h5').textContent, //capturando el texto del h5
        precio: curso.querySelector('.precio').textContent, //$15.00
        id: curso.querySelector('a').getAttribute('data-id'), //sacando el valor que hay dentro del data-id
        cantidad: 1
    }

    //validar si el curso ya existe en el arreglo
    //some => metodo que retorna si la condicion se cumple en algun elemento del arreglo y false si no se cumple
    const existe_curso = arregloCarrito.some(curso => curso.id === objetoCurso.id);
    console.log(existe_curso);
    if(existe_curso){
        //iterando el arreglo para condicionar que curso vamos actualizar
        arregloCarrito.map(curso => {
            if(curso.id === objetoCurso.id){
                //incrementamos la cantidad del curso que ya existe y retornamos toda su informacion
                curso.cantidad += 1;
                return curso;
            }else{
                //retornamos la informacion de los demas cursos
                return curso;
            }
        })
    }else{
        arregloCarrito.push(objetoCurso);
    }
    //agregando el curso al arreglo
    //push() => agrega un elemento al arreglo (lo agrega de ultimo)
    console.table(arregloCarrito);
}

function guardarPedido(){

}


