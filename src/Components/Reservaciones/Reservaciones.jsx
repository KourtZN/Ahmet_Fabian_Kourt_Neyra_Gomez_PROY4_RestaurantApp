import React from 'react'
import db from '../../firebase/config'
import {onSnapshot, collection, addDoc} from 'firebase/firestore'
import { FormReservar } from '../FormReservar/FormReservar'

import "./reservaciones.css"

function Reservaciones(){

    const [reservaciones, setReservaciones] = React.useState([])
    const [show, setShow] = React.useState(false)

    React.useEffect(() => {
        onSnapshot(collection(db,'reservaciones'),(snapshot) => {
            
            snapshot.docs.map((doc) => setReservaciones((prevState) => [...prevState, doc.data()]) )
        })
    },[])

    const handleNewReservacion = async () => {

        const Nombre = prompt('Nombre')
        const date = prompt('date')

        const collectionRef = collection(db,'reservaciones')
        const payload = {Nombre: Nombre, date: date}

        await addDoc(collectionRef, payload)

    }

    const listaReservaciones = (reservacion) => {
        console.log(reservacion)
        return <tr>
            <td>{reservacion.Nombre}</td> 
            <td>{reservacion.email}</td> 
            <td>{reservacion.tel}</td> 
            <td>{reservacion.Hora}</td> 
            <td>{reservacion.Fecha}</td> 
            <td>{reservacion.Comentarios}</td> 
            </tr>
    }

    const showForm = () => {
        setShow(!show)
    }

    let showFormulario = <button onClick={showForm}  className="btnreservar">Agregar Reservación</button>;
    show ? showFormulario = <><button onClick={showForm}  className="btnreservar">Cancelar</button><FormReservar/></> : showFormulario = <button onClick={showForm}  className="btnreservar">Agregar Reservación</button>

    return <div className="compReserv">
        <h1>Reservaciones Actuales</h1>
        <table className="tablareserv">
        <tr>
            <th>Nombre</th> 
            <th>email</th> 
            <th>Teléfono</th> 
            <th>Fecha</th> 
            <th>Hora</th> 
            <th>Comentarios</th> 
            </tr>
        {reservaciones.length ? reservaciones.map((reservacion) => listaReservaciones(reservacion)) : 'no hay'}
    </table>
    
    <div>{showFormulario}</div>
    </div>
}

export {Reservaciones}