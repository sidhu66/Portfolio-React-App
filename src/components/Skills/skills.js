import React from "react";
import "./skills.css";

const skills = () => {
    return(
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.I have a string understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and illustrator. </span>

            <div className="skillBars">
                <div className="skillBar">
                    <img src="" alt="" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>The demo text can be changed while making the production website ready.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src="" alt="" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>The demo text can be changed while making the production website ready.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src="" alt="" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>The demo text can be changed while making the production website ready.</p>
                    </div>
                </div>

               
               
            </div>
        </section>    )
    
}

export default skills;