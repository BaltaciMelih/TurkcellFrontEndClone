import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Games from './pages/Games';
import Home from './pages/Home';
import Register from './pages/Register';
import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/games' element={<Games />}></Route>
      </Routes>
    </>
  );
}

export default App;
