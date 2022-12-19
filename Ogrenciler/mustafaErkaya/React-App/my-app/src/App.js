// import logo from "./logo.svg"
// import './style.css'
// import Test from './test'
// import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'; //genele import et
// import Button from './components/Button';
// import Tab from './components/Tab';
// import HelloWorld from "./components/HelloWorld";
// import ReactCC from "./components/ReactCC";
// import ReactFC from "./components/ReactFC";
import { useState } from "react";
import { useEffect } from "react";
// import UserInfo from './components/UserInfo'
// import { Button } from 'react-bootstrap';
import { Button, Form} from 'react-bootstrap'
import { ReactComponent as DeleteIcon} from './assets/delete.svg'
import {ReactComponent as SaveIcon} from './assets/save.svg'
import { ReactComponent as EditIcon} from './assets/edit.svg'
import { v4 as uuidv4 } from 'uuid';


// function Btn(props){
//   return <button>{props.text}</button>
// }


function App() {
  // const todos = ["todo1", "todo2", "todo3"]

  // const [data, setData] = useState({})

  // useEffect(() => {
  //   setData({
  //     name: "Mustafa",
  //     age: 25,
  //     job: "Frontend Dev."
  //   })
  // }, [])

  // console.log(data)



// ******  Countere //***** */

  // const [ counter, setCounter] =useState(0)

  //  useEffect(() =>{
  //   console.log(counter);
  //  },[counter])

  // ********* TodoList 
 const arr = ["A", "B", "C", "D", "E", "F", "G", "H","I", "J","K"];
 console.log(arr);
  const [todoList, setTodoList] = useState([])

  const [todo, setTodo] = useState('')

  const addTodo = () => {
    setTodoList(prevTodoList => [...prevTodoList, {id: uuidv4() , todo: todo, isEditable: false, isCompleted: false}])
    setTodo('')  // inputa bastıktan sonra içini temizledik
  }

  const completeTodo = () => {
    setTodoList();
  }
  
  useEffect(() => {
    console.log(todoList)
  },[todoList])

  return (
    <div className="App d-flex flex-column justify-content-center align-items-center mt-5" >
      
      <h1>Todo List</h1>

      <div className='d-flex w-50'>
        <Form.Control
        className='w-75 me-4'
          placeholder="Todo Input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button onClick={() => addTodo()}>Add Todo</Button>
      </div>

      <div className="mt-5 w-50">
          {
            todoList.map((todoitem, x) => {
              return <div key={x} className="d-flex justify-content-between "> 
                  <div className="d-flex ">
                    <Form.Check 
                    type="checkbox"
                    className="mx-3"
                    value={todoitem.isCompleted}
                    onChange={() => completeTodo(todoitem.id) }
                    />
                    <label>{todoitem.todo} </label>
             
                  </div>
                  <div className="">
                    
                     <EditIcon width={25} height={25} style={{cursor: "pointer"}} className="me-2"/>
                     <SaveIcon width={25} height={25} style={{cursor: "pointer"}} className="me-2"/>
                     <DeleteIcon width={25} height={25} style={{cursor: "pointer"}}/>
                  </div>

                 
              </div>
            } )
          }
           <div>
                    {arr.map((item) => {
                      return <p className="w-50 m-3 bg-info text-center display-3">{item}</p>
                     
                    })}
                  </div>
      </div>
   

   {/* <div style={{fontSize: 50}}>{counter}</div>
    <button onClick={() => setCounter(counter +1)}>Increment</button>
    <button onClick={() => setCounter(counter -1)}>Increment</button>
    <Button>Hello</Button> */}

        {/* <UserInfo data={data} setData={setData}/>

        <p>selamun aleyküm</p>
        <ReactFC status={'iyi bir şekilde'} style={{background: "red" , color: "white"}}/>
        <ReactCC status={'çöp bu'} />
        <ReactFC/>
        <ReactCC/> */}
       
    
      
    
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
