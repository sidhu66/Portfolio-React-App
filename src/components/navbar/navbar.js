import React, { useState } from "react";
import './navbar.css'
import logo from '../../assests/CVLogo.jpg'
import {Link} from 'react-scroll'
import MenuBtn from '../../assests/MenuBtn.png'
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo"/>
            <div className="desktopMenu">
                <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" >Home</Link>
                <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" >About</Link>
                <Link activeClass="active" to='myPortfolio' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" >Portfolio</Link>
                <Link activeClass="active" to='client' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" >Clients</Link>
                
            </div>
            <button className="destopMenuBtn" onClick={()=>{
                document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'});}}>
                Contact Me</button>
            
                
                <img src={MenuBtn} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
                <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=> setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=> setShowMenu(false)}>About</Link>
                <Link activeClass="active" to='myPortfolio' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=> setShowMenu(false)}>Portfolio</Link>
                <Link activeClass="active" to='client' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=> setShowMenu(false)}>Clients</Link>
                <Link activeClass="active" to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=> setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;