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
    <tr>
      <FontAwesomeIcon className={isOpen ? "chevron chevronOpen" : "chevron chevronClose"} onClick={handleDropMenu} icon={faChevronDown}/>
      <td>{content.date}
      {isOpen && (
          <>
            <p className="menuOpenContent" >Transaction Type: Electronic</p>
            <p className="menuOpenContent" >Category: Food</p>
            <p className="menuOpenContent" >Notes:</p>
          </>
        )}
      </td>
      <td>{content.description}</td>
      <td>{content.amount}</td>
      <td>{content.balance}</td>
    </tr>
  )
}
