import React from 'react'

import orangeSvg from '../../assets/images/orange-svg.svg'
import purpleSvg from '../../assets/images/purple-svg.svg'

function Contact() {
  return (
    <div className='front-page-contact'>
        <div className="contact-wrapper">
            <div className='contact-svg'>
                <div className='contact-svg-text'>
                    <h3>Hello contact me</h3>
                    <p> Feel free to reach out to me by filling out the form or if you want to just say hi, you can do so on Samuel.baran98@gmail.com</p>
                </div>
                <div className='contact-svg-img'>
                    <img src={purpleSvg} alt="" />
                    <img src={orangeSvg} alt="" />
                </div>
            </div>
            <div className="contact-form">
                <form action="">
                    <label for="name" > Full Name </label>
                    <input name="name" className='input-short' type="text" placeholder='Full Name' />
                    <label for="email" > Email </label>
                    <input name="email" className='input-short' type="text" placeholder='Email' />
                    <label for="subject" > Subject </label>
                    <input className='input-short' type="text" placeholder='Subject' />
                    <label for="message" > Message </label>
                    <textarea name='message' className='input-area' />
                </form>
            </div>

        </div>
    </div>
  )
}

export default Contact