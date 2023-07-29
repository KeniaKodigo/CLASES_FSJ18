import React, {useEffect, useState} from 'react'

export default function Encabezado(props) {
    /**
     * useState = estado (manipulacion de como vas a iniciar el estado y como lo vas a terminar)
     */

    const [pokemones, setPokemones] = useState([]);
    console.log(pokemones); //[]

    const obtenerPokemones = () => {
        setPokemones(["pikachu","bulbasur","ivysur"]);

        //axios.get("link").then( ).catch((error))
    }


    /**
     * funcion anonima
     * segundo parametro []=> limitas los efectos secundarios que hace el estado
     */
    useEffect(() => {
        setPokemones(["miau","charmender","mewto"]);
    }, [])

    /*setPokemones(["pikachu","bulbasur","ivysur"]);
    console.log(pokemones); //["pikachu","bulbasur","ivysur"]*/
    console.log(pokemones);
    return (
        <div>
            <h1>Bienvenido, {props.user}</h1>
            <button onClick={obtenerPokemones}>Pokemones</button>
        </div>
    )
}
