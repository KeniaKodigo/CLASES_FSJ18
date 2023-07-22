import axios from 'axios';
import React, { useState } from 'react'

//busqueda por nombre
export default function Busqueda() {
    //estado donde vamos a obtener el arreglo del personaje en especifico
    const [personajes, setPersonajes] = useState([]);

    //estado donde vamos a tener el nombre del personaje
    const [nombre, setNombre] = useState("");

    //metodo para obtener la informacion del personaje
    const getPersonajeByNombre = () => {
        axios.get(`https://gateway.marvel.com/v1/public/characters?name=${nombre}&ts=1&apikey=c1900eb52930ed1b7ce840e189c99d54&hash=5781e9271c1ff2dab15c638283e5727f`).then((response) => {
            //actualizamos el arreglo con la informacion del personaje que ingreso el usuario
            setPersonajes(response.data.data.results);
        }).catch((error) => {
            console.log(error);
        })
    }

    //metodo para capturar el nombre del personaje
    const handleName = (e) => {
        //capturamos de la etiqueta el texto que esta ingresando el usuario
        console.log(e.target.value);
        //actualizamos el estado
        setNombre(e.target.value);
    }

    const buscarPersonaje = () => {
        //llamamos el metodo getPersonajeByNombre
        getPersonajeByNombre();
    }

    console.log(personajes);

    return (
        <div className='bg-dark text-white'>
            <div className='container'>
                <h1 className='text-center pt-4'>Encuentra tu personaje favorito!</h1>
                <label htmlFor="" className='form-label'>Ingresa el nombre del personaje</label>
                <input type="text" id='nombre' className='form-control' onChange={handleName}/>
                <button onClick={buscarPersonaje} className='btn btn-success mt-4'>Ver Personaje</button>
                <br />

                {
                    //validando si el arreglo del personaje esta vacio o no
                    personajes.length !== 0 ? (
                    //contenido del personaje
                    personajes.map((personaje, indice) => {
                        return (
                            <div className='p-4'>
                                <h2 className='text-center'>Hola Soy {personaje.name}</h2>
                                <div className='row'>
                                    <div className='col-md-4 mt-4'>
                                        <img src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`} alt="" className='img-fluid'/>
                                    </div>
                                    <div className='col-md-8 mt-4 px-5'>
                                        <h3 className='text-center'>Lista de Comics</h3>
                                        <ol>
                                            {
                                                //mapeando el objeto comics para obtener la lista
                                                personaje.comics.items.map((comic) => {
                                                    return (
                                                        <li>{comic.name}</li>
                                                    )
                                                })
                                            }
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        )
                    })

                    ) : (
                        <div class="alert alert-danger" role="alert">
                            No se encontraron coincidencia, escribe el nombre en ingles
                        </div>
                    )
                }
            </div>
        </div>
    )
}
