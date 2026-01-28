import React from 'react'
import "../Styles/Home.css"

const Home = () => {
  return (
    <>
        <div className='homeBox1'>
            <div className='imgBox'>
                <img className='home-img1' src="https://static.vecteezy.com/system/resources/previews/052/086/826/non_2x/office-worker-at-computer-with-man-white-babackground-free-vector.jpg" alt="home-1-img" />
            </div>

            <div className='textBox'>
                    <p className='text1'>Download Now</p>
                    <p className='text2'>Lorem ipsum</p>
                    <button className='downloadBtn'>Download now</button>
            </div>
        </div>
        <div className='homeBox2'>
            <img className='home-img2' src="https://static.vecteezy.com/system/resources/previews/005/637/993/large_2x/man-making-work-concept-in-front-of-computer-with-tutorial-free-vector.jpg" alt="home-img-2" />
        </div>
    </>
  )
}

export default Home