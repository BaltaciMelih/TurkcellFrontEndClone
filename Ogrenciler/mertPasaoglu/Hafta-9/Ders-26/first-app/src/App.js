import './App.css';
import Deneme from './Deneme';
import DenemeClass from './DenemeClass';

function App() {
  let name = "Mert"
  return (
    <div className="App">
      <h1>Deneme Basligi</h1>
      <Deneme isim={name}/>
      <DenemeClass isim={name}></DenemeClass>
    </div>
  );
}

export default App;
