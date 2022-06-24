import React from 'react'
import './Header.css'

function Header() {
  return (
    <div onClick={() => window.scroll(0,0)} className="header">🎥 SaurHub 🎥</div>
  )
}

export default Header