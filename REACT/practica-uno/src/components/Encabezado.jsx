//componente funcional
/**
 * componente funcional => rfc
 * componente de clase => rcc
 */

import React from 'react'

export default function Encabezado() {
    return (
        <header className='encabezado'>
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
