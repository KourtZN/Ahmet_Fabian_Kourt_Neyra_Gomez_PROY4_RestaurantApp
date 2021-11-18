import './App.css';
import { Link } from 'react-router-dom' 
function App(props) {

  return (
  <div>
  <header>
    <h1>Cafetería El Espiral</h1>
    <nav>
    <Link to='/'>Click Me</Link>
    <Link to='/2'>Click Me 2</Link>
    <Link to='/3'>Click Me 3</Link>
    </nav>
    
  </header>
  <main>
  {props.children}
    
  </main>
  
  

  <footer></footer>
  </div>
  )
}

export default App;
