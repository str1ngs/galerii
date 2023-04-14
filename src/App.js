import './App.css';
import Galerii from './/Galerii.js';
import pildid from './pildid.js';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Galerii pildinimetus={pildid[0].nimetus} pildiautor={pildid[0].autor}
               pildinimetus1={pildid[1].nimetus} pildiautor1={pildid[1].autor}
               pildinimetus2={pildid[2].nimetus} pildiautor2={pildid[2].autor}  />
    </div>
  );
}

export default App;
