import React from 'react'
import "./Footer.css"

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">
            <h4>Dinky Rajpoot</h4>
            <p>© {year} Dinky Rajpoot All rights reserved</p>
            <p className='d-flex'>
              <i className='fa-brands fa-instagram'></i>
              <i className='fa-brands fa-facebook mx-3'></i>
            </p>
          </div>
          <div className="second mt-5">
            <h4>Get In Touch</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, adipisci.</p>
            <p>info@DinkyRajpoot.com</p>
            <p>+91 012345678</p>
          </div>
          <div className="third mt-5">
            <h4>About</h4>
            <p>Resume</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer