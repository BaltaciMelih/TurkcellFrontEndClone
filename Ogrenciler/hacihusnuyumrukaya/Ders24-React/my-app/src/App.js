import "./App.css";
import Deneme from "./Deneme";
import DenemeClass from "./DenemeClass";
import StateComponent from "./StateComponent";
import StateComponentUyg from "./StateComponentUyg";
function App() {
  let name = "Hacı";
  return (
    <div className="App">
      <h1>Hoşgeldin {name} </h1>
      <Deneme isim={name} id={5} />
      <DenemeClass isim={name}></DenemeClass>
      <StateComponent />
      <StateComponentUyg />
    </div>
  );
}

export default App;
