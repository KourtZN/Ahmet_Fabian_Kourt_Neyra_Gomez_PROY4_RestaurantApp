import React from 'react'
import App from '../App/App'
//Routes
import { Routes , Route} from 'react-router-dom'
//sections
import {Main} from '../Sections/Main/Main'
import {Menu} from '../Components/Menu/Menu'
import {Blog} from '../Components/Blog/Blog'
import {Nosotros} from '../Components/Nosotros/Nosotros'
import {Reservaciones} from '../Components/Reservaciones/Reservaciones'
function Navigation() {

    return (<App>
        <Routes>
        <Route path="/" element={<Main/>} exact/>
        <Route path="/Menu" element={<Menu/>} exact/>
        <Route path="/Blog" element={<Blog/>} exact/>
        <Route path="/Nosotros" element={<Nosotros/>} exact/>
        <Route path="/Reservaciones" element={<Reservaciones/>} exact/>
        </Routes>

    </App>
    );

}

export {Navigation}

/*

Encabezado
*/ 