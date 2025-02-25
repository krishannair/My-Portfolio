import "../css/Projects.css";

function Projects() {
    return(
        <section id="projects">
            <div className="container">
                <h1 className="subtitle">My Projects</h1>
                <div className="project-list">
                    <div class="project">
                        <img src="https://placehold.co/300x400"/>
                        <div className="layer">
                            <h3>Control of a Mobile Robot using Reinforcement Learning</h3>
                            <ul>
                                <li>Understanding different Reinforcement Learning algorithms for control of a mobile robot including DDPG and TD3</li>
                                <li>Simulating and using both for training on Turtlebot3 in Gazebo using Python reducing training time by upto 30%</li>
                            </ul>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                    <div class="project">
                        <img src="https://placehold.co/300x400"/>
                        <div className="layer">
                            <h3>Secure Password Manager with AES-256 Encryption and SQLite Database</h3>
                            <ul>
                                <li>Implemented AES-256 + PBKDF2, making brute-force 10x harder than DES and 25616 times more secure than AES IV reuse</li>
                                <li>Optimized password storage with SQLite,reducing lookup times by 20-35% over file-based storage.</li>
                                <li>Developed a FLTK GUI that uses 50% less memory than Qt/GTK, ensuring smooth performance.</li>
                            </ul>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                    <div class="project">
                        <img src="https://placehold.co/300x400"/>
                        <div className="layer">
                            <h3>Smart Taxi Using OpenAI Gym</h3>
                            <ul>
                                <li>Made a Smart Taxi using Q-Learning in Python</li>
                                <li>Navigates around a 2D grid with barriers</li>
                                <li>Picks up and drops off the passenger at the correct location achieving 100% task completion</li>
                                <li>Does the action in the least number of moves</li>
                            </ul>
                            <a href="#">Learn More</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Projects;