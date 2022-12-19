import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Games from './pages/Games'
function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/home' element = {<Home/>}/>
      <Route path='/games' element = {<Games/>}/>
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
