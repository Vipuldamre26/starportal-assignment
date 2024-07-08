import React from 'react'
import './Card1.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const Card = ({ card1 }) => {
  return (
    <div className='card'>
      {
        card1.map((item, index) => {
          return (
            <div key={index} className="card-main">
              <div className="card-main1">
                <div className="img">
                  <img src={item.stack} />
                </div>
                <p>{item.quests}</p>
              </div>
              <div className="card-main2">
                <h3>{item.heading}</h3>
                <p>{item.disc}</p>
                <span><img src={item.coinImg} />{item.xp}</span>
              </div>
              {/* <i class="bi bi-caret-down-fill"></i> */}
              <i class="bi bi-caret-up-fill"></i>
            </div>
          )
        })
      }

      <div className="card-items">
        {
          card1[0].arr.map((item) => {
            return (

              <div key={item.id} className="item">

                <div className="item1">
                  <img src={item.img} alt="" />
                </div>

                <div className="item2">
                  <p>{item.heading}</p>
                  <div className="dash"></div>
                  <div className="tasks">
                    <span>{item.task}</span>
                    <div className='range'></div>
                  </div>
                </div>

                <div className="item3">

                </div>
              </div>
            )
          })
        }
      </div>
    </div>

  )
}

export default Card