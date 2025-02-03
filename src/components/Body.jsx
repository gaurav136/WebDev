import React from 'react'
import Header from './Header'
import Info from './Info'
import Login from './Login.jsx'
import Register from './Register.jsx'
import { Outlet, Link } from 'react-router-dom'

const Body = () => {
  return (
    <><Link to='/'>
      <div>
        <Header />
        <Info />
      </div>
    </Link>
      <Outlet/>
    </>
  )
}

export default Body
