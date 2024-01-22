import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { getToken } from '../services/serviceAPI'
import { setToken } from '../features/authUser'

export default function SignIn() {
  const [login, setLogin] = useState({
    email: '',
    password: ''
  })
  const token = useSelector((state) => state.auth.token)
  const isLogged = useSelector((state) => state.auth.isLogged)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [authError, setAuthError] = useState(false)

  // navigate only when token and isLogged are loaded
  useEffect(() => {
    if (token && isLogged) {
      setAuthError(false)
      navigate('/dashboard')
    }
  }, [token, isLogged, navigate])

  // set the input login
  const getUsername = (event) => {
    setLogin({ ...login, email: event.target.value })
  }

  // set the input password
  const getPassword = (event) => {
    setLogin({ ...login, password: event.target.value })
  }

  // handle submit form
  const signIn = async (event) => {
    event.preventDefault()
    try {
      const res = await getToken(login)
      const jwt = res.body.token
      dispatch(setToken(jwt))
    }
    catch(e) {
      setAuthError(true)
      console.error(e)
    }
  } 

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon className="sign-in-icon" icon={faCircleUser} />
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label> 
              <input type="text" id="username" autoComplete="on" onChange={getUsername}/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label> 
            <input type="password" id="password" autoComplete="on" onChange={getPassword}/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {authError && <p style={{ color: 'red' }}>Incorrect username or password. Please try again.</p>}
            <button className="sign-in-button" onClick={signIn}>
              Sign In
            </button>
        </form>
      </section>
    </main>
  )
}
