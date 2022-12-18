import React from 'react';
import { useSelector } from 'react-redux';

function ToDoList() {
  var todos = useSelector((todoState) => todoState);

  console.log(todos);

  return (
    <>
      <ul>
        {todos &&
          todos.map((item, key) => {
            <li>{item.name}</li>;
          })}
      </ul>
    </>
  );
}

export default ToDoList;
