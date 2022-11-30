import logo from './logo.svg';
import './App.css';
import Template from './Template';
function App() {
  let name = "tuğçe";
  return (
    <div className="App">
      <h1>Hoşgeldin {name}</h1>
      <Template name = {name}/>
    </div>
  );
}

export default App;
