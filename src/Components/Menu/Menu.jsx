import React from 'react'
import './menu.css'
import { Platillo } from '../Platillo/Platillo.jsx';

function Menu() {
    return (
        <div className="contenedorPlatillos">
        <Platillo nombre="capuccino" ruta="capuchino.jpg" alt="capu"/>
        <Platillo nombre="moka" ruta="moka.jpg" alt="moka"/>
        <Platillo nombre="espresso" ruta="espresso.jpg" alt="espresso"/>
        <Platillo nombre="machiato" ruta="macchiato.jpg" alt="macchiato"/>
        <Platillo nombre="cafe de olla" ruta="cafe de olla.jpg" alt="cafe de olla"/>
        <Platillo nombre="frappuchino" ruta="frappuchino.jpg" alt="frappuchino"/>
        <Platillo nombre="Te" ruta="Te.jpg" alt="Te"/>
        <Platillo nombre="galleta" ruta="galleta.jpg" alt="galleta"/>
        <Platillo nombre="chocolate" ruta="chocolate.jpg" alt="chocolate"/>
        <Platillo nombre="rebanada" ruta="rebanada.jpg" alt="rebanada"/>
        </div>
    );
  }
  
  export  {Menu}

