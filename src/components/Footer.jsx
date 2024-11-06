import React from 'react'

function Footer() {
  return (
    <>
      <div className="bg-dark text-light mt-5 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h4>Goshen supermarket</h4>
              <p>We are the leading pan-africans ecommerce platform active across awka south,shop safely and conveniently with Goshen,the largest supermarket in awka south local government area isiagu Anambra state</p>
            </div>
            <div className="col-md-3">
              <h4>OUR NEWSLETTER</h4>
              <p>Sign up today for tips and latest news and
exclusive special offers.</p>
               <input type="email" className='form-control' placeholder='Enter your email here' />
               <button className='btn btn-danger mt-3'>submit</button>
            </div>
          </div>
        </div>
        <div className="text-center pt-5">© Copyright 2024 All Right Reserved.</div>
      </div>
      
    </>
  )
}

export default Footer