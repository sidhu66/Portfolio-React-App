import React from 'react'
import './intro.css'
import bg from '../../assests/image.webp'
import {Link} from 'react-scroll'
const Intro = () => {
    return (
         
        <section id="intro">
            <div className='introContent'>
                <span className='hello'>hello, </span>
                <span className='introText'>I'm <span className='introName'>Karanveer Sidhu</span> <br/> Website Designer</span>
                <p className='introPara'>I am a skilled web designer with experience in creating visually appealing  <br/>and user friendly websites.</p>
                <Link><button  className='btn'>Hire Me</button></Link>
            </div>
            <div class="image-container">
                <img src={bg} alt='Profile' className='bg'/>
            </div>
            
        </section>
        
    )
}

export default Intro