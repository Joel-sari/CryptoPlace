import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow from '../../assets/arrow_icon.png'

const Navbar = () => {
  return (
    <div className = "Navbar">
      <img src = {logo} alt = "" className = "logo"/>
      <ul>
        <li>Home</li> 
        <li>Features</li> 
        <li>Pricing</li> 
        <li>Blog</li> 
         
      </ul>
      <div className = "nav-right">
        
        <select>  
          {/* Select and option, is like how <li> is to <ul>*/}
          <option value= "usd">USD</option>
          <option value= "euro">EURO</option>
          <option value= "inr">INR</option>

        </select>
        <button>Sign Up<img src = {arrow} alt = ""></img></button>
        
      </div>

      
    </div>
  )
}

export default Navbar
