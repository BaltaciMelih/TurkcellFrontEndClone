import "./App.css";
import Deneme from "./Deneme";
import DenemeClass from "./DenemeClass";
import StateComponent from "./StateComponent";

function App() {
  let name = "Enes";
  let surname = "Söl";
  return (
    <div className="App">
      {/* <h1>Hoşgeldin {name}</h1> */}
      {/* <Deneme isim={name} surname={surname} /> */}
      {/* <DenemeClass isim={name} /> */}
      <StateComponent />
    </div>
  );
}

export default App;
