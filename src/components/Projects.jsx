import "../css/Projects.css";

function Projects() {
    return(
        <section id="projects">
            <div className="container">
                <h1 className="project-subtitle">My Projects</h1>
                <div className="project-list">
                    <div className="project">
                        <img className="project-cover-image" src="../images/TurtleBot.jpeg" alt="A gazebo training environment for TurtleBot3 Waffle Pi"/>
                        <div className="layer">
                            <h3>Control of a Mobile Robot using Reinforcement Learning</h3>
                            <ul>
                                <li>Understanding different Reinforcement Learning algorithms for control of a mobile robot including DDPG and TD3</li>
                                <li>Simulating and using both for training on Turtlebot3 in Gazebo using Python reducing training time by upto 30%</li>
                            </ul>
                            <a href="https://github.com/krishannair/DRL_TurtleBot3"><img src="../images/external-link.svg" alt="Go to DRL code page on github."/></a>
                        </div>
                    </div>
                    <div className="project">
                        <img className="project-cover-image" src="../images/PasswordManager.jpeg" alt="A screen with encrypted data."/>
                        <div className="layer">
                            <h3>Secure Password Manager with AES-256 Encryption and SQLite Database</h3>
                            <ul>
                                <li>Implemented AES-256 + PBKDF2, making brute-force 10x harder than DES and 25616 times more secure than AES IV reuse</li>
                                <li>Optimized password storage with SQLite,reducing lookup times by 20-35% over file-based storage.</li>
                                <li>Developed a FLTK GUI that uses 50% less memory than Qt/GTK, ensuring smooth performance.</li>
                            </ul>
                            <a href="https://github.com/krishannair/Password-Manager"><img src="../images/external-link.svg" alt="Go to password manager code page on github."/></a>
                        </div>
                    </div>
                    <div className="project">
                        <img className="project-cover-image" src="../images/SmartTaxi.jpeg" alt="A taxi avoiding obstacles."/>
                        <div className="layer">
                            <h3>Smart Taxi Using OpenAI Gym</h3>
                            <ul>
                                <li>Made a Smart Taxi using Q-Learning in Python</li>
                                <li>Navigates around a 2D grid with barriers</li>
                                <li>Picks up and drops off the passenger at the correct location achieving 100% task completion</li>
                                <li>Does the action in the least number of moves</li>
                            </ul>
                            <a href="https://drive.google.com/drive/folders/1qq-7gXkrfM1Nan8IZJt2b0YnlFS4iMid?usp=drive_link"><img src="../images/external-link.svg" alt="Go to drive link of smart taxi project."/></a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Projects;