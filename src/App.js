import logo from './logo.svg';
import Platillo from './Components/Platillo.jsx';
import './App.css';

function App() {

  return <div className="contenedorPlatillos">
  <Platillo nombre="capuccino"/>
  <Platillo nombre="moka"/>
  <Platillo nombre="espresso"/>
  <Platillo nombre="machiato"/>
  </div>
  
}

export default App;
