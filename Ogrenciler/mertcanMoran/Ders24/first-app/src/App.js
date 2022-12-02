import "./App.css";
import Deneme from "./Deneme";
import DenemeClass from "./DenemeClass";

function App() {
  let name = "Mertcan";
  let age = 25;
  return (
    <div className="App">
      <h1>
        Hoşgeldin {name}, yaşın: {age}
      </h1>
      <Deneme name={name} age={age} />
      <DenemeClass name={name} age={age} />
    </div>
  );
}

export default App;
