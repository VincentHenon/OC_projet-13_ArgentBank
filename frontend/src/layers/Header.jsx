import React from 'react'
import NavLogo from '../components/NavLogo'
import UserSessionStatus from '../components/UserSessionStatus'
import { useSelector } from "react-redux"

export default function Header() {
  const isLogged = useSelector((state) => state.auth.isLogged)
  return (
    <nav className="main-nav">
      <NavLogo />
      <UserSessionStatus isLogged={isLogged}/>
    </nav>
  )
}
