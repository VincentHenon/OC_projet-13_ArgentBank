import React from 'react'
import TableItem from '../components/TableItem_2'
const content= {
    header: {
        type: "Argent Bank Checking (x8349)",
        title: "$2,082.79"
    },
    table: [ 
    {
        date: "June 20th 2020",
        description: "Golden Sun Bakery",
        amount: "$5,00",
        balance: "$2082,79"
    },
    {
        date: "June 20th 2020",
        description: "Golden Sun Bakery",
        amount: "$10,00",
        balance: "$2087,79"
    },
    {
        date: "June 20th 2020",
        description: "Golden Sun Bakery",
        amount: "$20,00",
        balance: "$2097,79"
    },
    {
        date: "June 20th 2020",
        description: "Golden Sun Bakery",
        amount: "$30,00",
        balance: "$2117,79"
    },
    {
        date: "June 20th 2020",
        description: "Golden Sun Bakery",
        amount: "$40,00",
        balance: "$2147,79"
    },
    {
        date: "June 20th 2020",
        description: "Golden Sun Bakery",
        amount: "$50,00",
        balance: "$2187,79"
    },
]}

export default function Transactions() {

  return (
    <main className="main bg-dark" >
        <div id='account-header-wrapper'>
            <p id='account-accountName'>{content.header.type}</p>
            <h2 id='account-accountTitle'>{content.header.title}</h2>
            <p id='account-accountSubtitle'>Available Balance</p>
        </div>
        <div className="tableWrapper">
            <div className="tableColTitle">
                <p>Date</p>
                <p>Description</p>
                <p>Amount</p>
                <p>Balance</p>
            </div>
        </div>
        {content.table.map((content, index)=> (
            <TableItem key={index} content={content} />
        ))}
    </main>
  )
}
