import React from 'react'
import './platillo.css';


function Platillo(props) {
    return (
      <div className = "platillo">
          <h1>{props.nombre}</h1>
          <img src={require(`../../images/${props.ruta}`).default} alt={props.alt} />
      </div>
    );
  }
  
  export { Platillo };