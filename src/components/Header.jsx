import { NavLink } from 'react-router-dom';
import React from 'react'
import Logo from '/vite.svg'

function Header() {
 return (
 <>
  <nav className="navbar navbar-expand-lg">
  <div className="container d-flex">
   <NavLink to="/" className="navbar-brand"><img src={Logo} alt="/" /></NavLink>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
   <ul className="navbar-nav mx-auto mb-2 mb-lg-0" >
    <li className="nav-item">
    <NavLink to="/" className="nav-link active text-danger" aria-current="page">Home</NavLink>
    </li>
   
    <li className="nav-item">
    <NavLink to='./service' className="nav-link text-dark">Service</NavLink>
    </li>
    
    <li className="nav-item">
    <NavLink to='/contact' className="nav-link text-dark">Contact</NavLink>
    </li>

  
   </ul>

   <NavLink to='/contact' className="btn btn-danger" type="submit">Request A Quote</NavLink>

   </div>
  </div>
  </nav>

 </>
 )
}

export default Header
	



											
