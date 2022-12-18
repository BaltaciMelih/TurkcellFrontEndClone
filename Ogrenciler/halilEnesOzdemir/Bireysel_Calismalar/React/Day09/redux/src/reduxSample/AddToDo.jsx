import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../store/todo.actions';

function AddToDo() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const add = () => {
    /*     dispatch({
      type: 'ADD_TODO',
      payload: { name: name },
    }); */

    var randomId = Math.floor(Math.random() * 10000);

    var newTodo = {
      id: randomId,
      name: name,
    };

    dispatch({ type: 'ADD_TODO', payload: newTodo });

    // dispatch(addToDo({ name: name }));
  };
  return (
    <>
      <div>
        <label>Name:</label>
        <input type='text' onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <button onClick={() => add()}>Add</button>
      </div>
    </>
  );
}

export default AddToDo;
