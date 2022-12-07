import './App.css';
import ReactDOM from 'react-dom/client';
import {useState} from 'react';
import React from 'react';

function App() {
  const students = ["Erdem", "Şafak", "Enes", "Mertcan"];
    const [name, setName] = useState("");

    // <ul>
    //     {students.map((item, index) => {
    //       if (item.includes("")) {
    //         return null;
    //       } else {
    //         return item;
    //       }
    //     })}
    //   </ul> */}

    const handleChange = (e) =>{
      let results = students.filter(student => {
      if (e.target.value === ""){ return students[0]}
      console.log("if")
      return student.includes(e.target.value)
    });
    setName({results})
  }

  return (
    <React.Fragment>
      <div className="App">
        <form>
          <label>Enter your name:</label>
          <input type="search" value={name} onChange={handleChange} />
        </form>
        {console.log(name)}
     

        {/* <ul>
        {students.map((item, index) => {
          return (
            <li key={index}>
              {item.length > 5 ? item.toUpperCase() : item.toLowerCase()}
            </li>
          );
        })}
      </ul> */}

        {/* <div>
          {students
            .filter((index) => index.includes({name}))
            .map((filteredName) => (
              <li>{filteredName}</li>
            ))}
        </div> */}

        {/* 
      <button type="button" onClick={this.onSubmit} className="btn">
        Save
      </button>
      <ul>
        {students.map((item, index) => {
          return (
            <li key={index}>
              {item.length > 5 ? item.toUpperCase() : item.toLowerCase()}
            </li>
          );
        })}
      </ul>
      <ul>
        {students.map((item, index) => {
          if (item.includes("")) {
            return null;
          } else {
            return item;
          }
        })}
      </ul> */}
      </div>
    </React.Fragment>
  );
}
export default App;
