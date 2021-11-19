import './app.css';
import {Encabezado} from '../Components/Encabezado/Encabezado'
import {Piedepagina} from '../Components/Piedepagina/Piedepagina'

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
