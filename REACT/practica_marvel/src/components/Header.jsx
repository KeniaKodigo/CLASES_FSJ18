import React from 'react'
//importando react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';

export default function Header() {
    return (
        <BrowserRouter>
            <header>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Comics</li>
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
            </Routes>
        </BrowserRouter>
    )
}
