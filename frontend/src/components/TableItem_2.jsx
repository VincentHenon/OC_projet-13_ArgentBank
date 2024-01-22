import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function TableItem({ content }) {
  const [isOpen, setIsOpen] = useState(false)

  function handleDropMenu(e) {
    e.preventDefault()
    setIsOpen(!isOpen)
    console.log("Toggling drop menu")
  }

  return (
    <div className="tableItemWrapper">
      <FontAwesomeIcon className={isOpen ? "chevronOpen" : "chevronClose"} onClick={handleDropMenu} icon={faChevronDown}/>
      <div className="tableFirstColumn">
        <p>{content.date}</p>
        {isOpen && (
          <>
            <p>Transaction Type: Electronic</p>
            <p>Category: Food</p>
            <p>Notes:</p>
          </>
        )}
      </div>
      <p>{content.description}</p>
      <p>{content.amount}</p>
      <p>{content.balance}</p>
    </div>
  )
}
