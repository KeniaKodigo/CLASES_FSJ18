import React, {useState} from 'react'
import listado from './persona.json'


export default function Lista() {
    //utilizando el hook useState() => sirve para asignar un estado al componente, un estado guarda la informacion y la actualiza para el componente

    /**
     * primer parametro: guarda como empieza y finaliza el estado y lo llamamos cuando queremos imprimir el estado
     * segundo parametro: actualiza el estado, lo vamos a llamar cuando queramos actualizar el estado
     */
    //iniciamos el estado con el json
    const [usuarios, setUsuarios] = useState(listado);
    //usuarios = 0 => como empieza el estado
    //setUsuarios(10) => actualizamos el estado
    //usuario = 10 => como termina el estado

    //creando el metodo del evento onclick
    
    //creando funciones de flecha
    const eliminarUsuarios = () => {
        setUsuarios([]);
        console.log("se vacio la lista");
    }

    const recuperarUsuarios = () => {
        setUsuarios(listado);
    }

    console.log(usuarios);
    return (
        <div>
            <h2>Listado de Usuarios</h2>
            <button onClick={eliminarUsuarios}>Eliminar Lista</button><br />
            <button onClick={recuperarUsuarios}>Recuperar Lista</button><br />

            {
                /** iteramos el json con el estado
                 * parametro persona = valores de cada posicion del arreglo
                 * parametro index = representa las posiciones del arreglo
                */
                usuarios.map((persona, index) => {
                    //asignamos los atributos de los objetos que hay en el JSON
                    return (
                        <section>
                            <article>
                                <img src={persona.imagen} alt={persona.nombre} />
                                <h5>Usuario: {persona.nombre}</h5>
                                <p>Hola! tengo {persona.edad} años de edad</p>
                            </article>
                        </section>
                    )
                })
            }

        </div>
    )
}


//rfc
/*eliminar_funcion();

las funciones puras si se pueden llamar antes o despues
function eliminar_funcion(){

}

las funciones flechas no se pueden llamar antes

const eliminar_flecha = () => {

}

eliminar_flecha(); */
