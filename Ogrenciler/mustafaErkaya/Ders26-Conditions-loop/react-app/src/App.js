
import './App.css';
// import { ListItem } from './ListItem';
import {useState} from 'react'

function App() {
  // const [name, setName] = useState('yusuf')
  
  // const students = ["mustafa", "halil", "enes", "varol", 'sinem'];

  // const data = [
  //   {
  //     id:1,
  //     name: "beşiltaş",
  //     color1: "Black",
  //     color2: "White",
  //     w:300
  //   },
  //   {
  //     id:1,
  //     name: "galatasaray",
  //     color1: "Red",
  //     color2: "Yellow",
  //     w:300
  //   },
  //   {
  //     id:1,
  //     name: "beşiltaş",
  //     color1: "Black",
  //     color2: "Green",
  //     w:300
  //   }
  // ]

  

  // const itemList = [
  //   <li key={1}>Deneme1</li>,
  //   <li key={2}>Deneme2</li>,
  //   <li key={3}>Deneme3</li>,
  //   <li key={4}>Deneme4</li>
  // ];

  const [students, setData] = useState([
    {
    name: 'Mustafa Erkaya',
    age: 25,
    not: 21
  },
  {
    name: 'Tansu Çağla Tekin',
    age: 22,
    not: 65
  },
  {
    name: 'Tuğçe Nur Ergen',
    age: 21,
    not: 65
  },
  {
    name: 'Ramazan Erkaya',
    age: 20,
    not: 10
  }
])

const pass = (item) => {
  if(item.not <50 ){
    return 'nopass'
  }else{
    return 'pass'
  }
}


let a = [...students]
let sortStudents = students.sort(function(a, b){ return b.not - a.not })
let sortStudents2 = a.sort(function(a, b){ return a.not - b.not })
  return (
    <div className='App' style={{height: 600}}>
     <div>
     {students.map((item , x) => {
      return <div style={{width: 300,  margin: 'auto'}} key={x} className={`riskStatus ${pass(item)}`}>{x+1} - {item.name} - {item.not}</div>
     })}
     </div>

     <div style={{margin: 50}}>
      {
      sortStudents.map((item, x) => {
        return <div className={`riskStatus ${pass(item)}`}>{item.name} {item.not}</div>
      })}
     </div>
     <div style={{margin: 50}}>
      {
      sortStudents2.map((item, x) => {
        return <div className={`riskStatus ${pass(item)}`}>{item.name} {item.not}</div>
      })}
     </div>


    </div>
  );
}

export default App;
