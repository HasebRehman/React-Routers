import React from 'react'
import "../Styles/Contact.css"

const Contact = () => {
  return (
    <div className='contactBox'>
        <div className='contactText'>
            <h1 className='contactText1'>Get in touch:</h1>
            <p className='contactText2'>Fill in the form to start a conversation.</p>
            <div className='contactIcons'>
                <span className="material-symbols-outlined" id='loc'>
                    location_on
                </span>
                <span className='locText'>Old Anarkali, Sabir Heights Lahore</span>
            </div>
            <div className='contactPhoneIcons'>
                <span class="material-symbols-outlined" id='call'>
                    call
                </span>
                <span className='locText'>+92319-7810023</span>
            </div>
            <div className='contactEmail'>
                <span class="material-symbols-outlined" id='mail'>
                    mail
                </span>
                <span className='locText'>haseebrehman3460@gmail.com</span>
            </div>
        </div>

        <div className='contactForm'>
            <input className='contactField' type="text" placeholder='Full Name' />
            <input className='contactField' type="email" placeholder='Email' />
            <input className='contactField' type="number" placeholder='Phone Number' />
            <button className='contactBtn'>Submit</button>
        </div>
    </div>
  )
}

export default Contact