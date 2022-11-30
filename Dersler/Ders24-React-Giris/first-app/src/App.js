import "./App.css";
import Deneme from "./Deneme";
import DenemeClass from "./DenemeClass";

function App() {
  let name = "Varol";
  return (
    <div className="App">
      <h1>Hoşgeldin {name} </h1>
      <Deneme isim={name} />
      <DenemeClass isim={name}></DenemeClass>
    </div>
  );
}

export default App;
