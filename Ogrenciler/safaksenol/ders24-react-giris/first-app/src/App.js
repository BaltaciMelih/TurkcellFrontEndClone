import './App.css';
import Deneme from './Deneme'
import DenemeClass from "./DenemeClass"


function App() {
  let name = "Şafak";
  let surname = "Şenol";
  let age = "28";
  return (
    <div className='App'>
      <h1>Hoşgeldin {name}</h1>
      <Deneme isim={name} surname={surname} age={age} />
      <DenemeClass isim={name} />
    </div>
  );
}

export default App;
