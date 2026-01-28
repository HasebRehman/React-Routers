import React from 'react'
import "../Styles/About.css"

const About = () => {
  return (
    <div className='aboutBox'>
        <div className='aboutImgBox'>
            <img className='aboutImg' src="https://static.vecteezy.com/system/resources/previews/054/972/084/non_2x/business-men-and-women-taking-part-in-meeting-vector.jpg" alt="about-img" />
        </div>
        <div className="aboutText">
            <h2 className='aboutHeadingText'>
                React development is carried out <br/> by passionate developers
            </h2>
            <p className='aboutPara'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className='aboutPara'>
                Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
            </p>
        </div>
    </div>
  )
}

export default About