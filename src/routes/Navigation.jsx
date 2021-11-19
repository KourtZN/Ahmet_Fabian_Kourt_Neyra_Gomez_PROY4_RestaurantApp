import React from 'react'
import App from '../App/App'
//Routes
import { Routes , Route} from 'react-router-dom'
//sections
import {Menu} from '../Components/Menu/Menu'
import {Blog} from '../Components/Blog/Blog'
import {FormReservar} from '../Components/FormReservar/FormReservar'
function Navigation() {

    return (<App>
        <Routes>
        <Route path="/" element={<Menu/>} exact/>
        <Route path="/2" element={<Menu/>} exact/>
        <Route path="/Menu" element={<Blog/>} exact/>
        <Route path="/Reservaciones" element={<FormReservar/>} exact/>
        </Routes>

    </App>
    );

}

export {Navigation}

/*

Encabezado
*/ 