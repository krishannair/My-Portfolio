import "../css/Experiences.css";

// TODO: Restructure experience
function Experiences() {
    return(
        <section id="experiences">
            <div className="container">
                <h1 className="subtitle">My Experience</h1>
                <div className="experience-list">
                    <div className="experience">
                        <img src="https://placehold.co/300x400" alt="" />
                        <div className="layer">
                            <h3>Turing</h3>
                            <h4>Delivery Data Scientist</h4>
                            <ul>
                                <li>
                                    Execute advanced Supervised Fine-Tuning (SFT) processes to enhance the performance and accuracy of language models by 15-20%.
                                </li>
                                <li>
                                    Initiated the implementation of new evaluation frameworks for AI model performance, which streamlined testing phases and reduced development time by 20%, allowing for quicker deployment of updates and features.
                                </li>
                                <li>
                                    Deliver comprehensive, data-driven reports to clients, highlighting key insights and actionable recommendations to optimize model performance.
                                </li>
                            </ul>
                            <a href=""></a>
                        </div>
                    </div>
                    <div className="experience">
                        <img src="https://placehold.co/300x400" alt="" />
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
                            <a href=""></a>
                        </div>
                    </div>
                    <div className="experience">
                        <img src="https://placehold.co/300x400" alt="" />
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
                            <a href=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experiences;