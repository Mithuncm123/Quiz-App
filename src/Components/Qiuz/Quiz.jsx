import React from 'react'
import './Quiz.css'

const Quiz = () => {
  return (
    <>
    <div className='container'>
        <h1>Quiz App</h1>
        <hr />
        <h2>Which device is required for the Internet connection </h2>
        <ul>
            <li>Modern</li>
            <li>Router</li>
            <li>LAN Cable</li>
            <li>PenDrive</li>
        </ul>
        <button>Next</button>
        <div className="index">1 of 5 questions</div>
    </div>
    </>
  )
}

export default Quiz