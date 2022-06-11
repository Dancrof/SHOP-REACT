import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Fruta from '../components/frutas/Fruta'
import Home from '../components/home/Home'

function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route exact path='/frutas' element={<Fruta />} />
            <Route exact path='/' element={<Home />} />
        </Routes>
    </Router>
  )
}

export default AppRouter