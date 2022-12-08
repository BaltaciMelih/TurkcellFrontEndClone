// import logo from "./logo.svg"
// import './style.css'
// import Test from './test'
// import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'; //genele import et
// import Button from './components/Button';
// import Tab from './components/Tab';
// import HelloWorld from "./components/HelloWorld";
import ReactCC from "./components/ReactCC";
import ReactFC from "./components/ReactFC";
import { useState } from "react";
import { useEffect } from "react";
import UserInfo from './components/UserInfo'






// function Btn(props){
//   return <button>{props.text}</button>
// }


function App() {
  // const todos = ["todo1", "todo2", "todo3"]

  const [data, setData] = useState({})

  useEffect(() => {
    setData({
      name: "Mustafa",
      age: 25,
      job: "Frontend Dev."
    })
  }, [])

  console.log(data)

  return (
    <div className="App">

        <UserInfo data={data} setData={setData}/>

        <p>selamun aleyküm</p>
        <ReactFC status={'iyi bir şekilde'} style={{background: "red" , color: "white"}}/>
        <ReactCC status={'çöp bu'} />
        <ReactFC/>
        <ReactCC/>
       
    
      
    
        {/* <HelloWorld/> */}


      {/* <div style={{padding: 20}}>
        <Tab/>
      </div>

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
        </div> */}
        
      {/* </main> */}
      {/* <img src="/logo192.png" alt="" /> */}
      {/* <img src={logo} alt="" /> */}
     </div>
  );
}

export default App;
