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
                        <img src={`${process.env.PUBLIC_URL}/images/my-pic.png`} alt="Profile"/>
                    </div>
                    <div className="about-col-2">
                        <h2 className="about-subtitle">About Me</h2>
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
                                <li><span>C++<br/></span>Developed a secure password manager with AES-256 encryption and SQLite Database</li>
                                <li><span>Python<br/></span>Built an anomaly detection package, achieving 97% accuracy in multivariate time series data</li>
                                <li><span>HTML/CSS<br/></span> Designed and developed this portfolio site, alongside other responsive web interfaces.</li>
                                <li><span>AI/ML<br/></span>Reduced neural network training time by 66% in anomaly detection tasks</li>
                                <li><span>SQL<br/></span>Optimized password storage in a secure password manager, reducing lookup times by 20-35%</li>
                                <li><span>React<br/></span>Developed this portfolio site and other interactive UIs, enhancing user engagement.</li>
                            </ul>
                        </div>
                            : whichAbout ==="Experience"?
                        <div className="tab-contents" id="experience">
                            <ul>
                                <li><span>2024-Current<br/></span>Data Scientist at Turing Global India Private Limited</li>
                                <li><span>June-Aug 2023<br/></span>SDE Intern at Hewlett Packard Enterprises</li>
                                <li><span>June-July 2022<br/></span>R&D Intern at Marine Electricals</li>
                            </ul>
                        </div>
                        :
                        <div className="tab-contents" id="education">
                            <ul>
                                <li><span>2024</span><br/>BTech Electrical Engineering from IIT Palakkad</li>
                                <li><span>2020</span><br/>Pace Junior Science College</li>
                                <li><span>2018</span><br/>Vasudev C. Wadhwa Arya Vidya Mandir</li>
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