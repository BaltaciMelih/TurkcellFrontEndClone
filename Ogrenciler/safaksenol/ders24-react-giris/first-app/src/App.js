import './App.css';
import Deneme from './Deneme';
import DenemeClass from "./DenemeClass";
import StateComponent from "./StateComponent";
import Uygulama from './Uygulama';


function App() {
  let name = "Şafak";
  return (
    <div className="App">
      <h1>Hoşgeldin {name} </h1>
      <Deneme isim={name} id={5} />
      <DenemeClass isim={name}></DenemeClass>
      <StateComponent />
      <Uygulama/>
    </div>
  );
}

export default App;
