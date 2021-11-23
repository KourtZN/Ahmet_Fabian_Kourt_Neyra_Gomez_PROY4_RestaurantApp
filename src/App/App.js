import './app.css';
import {Encabezado} from '../Sections/Encabezado/Encabezado'
import {Piedepagina} from '../Sections/Piedepagina/Piedepagina'


function App(props) {

  return (
  <div>
    
    <Encabezado/>

    <main className="main">
    {props.children}
    </main>
  
  

  
  <Piedepagina/>
  
  </div>
  )
}

export default App;
