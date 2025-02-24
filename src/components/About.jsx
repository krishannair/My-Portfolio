import "../css/About.css";
import { useState, useEffect } from 'react';

function About() {
    const [whichAbout, setWhichAbout] = useState(["Skills"]);
    useEffect(() => {
        setWhichAbout("Skills");
    }, []);
    return(
        <section id="about">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img src="images/user.png"/>
                    </div>
                    <div className="about-col-2">
                        <h2 className="subtitle">About Me</h2>
                        <p>
                            Dedicated and versatile professional with a fervor for coding and a proactive approach to continuous learning. Demonstrated
                            commitment to embracing new challenges and adding value to forward-thinking organizations that prioritize innovation and
                            expansion. Eager to further enhance proficiency and understanding within the realm of technology. As a meticulous and
                            enthusiastic individual, I am seeking a position in Software Engineering, leveraging my skills and knowledge to excel in
                            demanding roles.
                        </p>
                        <div className="tab-titles">
                            <p className={`tab-links ${whichAbout === "Skills"? "active-link": ""}`} onClick={() => {
                                setWhichAbout("Skills");
                            }}>Skills</p>
                            <p className={`tab-links ${whichAbout === "Experience"? "active-link": ""}`} onClick={() => {
                                setWhichAbout("Experience");
                            }}>Experience</p>
                            <p className={`tab-links ${whichAbout === "Education"? "active-link": ""}`} onClick={() => {
                                setWhichAbout("Education");
                            }}>Education</p>
                        </div>
                        {
                            whichAbout === "Skills"?
                            
                        <div className="tab-contents" id="skills">
                            <ul>
                                <li><span>indun<br/></span>udufis</li>
                                <li><span>indun<br/>udufis</span></li>
                                <li><span>indun<br/>udufis</span></li>
                            </ul>
                        </div>
                            : whichAbout ==="Experience"?
                        <div className="tab-contents" id="experience">
                            <ul>
                                <li><span>indun<br/>udufis</span></li>
                                <li><span>indun<br/></span>udufis</li>
                                <li><span>indun<br/>udufis</span></li>
                            </ul>
                        </div>
                        :
                        <div className="tab-contents" id="education">
                            <ul>
                                <li><span>indun<br/>udufis</span></li>
                                <li><span>indun<br/>udufis</span></li>
                                <li><span>indun<br/></span>udufis</li>
                            </ul>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;