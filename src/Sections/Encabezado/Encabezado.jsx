import React from 'react'
import { Link } from 'react-router-dom' 
import './encabezado.css';

function Encabezado(){
    return (   
    <header className="header">
    <div className="logoyname">
    
    <Link to='/'><img src={require(`../../images/logo.png`).default} alt="logo" /></Link>
    <h1 className="titulo">Roca de Guía</h1>
      
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