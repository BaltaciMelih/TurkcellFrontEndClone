import "./App.css";
// import ListItem from "./ListItem";
// import { useState, useEffect } from "react";

function App() {
  // const students = ["Varol", "Halil", "Şafak", "Mustafa", "EnesSöl"];
  // const itemList = [
  //   <li key={1}>Deneme 1</li>,
  //   <li key={2}>Deneme 2</li>,
  //   <li key={3}>Deneme 3</li>,
  //   <li key={4}>Deneme 4</li>,
  // ];

  return (
    <div className="App">
      {/* <ul>
        {students.map((student, index) => (
          <ListItem key={index} student={student}></ListItem>
        ))}
      </ul>
      <ul>{itemList}</ul>
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
          if (item.includes("Varol")) {
            return null;
          } else {
            return item;
          }
        })}
      </ul> */}
    </div>
  );
}

export default App;
