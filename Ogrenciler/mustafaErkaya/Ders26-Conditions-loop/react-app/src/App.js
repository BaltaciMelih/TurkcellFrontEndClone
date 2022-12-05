
import './App.css';
// import { ListItem } from './ListItem';
import {useState} from 'react'

function App() {
 
  
  const students = ["mustafa", "halil", "enes", "varol"];

  const data = [
    {
      id:1,
      name: "beşiltaş",
      color1: "Black",
      color2: "White",
      w:300
    },
    {
      id:1,
      name: "Galatasaray",
      color1: "Red",
      color2: "Yellow",
      w:300
    },
    {
      id:1,
      name: "beşiltaş",
      color1: "Black",
      color2: "White",
      w:300
    }
  ]

  

  const itemList = [
    <li key={1}>Deneme1</li>,
    <li key={2}>Deneme2</li>,
    <li key={3}>Deneme3</li>,
    <li key={4}>Deneme4</li>
  ];
  return (
    <div className="App">
     
     
      <ul>
        
          {/* <ListItem students={students}></ListItem> */}
        
      </ul>
      <ul>{itemList}</ul>
       <ul>
        {students.map((item, index) => {
          return <li key={index}>{item.length >5 ? item.toUpperCase() : item.toLocaleLowerCase()}</li>
        })}
       </ul>
       <ul>
       {students.map((item, index) => {
        if(item.includes('varol')) {
          return null
        }else {
          return <li>{item}</li>
        }
       })}
       </ul>
    </div>
  );
}

export default App;
