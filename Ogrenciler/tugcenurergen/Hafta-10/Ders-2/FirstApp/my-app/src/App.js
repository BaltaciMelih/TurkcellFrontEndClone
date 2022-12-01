import logo from './logo.svg';
import './App.css';
import Template from './Template';
import TemplateClass from './TemplateClass';

function App() {
  let name = "tuğçe";
  return (
    <div className="App">
      <h1>Hoşgeldin {name}</h1>
      <Template name = {name}/>
      <TemplateClass name = {name}/>
    </div>
  );
}

export default App;
