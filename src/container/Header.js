import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='ui menu fixed'>
      <div className='ui container'>
        <h1 className="ui header">
          <Link to="/">Online Shopping</Link>
        </h1>
      </div>
    </div>
  )
}

export default Header
