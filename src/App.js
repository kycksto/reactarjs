import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Arjsreact from './components/Arjsreact'
import Home from './components/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/reactarjs' element={<Home/>}/>
        <Route path='/Ar' element={<Arjsreact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App