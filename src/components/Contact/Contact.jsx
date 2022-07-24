import React, {useEffect, useState} from 'react'
import emailjs from '@emailjs/browser'

import orangeSvg from '../../assets/images/orange-svg.svg'
import purpleSvg from '../../assets/images/purple-svg.svg'

function Contact() {
    console.log(emailjs)
    const [contactFormData, setContactFormData] = useState({})
    const[submited, setSubmited] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        emailjs.send((process.env.REACT_APP_SERVICE_ID), (process.env.REACT_APP_TEMPLATE_ID),contactFormData, (process.env.REACT_APP_USER_ID) )
                .then((response) => {
                    console.log("SUCCESS", response);
                    setContactFormData({})

                    },
                    err => {
                        console.log("FAILED...", err)
                    })

        setContactFormData( ({
            name:"",
            email:"",
            subject:"",
            message:""
        }))
    }


    const handleChange = e => {

        console.log(e.target.value)

        setContactFormData(prev => ({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }

    console.log(contactFormData)
    console.log(process.env.REACT_APP_SERVICE_ID)

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
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name" > Full Name </label>
                    <input onChange={handleChange} name="name" value={contactFormData.name} className='input-short' type="text" placeholder='Full Name' />
                    <label htmlFor="email" > Email </label>
                    <input onChange={handleChange} name="email" value={contactFormData.email} className='input-short' type="text" placeholder='Email' />
                    <label htmlFor="subject" > Subject </label>
                    <input onChange={handleChange} name="subject" value={contactFormData.subject} className='input-short' type="text" placeholder='Subject' />
                    <label htmlFor="message" > Message </label>
                    <textarea  onChange={handleChange} name='message' value={contactFormData.message} className='input-area' />
                <button className='submit-button primary-button'>Contact me</button>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Contact