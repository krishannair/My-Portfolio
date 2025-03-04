import React, { useState } from "react";
import "../css/Contact.css";

function Contact() {
    const [message, setMessage] = useState("");
    
    const scriptURL = "https://script.google.com/macros/s/AKfycbyZ_GLhkzo3IEqsaTnmn4ilA4_YNQ1pDPkOTUeOyvnqFAF-5oy9npTFHl9YZFMoOU2r/exec"; // Replace with your actual Google Script URL
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
    
        try {
        const response = await fetch(scriptURL, { method: "POST", body: formData });
        if (response.ok) {
            setMessage("Form submitted successfully!");
            e.target.reset(); // Clear the form after successful submission
        } else {
            setMessage("Submission failed. Try again.");
        }
        } catch (error) {
        setMessage("Error: " + error.message);
        }
    };
    return(
        <section id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="contact-subtitle">Contact Me</h1>
                        <p>
                            <a href="mailto:krishanvnair2001@gmail.com">krishanvnair2001@gmail.com</a>
                        </p>
                        <p>+91-9869980391</p>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/krishan-nair/"><img src="../images/linkedin-icon.svg" alt="Go to LinkedIn"/></a>
                            <a href="https://github.com/krishannair"><img src="../images/github-icon.svg" alt="Go to Github"/></a>
                        </div>
                        <a className="btn btn2" href="images/Krishan.pdf" download>Download CV</a>
                    </div>
                    <div className="contact-right">
                        <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                            <input type="text" name="Name" placeholder="Your Name" required/>
                            <input type="email" name="Email" placeholder="Your Email" required/>
                            <textarea name="Message" rows="6" placeholder="Your Message"/>
                            <button className="btn btn2" type="submit">Submit</button>
                        </form>
                        <span id="msg">{message}</span>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright ©️ Krishan Vinod Nair.</p>
            </div>
        </section>
    );
}

export default Contact;