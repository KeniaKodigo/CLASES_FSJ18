import React from 'react'
//importando react-router
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Comics from './Comics';
import Busqueda from './Busqueda';

export default function Header() {
    return (
        <BrowserRouter>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className='link'>Home</Link>
                        </li>
                        <li>
                            <Link to="/comics" className='link'>Comics</Link>
                        </li>
                        <li>Series</li>
                    </ul>
                </nav>
            </header>
            {/**
             * <Routes> contenedor donde asignamos las rutas que vamos a utilizar
             */}
            <Routes>
                {/** asignando ruta por ruta 
                 * path => nombre de la ruta (siempre llevan /)
                 * element => hace referencia al componente que va tener la ruta
                */}
                <Route path='/' element={<Home />}/>
                <Route path='/comics' element={<Comics />}/>
                <Route path='/busqueda' element={<Busqueda />}/>
            </Routes>
        </BrowserRouter>
    )
}
