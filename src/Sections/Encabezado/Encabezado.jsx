import React from 'react'
import { Link } from 'react-router-dom' 
import './encabezado.css';

function Encabezado(){
    return (   
    <header className="header">
    <div>
      <h1>Roca de Guía</h1>
      <img src={require(`../../images/logo2.png`).default} alt="logo" />
    </div>
    
    <nav className="navegador">
    <Link to='/'>Inicio</Link>
    <Link to='/Menu'>Menú</Link>
    <Link to='/Nosotros'>Nosotros</Link>
    <Link to='/Blog'>Blog</Link>
    <Link to='/Reservaciones'>Reservaciones</Link>
    </nav>

    
    
  </header>
    )
}

export { Encabezado }