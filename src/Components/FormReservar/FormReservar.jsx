import React from 'react'
import './formreservar.css'

function FormReservar(){
    return (
        <form className="reservar">
          <label>Nombre:
            <input type="text" />
          </label>
          <label>Email:
            <input type="email" />
          </label>
          <label>Teléfono:
            <input type="text" />
          </label>
          <label>Fecha en que nos visitarás:
            <input type="date" />
          </label>
          <label>Cuantas personas vendrán:
            <input type="number" />
          </label>
            <button type="submit" >Reservar</button>
        </form>
      )
}

export { FormReservar }