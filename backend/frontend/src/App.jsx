import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Homepage } from './components/Homepage/Homepage';
import Dashboard from './components/Dashboard/Dashboard';
import Jobs from './components/Jobs/Jobs';
import Candidates from './components/Candidates/Candidates';
import About from './components/About/About';

export default function App() {
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
// import './index.css'
// import { useState, useEffect } from 'react'
// //import { supabase } from '../src/components/Supabase/supabaseClient'
// //import Auth from '../src/components/Authentication/Auth';
// import { createClient } from '@supabase/supabase-js'
// import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
// import Account from '../src/components/Account/Account';

// const supabase = createClient(
//   'https://wdxkqfgqukuyxczxsjbi.supabase.co',
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkeGtxZmdxdWt1eXhjenhzamJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQzMzExODIsImV4cCI6MTk4OTkwNzE4Mn0.metKwEPpssmMkBAQhmDl2KVWlpXFSlyd8TxKqS5r8zM'
// )


// export default function App( ) {
//   const [session, setSession] = useState(null)

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session)
//     })

//     supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session)
//     })
//   }, [])

//   async function signInWithGoogle() {
//     const { data, error } = await supabase.auth.signInWithOAuth({
//       provider: 'google',
//     })
//   }

//   async function signInWithFacebook() {
//     const { data, error } = await supabase.auth.signInWithOAuth({
//       provider: 'facebook',
//     })
//   }

//   async function signInWithTwitter() {
//     const { data, error } = await supabase.auth.signInWithOAuth({
//       provider: 'twitter',
//     })
//   }

//   async function signout() {
//     const { error } = await supabase.auth.signOut()
//   }

//   return (
//     <>
    
//     <div className="container" style={{ padding: '50px 0 100px 0' }}>
//       {!session ? <Auth
//     supabaseClient={supabase}
//     appearance={{ theme: ThemeSupa }}
//     providers={['google', 'facebook', 'twitter']} 
//   /> : <Account key={session.user.id} session={session} />}
//     </div>
//     <div>
//       <button onClick={signout}>Sign out</button>
//     </div>
//     </>
//   )
// }
