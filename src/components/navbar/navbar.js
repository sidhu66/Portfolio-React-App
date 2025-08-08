import React, { useState } from "react";
import './navbar.css'
import logo from '../../assests/CVLogo.jpg'
import {Link} from 'react-scroll'
import MenuBtn from '../../assests/MenuBtn.png'
import Resume from '../../Karanveer_Sidhu_Resume.pdf';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo"/>
            <div className="desktopMenu">
                <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" >Home</Link>
                <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" >About</Link>
                <Link activeClass="active" to='myPortfolio' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" >Portfolio</Link>
                <Link activeClass="active" to='experience' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" >Experience</Link>
            </div>
            <div>
                <a href={Resume} download="Karanveer_Sidhu_Resume.pdf" className="destopMenuBtn resumeBtn">Resume</a>
                <button className="destopMenuBtn" onClick={()=>{document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'});}}>
                    Contact Me</button>
            </div>
            
                
                <img src={MenuBtn} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
                <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=> setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=> setShowMenu(false)}>About</Link>
                <Link activeClass="active" to='myPortfolio' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=> setShowMenu(false)}>Portfolio</Link>
                <Link activeClass="active" to='experience' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=> setShowMenu(false)}>Experience</Link>
                <Link activeClass="active" to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=> setShowMenu(false)}>Contact</Link>
                <a href={Resume} download="Karanveer_Sidhu_Resume.pdf" className="ListItem">Resume</a>
            </div>
        </nav>
    )
}

export default Navbar;