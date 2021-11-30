import React from 'react'
import './nosotros.css'
import { Link } from 'react-router-dom' 

function Nosotros() {
    
        return (
            <div className="Nosotros">
                <div className="contacto">
                <h1>Contacto</h1>
                <ul>
                    <li>Correo: raztenia@gmail.com</li>
                    <li>Teléfono: 5562567373</li>
                    <li>Instagram: @rocadeguia</li>
                    <li>facebook: @rocadeguiafb</li>
                    <li>Reservaciones: <Link to='/Reservaciones'>Click aquí</Link></li>
                </ul>
            </div>
            <div className="mapa">
                <img src={require(`../../images/kiosco.JPG`).default} alt="mapa" />
            </div>
            </div>
        
    );
  }
  
  export  {Nosotros}