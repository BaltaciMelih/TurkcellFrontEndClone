import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Games from '../pages/Games'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='home' element={<Home/>} />
        <Route path='login' element={<Login/>} />
        <Route path='games' element={<Games/>} />
        <Route path='/home/login' element={<Login />} />
    </Routes>
  )
}

export default Routers