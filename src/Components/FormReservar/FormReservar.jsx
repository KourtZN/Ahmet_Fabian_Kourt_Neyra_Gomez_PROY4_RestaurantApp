import React from 'react'
import './formreservar.css'

function FormReservar(){
    return (

      <div>
        <form className="reservar">
          <label for="Nombre" className="formchild">Nombre:</label>
            <input type="text" id="Nombre" className="formchild"/>
          
          <label for="email" className="formchild">Email: </label>
            <input type="email" id="email" className="formchild"/>
         
          <label for="tel" className="formchild">Teléfono:</label>
            <input type="text" id="tel" className="formchild"/>
          
          <label for="fecha" className="formchild">Fecha en que nos visitarás:</label>
            <input type="date" id="fecha" className="formchild"/>
          
          <label for="hora" className="formchild">En qué horario nos vistarás:</label>
            <input type="time" id="hora" className="formchild"/>
          
          <label for="comments" className="formchild">¿Tienes comentarios adicionales?</label>
            <input type="text" id="comments" className="formchild"/>
            <button type="submit" className="btnreservar">Reservar</button>
        </form>

        

        </div>
      )
}

export { FormReservar }