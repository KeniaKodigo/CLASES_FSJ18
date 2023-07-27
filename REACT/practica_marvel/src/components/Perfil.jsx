import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function Perfil() {
    const { isAuthenticated, user } = useAuth0();
    /**
     * user = {
     *      picture: ruta de la imagen
     *      name: nombre del usuario
     *      email: correo del usuario
     * }
     */
    return (
        isAuthenticated && (
            <div className='bg-dark text-white text-center'>
                <div className='container'>
                    <img src={user.picture} alt={user.name} />
                    <h2>Usuario: {user.name}</h2>
                    <p>Correo: {user.email}</p>
                </div>
            </div>
        )
    )
}
