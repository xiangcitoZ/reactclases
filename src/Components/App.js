
import './App.css';
import Contador from './Contador';
import DibujoComplejoArray from './DibujoComplejoArray';
import DibujosComplejos from './DibujosComplejos';
import PadreDeportes from './PadreDeportes';

function App() {
  return (
    <div className="App">
      <Contador Inicio="1"/>
      <Contador Inicio="2"/>
      <Contador Inicio="3"/>
      <br/>
      <br/>
      <br/>
      <br/>
      <DibujosComplejos/>
      <br/>
      <br/>
      <br/>
      <br/>
      <DibujoComplejoArray/><br/>
      <br/>
      <br/>
      <br/>
      <PadreDeportes/>
    </div>
  );
}

export default App;
