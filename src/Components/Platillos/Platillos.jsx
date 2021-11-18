import React from 'react'
import './platillos.css'
import { Platillo } from '../Platillo/Platillo.jsx';

function Platillos() {
    return (
        <div className="contenedorPlatillos">
        <Platillo nombre="capuccino"/>
        <Platillo nombre="moka"/>
        <Platillo nombre="espresso"/>
        <Platillo nombre="machiato"/>
        </div>
    );
  }
  
  export default Platillos

