import React from 'react'
import { Link } from 'react-router-dom'

export default function Page404() {
  return (
    <div className="page404Wrapper" >
      <div className="page404Content">
        <p style={{ fontSize: '15rem' }}>404</p>
        <p >Page Not Found</p>
        <Link to="/" className="backButton">Go Back</Link>
      </div>
    </div>
  )
}
