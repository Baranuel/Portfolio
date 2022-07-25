import React, {useEffect, useState} from 'react'
import emailjs from '@emailjs/browser'

import orangeSvg from '../../assets/images/orange-svg.svg'
import purpleSvg from '../../assets/images/purple-svg.svg'
import check from '../../assets/images/check.svg'
import Loader from '../Loader'

function Contact() {
   
    const [contactFormData, setContactFormData] = useState({})
    const[isSubmited, setIsSubmited] = useState(false)
    const [successfulSubmition, setSeccessfulSubmition] = useState(false)
    const formIsValid = true

    const mountedStyle = { animation: "inAnimation 250ms ease-in" };
    const unmountedStyle = {
    animation: "outAnimation 270ms ease-out",
    animationFillMode: "forwards"
};

    useEffect(() => {

    },[])

    const handleSubmit = e => {
        e.preventDefault()
        validateForm() && sendEmail()  

    }

    const sendEmail = () => {

        emailjs.send((process.env.REACT_APP_SERVICE_ID), (process.env.REACT_APP_TEMPLATE_ID),contactFormData, (process.env.REACT_APP_USER_ID) )
        .then((response) => {
            console.log("SUCCESS", response);
            setContactFormData({})
            success()
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

        setContactFormData(prev => ({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }

    const validateForm = e => {
        let fields = contactFormData
        let formIsValid = true
        let errors = {}

        if(!fields["name"]){
            alert("name can't be empty")
            errors["name"] = "Cant be empty"
            setContactFormData(prev => ({
                ...prev,
                errors:errors
            }))
            formIsValid = false
        } else {

            setIsSubmited(true)
            return formIsValid
        }
    }

    const success = () => {

        setSeccessfulSubmition(true)

        setTimeout( () => {
            setSeccessfulSubmition(false)
            setIsSubmited(false)
        }, 3000)
    }

  return (
    <div className='front-page-contact'>
        <div className="contact-wrapper">
            <div className='contact-svg'>
                <div className='contact-svg-text'>
                    <h3>Tell me <strong className='hay'> how are you </strong> doing</h3>
                    <p> Feel free to reach out to me by filling out the form or if you want to just say hi, you can do so on <strong className='hay'>Samuel.baran98@gmail.com</strong> </p>
                </div>
                <div className='contact-svg-img'>
                    <img src={purpleSvg} alt="" />
                    <img src={orangeSvg} alt="" />
                </div>
            </div>
            <div className="contact-form">
                {isSubmited &&
                    <div 
                    className="loader-div"
                    style={isSubmited ? mountedStyle : unmountedStyle}
                    >
                        <Loader /> 
                    </div>
                }
                   { successfulSubmition &&
                    <div 
                    className="loader-div"
                    style={successfulSubmition ? mountedStyle : unmountedStyle}
                    >   <img src={check} alt="" />
                       <h1>Thank you for your message</h1>
                    </div>
                        }
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name" > Full Name </label>
                    <input onChange={handleChange} name="name" value={contactFormData.name || ""} className='input-short' type="text" placeholder='Full Name' />
                    <label htmlFor="email" > Email </label>
                    <input required onChange={handleChange} name="email" value={contactFormData.email || ""} className='input-short' type="text" placeholder='Email' />
                    <label htmlFor="subject" > Subject </label>
                    <input required onChange={handleChange} name="subject" value={contactFormData.subject || ""} className='input-short' type="text" placeholder='Subject' />
                    <label htmlFor="message" > Message </label>
                    <textarea  onChange={handleChange} name='message' value={contactFormData.message || ""} className='input-area' />
                <button className='submit-button primary-button'>Contact me</button>
                </form>

            </div>

        </div>
    </div>
  )
}

export default Contact