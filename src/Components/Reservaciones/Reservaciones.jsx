import React from 'react'
import db from '../../firebase/config'
import {onSnapshot, collection, addDoc} from 'firebase/firestore'
import "./reservaciones.css"

function Reservaciones(){

    const [reservaciones, setReservaciones] = React.useState([])
    const [show, setShow] = React.useState(false)
    const [values, setValues] = React.useState({Nombre: '',email: '',tel: '',Fecha: '',Hora: '',Comentarios: ''})
 
     React.useEffect(() => {
        onSnapshot(collection(db,'reservaciones'),(snapshot) => {
            snapshot.docs.map((doc) => setReservaciones((prevState) => [...prevState, doc.data()]) )
        })
    },[])
    

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({...values, [name]: value })
      }
    const handleNewReservacion = async (e) => {

        e.preventDefault()
        const collectionRef = collection(db,'reservaciones')
        const payload = values
        var table = document.getElementById("listaReserv");
        for(var i = table.rows.length - 1; i > 0; i--)
        {
            table.deleteRow(i);
        }
        await addDoc(collectionRef, payload)
        e.target.reset();

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
    show ? showFormulario = <><button onClick={showForm}  className="btnreservar">Cancelar</button>
                            <div>
        <form className="reservar" onSubmit={handleNewReservacion}>
          <label for="Nombre" className="formchild">Nombre:</label>
            <input type="text" id="Nombre" name="Nombre" className="formchild" onChange={handleChange}/>
          
          <label for="email" className="formchild">Email: </label>
            <input type="email" id="email" name="email" className="formchild" onChange={handleChange}/>
         
          <label for="tel" className="formchild">Teléfono:</label>
            <input type="text" id="tel" name="tel" className="formchild" onChange={handleChange}/>
          
          <label for="fecha" className="formchild">Fecha en que nos visitarás:</label>
            <input type="date" id="fecha" name="Fecha" className="formchild" onChange={handleChange}/>
          
          <label for="hora" className="formchild">En qué horario nos vistarás:</label>
            <input type="time" id="hora" name="Hora" className="formchild" onChange={handleChange}/>
          
          <label for="comments" className="formchild">¿Tienes comentarios adicionales?</label>
            <input type="text" id="comments" name="Comentarios" className="formchild" onChange={handleChange}/>

            <button type="submit" className="btnreservar">Reservar</button>
        </form>
        

        </div>
                        </> 
        : showFormulario = <button onClick={showForm}  className="btnreservar">Agregar Reservación</button>





    return <div className="compReserv">
        <h1>Reservaciones Actuales</h1>
        <table className="tablareserv" id="listaReserv">
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