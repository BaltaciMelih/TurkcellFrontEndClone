import "./App.css";
import Deneme from "./Deneme";
import DenemeClass from "./DenemeClass";

function App() {
  let name = "Mertcan";
  return (
    <div className="App">
      <h1>Hoşgeldin {name}</h1>
      <Deneme name={name} />
      <DenemeClass name={name} />
    </div>
  );
}

export default App;
