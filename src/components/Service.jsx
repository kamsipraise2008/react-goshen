import React from 'react'
import dete from '../assets/dete.jpg'
import wine from '../assets/wine.jpg'
import food from '../assets/foodstuff.jpg'
import shop from '../assets/shop.jpg'

function Service() {
  return (
    <>
     <div className="hero text-light">
        <div className="container text-center pt-5">
          <h1 className='pt-5' style={{ marginTop: '60px' }}>Goshen Supermarket!!!
          </h1>
          <p>We are the leading pan-africans ecommerce platform active across awka south,shop safely and conveniently with Goshen,the largest supermarket in awka south local government area isiagu Anambra state.</p>
        </div>
      </div>
      <div className="text-center" data-aos="fade-up">
    <h2>Our Services</h2>
    <div className="bg-red mx-auto"> </div>
  </div>
<div className="col-md-6" data-aos="fade-up" >
        <div className="col-md-6">
            <img src={wine} width={350} alt="" />
            <h3>QUALITY SUPPLIES</h3>
            <p>Goshen Nigeria is your ultimate online destination for home and online appliance</p>
        </div>
        <div className="col-md-6">

            <img src={dete} width={350}  alt="" />
            <h3>PROVISIONS</h3>
            <p>Buy provisions at affordable prices,explore a great selection of genuine all at the best price........</p>
        </div>
        <div className="col-md-6">
            <img src={food} width={350}  alt="" />
            <h3>FOODSTUFF</h3>
            <p>Buy quality foodstuff fron Goshen online supermarket</p>
        </div>
      </div>
    </>
  )
}

export default Service