import React from 'react'
import './piedepagina.css'

function Piedepagina(){
    return <footer className="footer">
        <div className="footerRights">
            <p>@Todos los derechos reservados. Este es un restaurante/cafetería ficticia... Por el momento</p>
            <a href="https://wa.me/5215562567373"><img src={require(`../../images/wp.svg`).default} alt="whats" /></a>
        </div>
        

    </footer>
}

export { Piedepagina }