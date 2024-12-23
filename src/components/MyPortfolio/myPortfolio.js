import React from 'react'
import './myPortfolio.css'
import Portfolio1 from '../../assests/Portfolio1.webp'

const MyPortfolio = () => {
    return(
        <section id='myPortfolio'>
             <h2 className='worksTitle'>My Portfolio</h2>
             <span className='worksDesc'>I take pride in paying attention to the smallest details and making sure that my work is pix
                perfect. I am excited to bring my skills and experience to help businesses
                achieve their goals and create a strong online presence." </span>
             <div className='worksImgs'>
                <img src={Portfolio1} alt='PortFolio1' className='worksImg'/>
                <img src={Portfolio1} alt='PortFolio2' className='worksImg'/>
                <img src={Portfolio1} alt='PortFolio3' className='worksImg'/>
                <img src={Portfolio1} alt='PortFolio4' className='worksImg'/>
                <img src={Portfolio1} alt='PortFolio5' className='worksImg'/>
                <img src={Portfolio1} alt='PortFolio6' className='worksImg'/>

             </div>
             <btn className='worksBtn'>See More</btn>
        </section>
       
    )
}

export default MyPortfolio;
