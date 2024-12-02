import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Services from './pages/Services'
import NavBar from './Components/NavBar'
import Home from './pages/Home'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Services' element={<Services/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}
