import { Link, Route, Routes } from 'react-router-dom';
import AddToDo from './reduxSample/AddToDo';
import ToDoList from './reduxSample/ToDoList';

function App() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to='/addtodo'>AddToDo</Link>
          </li>
          <li>
            <Link to='/todolist'>TodoList </Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path='/addtodo' element={<AddToDo />}></Route>
        <Route path='/todolist' element={<ToDoList />}></Route>
      </Routes>
    </>
  );
}

export default App;
