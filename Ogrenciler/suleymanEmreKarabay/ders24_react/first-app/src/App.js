import "./App.css";
import Deneme from "./Deneme";
import DenemeClass from "./DenemeClass";

function App() {
  let name = "Emre";
  return (
    <div className="App">
      <h1>Hoşgeldin</h1>
      <Deneme isim={name} />
      <DenemeClass isim={name} />
    </div>
  );
}

export default App;
