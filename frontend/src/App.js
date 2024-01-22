import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './layers/Header'
import Footer from './layers/Footer'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Transactions from './pages/Transactions'
import Page404 from './pages/Page404'

function App() {
  return (
    <>
      <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />

            {/* add :id to the dashboard and transactions path */}
            <Route path="/dashboard/" element={<Dashboard />} /> 
            <Route path="/dashboard/transactions" element={<Transactions/>} />
            <Route path="*" element={<Page404/>} />
          </Routes>
      <Footer />
    </>
  )
}

export default App
