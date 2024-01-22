import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Greetings from '../components/Greetings'
import Balance from '../components/Balance'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrUpdateUserProfile } from '../features/userProfile'
import UserProfile from '../models/UserProfile'

export default function Dashboard() {
  const token = useSelector((state) => state.auth.token)
  const isLogged = useSelector((state) => state.auth.isLogged)
  const userProfileState = useSelector((state) => state.profile.data)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)

  // hardcoded content
  const accountData = [
    {
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance",
    }
  ]

  // get the userProfile
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isLogged) {
          dispatch(fetchOrUpdateUserProfile(token))
        } else {
          setIsLoading(false)
        }
      } catch (error) {
        console.error('fetching data failed', error)
      }
      setIsLoading(false)    
    }
    fetchData()
  }, [isLogged, token, dispatch])

  // To prevent a non-serialized flag from redux
  // , I'm using the model here and not in the API request
  const userProfile = isLogged ? new UserProfile(userProfileState) : null

  // fallback for when the requested data are not yet loaded
  if (isLoading) return <p>Please wait,the page is still loading</p>

  // fallback for when the user is not authorized
  if (!isLogged) return (
    <div className="noAccessWrapper">
      <p>You can't access this page.</p>
      <p>Please sign in</p>
      <Link to="/sign-in" className="backButton">Go back</Link> 
    </div>
  )
  
  // page render
  return (
    <main className="main bg-dark">
      <Greetings data={userProfile}/>
      <h2 className="sr-only">Accounts</h2>
      <Balance data={accountData[0]}/>
      <Balance data={accountData[1]}/>
      <Balance data={accountData[2]}/>
    </main>
  )
}
