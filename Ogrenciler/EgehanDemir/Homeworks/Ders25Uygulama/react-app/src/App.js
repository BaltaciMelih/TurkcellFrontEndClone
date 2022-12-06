import React, { useState } from 'react'
import './App.css';
import Deneme from './Deneme'

function App() {
  
  let [display, setDisplay] = useState(false);
  const students = ["Egehan", "Haci", "Burak", "Halil Enes", "Safak"];
 let [user, setUser] = useState("");
  const change = () => {
    setUser(document.getElementById("filterInput").value);
    setDisplay(true);
  
  }

  return (
    <div><ul>
      {students.map((student, index) => {
        return <Deneme key={index} student={student}></Deneme>
      })
      }

    </ul>
      <input type="text" id='filterInput' />
      <button id="filterButton" onClick={change}>Search</button>
  
        <ul>
        {students.map((student) => {
          if (student.includes(user) && display && user !== "" ) {
            return student;
          }
          else {
            return "";
          }
        })
        }
      </ul> 
     

    </div>
  );
}

export default App;
