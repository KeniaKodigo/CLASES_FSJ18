//componente funcional
/**
 * componente funcional => rfc
 * componente de clase => rcc
 */

import React from 'react'

export default function Encabezado(props) {
    //utilizamos props para enviar informacion de un componente a otro
    return (
        <header className='encabezado'>
            <h1>{props.name}, estas utilizando props</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Lista</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </header>
    )
}
