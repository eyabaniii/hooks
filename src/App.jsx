import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import "./App.css";
import One from './components/One';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
<Route  path='/' element={<Home/>}   />
<Route  path='/movie:id' element={<One/>}   />


      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
