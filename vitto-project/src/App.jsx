import { useState } from 'react'
import Home from './pages/home/home' 
import Loan from './pages/loan/loan'
import Signup from './pages/signup/signup'
import Decision from './pages/decision/decision'
import { Navigate, Routes , Route } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>

        <Route
          path='/home'
          element={<Home/>}
        />

        <Route
          path='/loan'
          element={<Loan/>}
        />

        <Route
          path='/signup'
          element={<Signup/>}
        />

        <Route
          path='/decision'
          element={<Decision/>}
        />

      </Routes>
    </>
  )
}

export default App
