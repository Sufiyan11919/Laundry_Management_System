import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import './style.css'
import MainPage from './components/MainPage'
const App = () => {
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/main" element={<MainPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App