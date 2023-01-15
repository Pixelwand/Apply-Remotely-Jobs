import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Homepage } from './components/Homepage/Homepage';
import Dashboard from './components/Dashboard/Dashboard'

export default function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/dashboard' element={<Dashboard />} />
  </Routes>
  </BrowserRouter>
  </>
  )
}
