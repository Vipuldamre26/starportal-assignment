import React from 'react'
import './Card1.css';

const Card = ({ card1 }) => {
  return (
    <div>
      {
        card1.map((item) => {
          return (
            <div className="ss">
          <h4>{item.heading}</h4>
          <img src={item.stack}></img>
            </div>
          )
        })
      }
    </div>

  )
}

export default Card