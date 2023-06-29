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
    }
}

function guardarPedido(){

}