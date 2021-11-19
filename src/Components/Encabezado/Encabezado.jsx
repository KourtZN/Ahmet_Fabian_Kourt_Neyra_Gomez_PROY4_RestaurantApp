import React from 'react'
import { Link } from 'react-router-dom' 
import './encabezado.css';

function Encabezado(){
    return (   
    <header className="header">
    <h1>Cafetería El Espiral</h1>
    <nav className="navegador">
    <Link to='/'>Menú</Link>
    <Link to='/2'>Click Me 2</Link>
    <Link to='/Menu'>Blog</Link>
    <Link to='/Reservaciones'>Reservaciones</Link>
    </nav>

    
    
  </header>
    )
}

export { Encabezado }