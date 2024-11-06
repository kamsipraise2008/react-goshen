import React from 'react'
import wine from '../assets/wine.jpg'
import food from '../assets/foodstuff.jpg'
import dete from '../assets/dete.jpg'

function card2() {
  return (
    <>
      <img src={shop} width={1500} height={500}alt="" />
      <div>
        <div>
            <img src={wine} alt="" />
            <h3>QUALITY SUPPLIES</h3>
            <p>Goshen Nigeria is your ultimate online destination for home and online appliance</p>
        </div>
        <div>
            <img src={dete} alt="" />
            <h3>PROVISIONS</h3>
            <p>Buy provisions at affordable prices,explore a great selection of genuine all at the best price........</p>
        </div>
        <div>
            <img src={food} alt="" />
            <h3>FOODSTUFF</h3>
            <p>Buy quality foodstuff fron Goshen online supermarket</p>
        </div>
      </div>
    </>
  )
}

export default card2