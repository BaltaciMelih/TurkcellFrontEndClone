import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { NotFound } from './Components/NotFound';
import { Signup } from './Components/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/signup' element = {<Signup/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/*' element = {<NotFound/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
