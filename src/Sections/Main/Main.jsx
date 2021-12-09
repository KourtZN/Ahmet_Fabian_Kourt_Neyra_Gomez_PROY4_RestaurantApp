import React from 'react'
import './main.css'

function Main(){
    return (
        <div className="maind"> 
        <p>Café</p>
        <img className="rdgl" src={require(`../../images/rdgl.png`).default} alt="rdgl" />
        <p>Haz una pausa. Bebe un café.</p>
        </div>
      )
}

export { Main }