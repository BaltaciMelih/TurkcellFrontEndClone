import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Games from './pages/Games'
import RegisterPage from './pages/RegisterPage';
function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/home' element = {<Home/>}/>
      <Route path='/games' element = {<Games/>}/>
      <Route path='/register' element = {<RegisterPage/>}/>
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
