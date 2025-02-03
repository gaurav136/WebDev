import { useState } from 'react'
import Body from './components/Body'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/about' element={<About />} />
      </Routes>
      {/* <Body /> */}
    </BrowserRouter>
  )
}

export default App
