import "./App.css";
import Example from "./Example";
import ExampleClass from "./ExampleClass";

function App() {
  let name = "Melih";
  return (
    <div className="App">
      <h1>Hoşgeldin {name}</h1>
      <Example isim={name} />
      <ExampleClass isim={name} />
    </div>
  );
}

export default App;
