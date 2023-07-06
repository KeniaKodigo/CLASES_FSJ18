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

    //evento de escucha para vaciar el carrito
    vaciarCarrito.addEventListener('click', () => {
        Swal.fire({
            title: 'Estas seguro de vaciar el carrito?',
            text: "Se eliminaran todos los cursos seleccionados",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Vaciar Carrito!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Se vacio el carrito',
                'Ya no tienes ningun curso',
                'success'
              ).then(function(){
                    window.location = "index.html";
              })
            }
          })
    })

    //evento para ejecutar el metodo eliminarItem
    carrito.addEventListener('click', eliminarItem);
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

    carritoTabla();
}

//metodo para iterar el arreglo y asignarlo en la tabla html
function carritoTabla(){

    limpiarTabla(bodyCarrito);
    let total_cursos = 0;
    arregloCarrito.map(item => {
        //creando elemento html (tr)
        const tr = document.createElement('tr');
        //"10.00" * 1

        //slice => cadena, arreglo
        //let precio_actualizado = item.precio.slice(1, -1); //quitamos el $ del precio
        //substring => quita caracteres de una cadena
        let precio_actualizado = item.precio.substring(1);
        //15.0
        //Number() => convierte los numeros que estan en cada en dato numerico como int o double
        let subTotal = Number(precio_actualizado * item.cantidad);
        tr.innerHTML = `
            <td>
                <img src="${item.imagen}" width="100">
            </td>
            <td>${item.titulo}</td>
            <td>${item.precio}</td> 
            <td>${item.cantidad}</td>
            <td>${subTotal}</td>
            <td>
                <a href="#" class="borrar-item" data-id="${item.id}">X</a>
            </td>
        `;
        //total_cursos = total_cursos + subTotal
        total_cursos += subTotal;
        
        //agregamos las filas dentro del tbody
        bodyCarrito.appendChild(tr);
    })

    //creando fila para tfoot de la tabla (asignando el total de cursos)
    //toFixed() => asignando cuantos numeros salgan despues del punto
    //Math.round(5.6) = 6
    limpiarTabla(footerCarrito);
    const fila_foot = document.createElement('tr');
    fila_foot.innerHTML = `
        <td colspan="4">Total de Pedido</td>
        <td>$${total_cursos.toFixed(2)}</td>
    `;

    //agregando la fila en el tfoot
    footerCarrito.appendChild(fila_foot);
    console.log(total_cursos);
}

//eliminando los hijos anteriores de la tabla
function limpiarTabla(contenedor){
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}

function guardarPedido(){
    Swal.fire({
        title: 'Estas seguro de guardar el pedido?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar Pedido',
        denyButtonText: `No Guardar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('El pedido se cargara en tu tarjeta', '', 'success').then(function(){
            //recarga la pagina index
            window.location = "index.html";
          })
        } else if (result.isDenied) {
          Swal.fire('Cambios no guardados', '', 'info')
        }
    })
}

//metodo para eliminar un curso en especifico
function eliminarItem(e){
    //verificando si la clase 'borrar-item' existe
    if(e.target.classList.contains('borrar-item')){
        //obtener el id del curso
        const cursoId = e.target.getAttribute('data-id');
        console.log(cursoId);
        //filtrar todos los cursos que sean diferentes al id del curso que la persona selecciono
        arregloCarrito = arregloCarrito.filter(curso => curso.id !== cursoId);
        carritoTabla();
    }
}


