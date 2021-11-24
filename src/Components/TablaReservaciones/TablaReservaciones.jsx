import React from 'react'
import db from '../../firebase/config'
import {onSnapshot, collection} from 'firebase/firestore'

import "./tablareservaciones.css"

function TablaReservaciones(){

    const[reservaciones,setReservaciones] = React.useState([])

    React.useEffect(() => {
        onSnapshot(collection(db,'reservaciones'),(snapshot) => {
            
            snapshot.docs.map((doc) => setReservaciones((prevState) => [...prevState, doc.data()]) )
        })
    },[])

    const showReservaciones = (reservacion) => {
        console.log(reservacion)
        return <tr>
            <td>{reservacion.Nombre}</td> 
            <td>{reservacion.Hora}</td> 
            <td>{reservacion.email}</td> 
            <td>{reservacion.tel}</td> 
            <td>{reservacion.Comentarios}</td> 
            </tr>
    }


    return <table className="tablareserv">
        <tr>
            <td>Nombre</td> 
            <td>Hora</td> 
            <td>email</td> 
            <td>Teléfono</td> 
            <td>Comentarios</td> 
            </tr>
        {reservaciones.length ? reservaciones.map((reservacion) => showReservaciones(reservacion)) : 'no hay'}
    </table>
}

export{TablaReservaciones}