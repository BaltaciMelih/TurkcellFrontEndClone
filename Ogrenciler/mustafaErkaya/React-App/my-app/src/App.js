// import logo from "./logo.svg"
import './style.css'
import Test from './test'
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; //genele import et
import Button from './components/Button';

function Btn(props){
  return <button>{props.text}</button>
}


function App() {
  const todos = ["todo1", "todo2", "todo3"]

  return (
    <div className="App">
      <h3>{process.env.NODE_ENV}</h3>
      <Test/>
      <main id='main' className='test'>
        <h1 style={{color: "red", background: 'yellow'}}>
          mustafa erkaya
        </h1>
        <ul>
          {todos.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
        <Btn text='sıkıntı butonu' />
        <div>
        <Button val='buton örneği' variant="success"/>
        <Button val='buton örneği' variant="danger"/>
        <Button val='buton örneği' variant="info"/>
        </div>
        
      </main>
     {/* <img src="/logo192.png" alt="" /> */}
     {/* <img src={logo} alt="" /> */}
    </div>
  );
}

export default App;
