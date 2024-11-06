import React from 'react'
import Form from './form'
import shop from '../assets/shop.jpg'
import sms1 from '../assets/sms.png'
import whatsapp from '../assets/pho.png'
import menu from '../assets/Menu.png'

function Contact() {
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
    <h2>Contact Us</h2>
    <div className="bg-red mx-auto"> </div>
  </div>
<div className="container">
      <div className="row mt-5">
    <div className="col md-6">
    <img src={whatsapp} alt="" /> 
        <h4>Kindly call us or join our support 
          group on WhatsApp.</h4>
        <div className="d-flex mt-3">
          <div className=" me-2">
        
          </div>
          <div className="ms-2">
          <img src={sms1} alt="" /> 
             <h4>+234 8132434185</h4> 
          </div>
        </div>
        <div className="d-flex mt-3">
          <div className=" me-2">

          </div>
          <div className=" ms-2">
             <h4>+234 8035528198</h4> 
          </div>
        </div>
        <div className="d-flex mt-3">
          <div className=" me-2"> 
          </div>
          <div className=" ms-2">
          <img src={menu} alt="" /> 
             <h4>info@Goshen supermarket.com</h4> 
          </div>
        </div>
    </div>
    <div className="col md-6">
     <Form />
    </div>
    </div>
  </div>
  
    </>
  )
}

export default Contact