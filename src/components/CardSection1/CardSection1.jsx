import React from 'react'
import './CardSection1.css'
import Card1 from '../common/Card1'
import card1 from '../../data/card'
import Card2 from '../common/Card2'

const CardSection1 = () => {
  return (
    <div className="card-section1">
      <div className="section1-main">
        <Card1 card1={card1} />
        <Card2 />
      </div>
    </div>
  )
}

export default CardSection1