import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Homepage } from './components/Homepage/Homepage';
import Dashboard from './components/Dashboard/Dashboard';
import Jobs from './components/Jobs/Jobs';
import Candidates from './components/Candidates/Candidates';
import About from './components/About/About';
import { Login } from './components/Authentication/Login';

export const App = () => {
  const [token, setToken] = useState();
  

  // if(!token){
  //   return <Login setToken={setToken}/>
  // }
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/jobs' element={<Jobs />} />
    <Route path='/candidates' element={<Candidates />} />
    <Route path='/about' element={<About />} />
    <Route path='/dashboard' element={<Dashboard />} />
  </Routes>
  </BrowserRouter>
  </>
  )
}
