import React from 'react'
import wine from '../assets/wine.jpg'
import food from '../assets/foodstuff.jpg'
import dete from '../assets/dete.jpg'
import Form from './form'
import footer from './Footer'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
function Home() {
  return (
    <>
      <div className="hero text-light">
        <div className="container text-center pt-5">
          <h1 className='pt-5' style={{ marginTop: '60px' }}>Goshen Supermarket!!!
          </h1>
          <p>We are the leading pan-africans ecommerce platform active across awka south,shop safely and conveniently with Goshen,the largest supermarket in awka south local government area isiagu Anambra state.</p>
        </div>
      </div>
      <div className="container pt-5 " >
  <div className="text-center" data-aos="fade-up">
    <h2>Welcome to Goshen Supermarket</h2>
    <div className="bg-red mx-auto"> </div>
  </div>
  <div className="row">
    <div className="col-md-6" data-aos="fade-up" >
      <img src={wine} width={450} className='img-fluid rounded' alt=""  />
    </div>

    <div className="col-md-6" data-aos="fade-up" >
      <p className='text-danger'></p>
      <h2>Quality,Warranty and deals</h2>
      <p>We deliver the best. Look no further,Goshen is the ultimate online supermarket....... Shop at the best and cheapest prices in Anambra State.............Buy now and pay on Delivery.Enjoy the best prices and more on Goshen. We give the best...........we also help you to advertise your goods.......Buy quality foodstuff fron Goshen online supermarket .....Buy provisions at affordable prices,explore a great selection of genuine all at the best price..........Goshen Nigeria is your ultimate online destination for home and online appliance</p>
      <a href="" className="btn btn-danger">Learn More</a> 
    </div>
    
  </div>
</div>
<div className="container mt-5">
<div className="row">
    <div className="col md-6" data-aos="fade-up">
        <h2>WHY CHOOSE US?</h2>
        <div className="d-flex mt-3">
          <div className="flex-grow-1 me-2">
          <img src={icon1} alt="" />  
          </div>
          <div className="flex-grow-1 ms-2">
             <h4>Quality Supplies</h4>
             <p>Goshen Nigeria is your ultimate online destination for home and online appliance</p>  
          </div>
        </div>
        <div className="d-flex mt-3">
          <div className="flex-grow-1 me-2">
          <img src={icon2} alt="" />  
          </div>
          <div className="flex-grow-1 ms-2">
             <h4>Careful Handling of Valuable Goods</h4>
             <p>Goshen Supermarket would always give you the best ....
              we handle our goods with care..</p>  
          </div>
        </div>
        <div className="d-flex mt-3">
          <div className="flex-grow-1 me-2">
          <img src={icon3} alt="" />  
          </div>
          <div className="flex-grow-1 ms-2">
             <h4>Fast Delivery</h4>
             <p>We Offers Quality goods and well as complex special transport services.</p>  
          </div>
        </div>
    </div>
    <div className="col md-6" data-aos="fade-up">
      <h2>REQUEST A QUOTE</h2>
      <Form />
    </div>
</div>
</div>


<footer />
    </>
  )
}

export default Home