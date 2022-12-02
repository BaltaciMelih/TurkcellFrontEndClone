import "./App.css";
import Deneme from "./Deneme";
import DenemeClass from "./DenemeClass";
import StateComponent from "./StateComponent";

function App() {
  let name = "Varol";
  return (
    <div className="App">
      <h1>Hoşgeldin {name} </h1>
      <Deneme isim={name} id={5} />
      <DenemeClass isim={name}></DenemeClass>
      <StateComponent />
    </div>
  );
}

export default App;
