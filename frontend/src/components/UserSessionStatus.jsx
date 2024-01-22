import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux"
import { clearToken } from '../features/authUser'
import { clearProfile } from '../features/userProfile'

export default function UserSessionStatus({ isLogged }) {
  const dispatch = useDispatch()
  
  // cleartState will clear all states
  const clearState = () => {
    dispatch(clearToken())
    dispatch(clearProfile())
  }

  // toggle the display based on the isLogged state
  return (
    <>
      {isLogged ? (
        <Link className="main-nav-item" to="/" onClick={clearState}>
          <FontAwesomeIcon className="userIcon" icon={faCircleUser} />
          sign out
        </Link>
      ) : (
        <Link className="main-nav-item" to="/sign-in">
          <FontAwesomeIcon className="userIcon" icon={faCircleUser} />
          sign in
        </Link>
      )}
    </>
  )
}
