import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { NotFound } from './Components/NotFound';
import { Signup } from './Components/Signup';
import Cart from './Components/Cart'
import Profile from './Components/Profile';
import Carousel from './Components/Carousel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/signup' element = {<Signup/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/userprofile' element = {<Profile/>}/>
        <Route path='/home' element = {<Carousel/>}/>
        <Route path='/*' element = {<NotFound/>}/> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
