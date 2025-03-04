import "../css/Experiences.css";


function Experiences() {
    return(
        <section id="experiences">
            <div className="container">
                <h1 className="subtitle">My Experience</h1>
                <div className="experience-list">
                    <div className="experience">
                        <img src="../images/Turing.avif" alt="Turing logo" />
                        <div className="layer">
                            <h3>Turing</h3>
                            <h4>Delivery Data Scientist</h4>
                            <ul>
                                <li>
                                    Boosted language model accuracy 15-20% via advanced SFT.
                                </li>
                                <li>
                                    Streamlined AI testing, cutting development time 20% with new evaluation frameworks.
                                </li>
                                <li>
                                    Delivered data-driven reports, providing actionable insights for model optimization.
                                </li>
                            </ul>
                            <a href="https://www.turing.com/" aria-label="Go to Turing Website"></a>
                        </div>
                    </div>
                    <div className="experience">
                        <img src="../images/HPE.png" alt="Hewlett Packard Enterprises(HPE) logo"/>
                        <div className="layer">
                            <h3>Hewlett Packard Enterprise (HPE)</h3>
                            <h4>SDE Intern</h4>      
                            <ul>
                                <li>
                                    Designed and developed a Python package for Anomaly Detection.
                                </li>
                                <li>
                                    Utilizes supervised learning with neural networks using CNN and RNN models, reducing the training time by 66%.
                                </li>
                                <li>
                                    Detects anomalies for Anomaly detection achieving 97% accuracy in multivariate time series.
                                </li>
                            </ul>
                            <a href="https://github.com/krishannair/AnomalyDetection-MultivariateTimeSeries" aria-label="Go to internship project code"></a>
                        </div>
                    </div>
                    <div className="experience">
                        <img src="../images/Marine-Electricals.webp" alt="Marine-Electricals logo" />
                        <div className="layer">
                            <h3>Marine Electricals (India) Ltd</h3>
                            <h4>R&D Intern</h4>     
                            <ul>
                                <li>
                                    Development of a Data Acquisition Module.
                                </li>
                                <li>
                                    Designed a circuit to measure the voltages of six sources(three-phase supply, 2 sources).
                                </li>
                                <li>
                                    Measure the current in the lines and convert them to RMS values.
                                </li>
                                <li>
                                    Using UART communication protocol for transmitting data, facilitating the integration of 10 distinct peripherals.
                                </li>
                            </ul>
                            <a href="https://drive.google.com/drive/folders/1awl62qygVNmT3F6ve1bdNlIaHBwgi-XP" aria-label="Go to internship work drive link"></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experiences;