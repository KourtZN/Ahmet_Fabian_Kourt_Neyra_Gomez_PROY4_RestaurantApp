import React from 'react'
import './platillo.css';


function Platillo(props) {
    return (
      <div className = "platillo">
          <h1>{props.nombre}</h1>
      </div>
    );
  }
  
  export { Platillo };