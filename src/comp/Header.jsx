import React from 'react'
import "../css/header.css"
function Header() {
  return (
    <div className='mainHeaderCont'>
        <div className="headerCont">
            <img src='logo.svg' className='logoImg'/>

            <div className="linkCont">
              <p>About Me</p>
              <p>Works</p>
              <p>services</p>
            </div>
        </div>
    </div>
  )
}

export default Header