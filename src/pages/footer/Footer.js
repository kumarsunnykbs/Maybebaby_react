import React from 'react'
import logofooter from  "../../asset/image/imgpsh_fullsize_anim.png"
import "./Footer.css"
const Footer = () => {
  return (
    <div>
      

            <section className='footer-new'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <img className="logoimages" src={logofooter} alt="logo11" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ul-foot">
                                <ul>
                                    <li><a href='./terms_of_service'>Terms of Service </a></li>
                                    <li><a href='./privacy_policy'>Privacy Policy</a></li>
                                    <li><a href='./contact_us'>Contact us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <p className='cpy-right'>© Copyright 2023. Designed by maybebaby.ai</p>
                        </div>
                    </div>
                </div>
            </section>

    </div>
  )
}

export default Footer