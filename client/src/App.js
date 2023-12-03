import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import './style.css'
import MainPage from './components/MainPage'
import OrderPage from './components/OrderPage'
// import BillPage from './components/BillPage';
const App = () => {
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/main" element={<MainPage/>}/>
    <Route path="/order" element={<OrderPage/>}/> 
    {/* <Route path="/bill" element={<BillPage/>}/>  */}
    </Routes>
    </BrowserRouter>
  )
}

export default App