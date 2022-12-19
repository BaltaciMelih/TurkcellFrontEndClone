import "./App.css";
import Deneme from "./Deneme";
import DenemeClass from "./DenemeClass";

function App() {
  let name = "Sinem";
  return (
    <div className="App">
      <h1>Hoşgeldin {name} </h1>
      <Deneme isim={name} id={5} />
      <DenemeClass isim={name}></DenemeClass>
    </div>
  );
}

export default App;
