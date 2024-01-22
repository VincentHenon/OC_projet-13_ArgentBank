import React from 'react'
import { Link } from 'react-router-dom'
import logoPath from '../assets/media/argentBankLogo.png'

export default function NavLogo() {
  return (
    <div>
      <Link className="main-nav-logo" to= "/">
          <img src={logoPath} alt="Argent Bank logo" className="main-nav-logo-image"/>
      </Link>
    </div>
  )
}
