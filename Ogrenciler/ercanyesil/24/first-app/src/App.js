import './App.css';
import Deneme from './Deneme'
import DenemeClass from './DenemeClass'

function App() {
  let name = "Ercan"
  return (
    <div className="App">
      <h1>Hoşgeldin {name}</h1>
      <Deneme isim={name} />
    </div>
  );
}

export default App;
