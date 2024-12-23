import React from 'react'
import './client.css'
import Portfolio2 from '../../assests/uwindsor_logo.svg'
import Portfolio3 from '../../assests/digitalHumanLibrary.png'
const Client = () => {
    return(
        <section id='client'>
            <h2 className='clientsTiltle'>My Clients</h2>
            <span className='clientsDesc'>I have had the opportunity to work with a diverse group of companies. Some of the notable
            companies I have worked with include.</span>
            <div className='clientsImgs'>
                
                <img src={Portfolio2} alt='Client1' className='clientsImg'/>
                <img src={Portfolio3} alt='Client1' className='clientsImg'/>
                
            </div>

        </section>
    )
}

export default Client;