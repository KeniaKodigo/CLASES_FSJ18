import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

export default function Login() {
    const { loginWithRedirect } = useAuth0();

    return (
        <button className='btn btn-primary' onClick={ () => loginWithRedirect()}>Iniciar Sesion</button>
    )
}
