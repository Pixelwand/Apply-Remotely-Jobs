import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./components/Homepage/Homepage";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Jobs } from "./components/Jobs/Jobs";
import Candidates from "./components/Candidates/Candidates";
import About from "./components/About/About";
import Login from "./components/Authentication/Login";
import { PostJobs } from "./components/Jobs/PostJobs";

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

function App() {
  // if(!token){
  //   return <Login setToken={setToken}/>
  // }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/postjobs" element={<PostJobs />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
