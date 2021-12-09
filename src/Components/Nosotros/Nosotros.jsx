import React from 'react'
import './nosotros.css'
import { Link } from 'react-router-dom' 

function Nosotros() {
    const [values, setValues] = React.useState({contactonombre:'', contactocorreo:'', comentarioscontacto:''});

    const handleChange = (e) => {
    const { name, value } = e.target
    setValues(values => ({...values, [name]: value}))
    }
  
    const contactohandler = (e) => {
        e.preventDefault()
        alert('Gracias por tu pregunta '+values.contactonombre +  '!, te contactaremos pronto');
        e.target.reset();

    }



    
        return (
            <div className="Nosotros">
                <div className="contacto">
                <h2>Contacto</h2>
                <ul>
                    <li><a href="mailto:raztenia@gmail.com">raztenia@gmail.com</a></li>
                    <li><a href="https://wa.me/5215562567373"><img src={require(`../../images/wp.svg`).default} alt="whats" /></a></li>
                    <li>Reservaciones: <Link to='/Reservaciones'>Click aquí</Link></li>
                </ul>
                <div className="contactoForm">
                <h2>¿Tienes preguntas?</h2>
                    <form onSubmit={contactohandler} id="frmcont">
                        <label for="contactonombre">Tu nombre:
                        <input type="text" id="contactonombre" name="contactonombre" onChange={handleChange}/></label>
          
                        <label for="contactocorreo">Tu correo:
                        <input type="email" id="contactocorreo" name="contactocorreo" onChange={handleChange}/></label>
          
                        <label for="comentarioscontacto" >Tus preguntas o comentarios:
                        <input  type="text" id="comentarioscontacto" name="comentarioscontacto" onChange={handleChange}/></label>

                        <button type="submit"  >¡Contáctenme!</button>
                       
                    </form>
                </div>
            </div>
            <div className="mapa">
                <img src={require(`../../images/kiosco.JPG`).default} alt="mapa" />
            </div>
            </div>
        
    );
  }
  
  export  {Nosotros}