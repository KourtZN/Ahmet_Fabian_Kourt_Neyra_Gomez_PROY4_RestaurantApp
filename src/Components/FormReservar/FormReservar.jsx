import React from 'react'
import './formreservar.css'
import { TablaReservaciones } from '../TablaReservaciones/TablaReservaciones'

function FormReservar(){
    return (

      <div>
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
          <label>En qué horario nos vistarás:
            <input type="time" />
          </label>
          <label>¿Tienes comentarios adicionales?
            <input type="text" />
          </label>
            <button type="submit" >Reservar</button>
        </form>

        <TablaReservaciones/>

        </div>
      )
}

export { FormReservar }