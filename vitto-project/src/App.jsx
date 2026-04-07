import { useState } from 'react'
import User from './pages/user/user' 
import Loan from './pages/loan/loan'
import Decision from './pages/decision/decision'
import { Navigate, Routes , Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Navigate to='/user' />}
          />  
        <Route
          path='user'
          element={<User/>}
        />

        <Route
          path='loan'
          element={<Loan/>}
        />

        <Route
          path='decision'
          element={<Decision/>}
        />

      </Routes>
    </>
  )
}

export default App
