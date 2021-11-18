import React from 'react'
import App from '../App/App'
//Routes
import { Routes , Route} from 'react-router-dom'
//sections
import { Encabezado } from '../Components/Encabezado/Encabezado'
import { Piedepagina } from '../Components/Piedepagina/Piedepagina'
import Platillos from '../Components/Platillos/Platillos'
function Navigation() {

    return (<App>
        <Routes>
        <Route path="/" element={<Encabezado/>} exact/>
        <Route path="/2" element={<Piedepagina/>} exact/>
        <Route path="/3" element={<Platillos/>} exact/>
        </Routes>

    </App>
    );

}

export {Navigation}