function About() {
    return(
        <section id="about">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img src="images/user.png"/>
                    </div>
                    <div className="about-col-2">
                        <h2>About Me</h2>
                        <p>
                            Dedicated and versatile professional with a fervor for coding and a proactive approach to continuous learning. Demonstrated
                            commitment to embracing new challenges and adding value to forward-thinking organizations that prioritize innovation and
                            expansion. Eager to further enhance proficiency and understanding within the realm of technology. As a meticulous and
                            enthusiastic individual, I am seeking a position in Software Engineering, leveraging my skills and knowledge to excel in
                            demanding roles.
                        </p>
                        <div className="tab-titles">
                            <p className="tab-links active-link">Skills</p>
                            <p className="tab-links">Experience</p>
                            <p className="tab-links">Education</p>
                        </div>
                        <div className="tab-contents active-link" id="skills">
                            <ul>
                                <li><span>indun<br/>udufis</span></li>
                                <li><span>indun<br/>udufis</span></li>
                                <li><span>indun<br/>udufis</span></li>
                            </ul>
                        </div>
                        <div className="tab-contents" id="experience">
                            <ul>
                                <li><span>indun<br/>udufis</span></li>
                                <li><span>indun<br/>udufis</span></li>
                                <li><span>indun<br/>udufis</span></li>
                            </ul>
                        </div>
                        <div className="tab-contents" id="education">
                            <ul>
                                <li><span>indun<br/>udufis</span></li>
                                <li><span>indun<br/>udufis</span></li>
                                <li><span>indun<br/>udufis</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;