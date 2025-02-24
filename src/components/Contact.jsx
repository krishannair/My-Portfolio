function Contact() {
    return(
        <section id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="subtitle">Contact Me</h1>
                        <p>
                            <a href="mailto:krishanvnair2001@gmail.com">krishanvnair2001@gmail.com</a>
                        </p>
                        <p>Phone Number: +91-9869980391</p>
                        <div className="social-icons">
                            <a href=""></a>
                            <a href=""></a>
                            <a href=""></a>
                        </div>
                        <a href="images/Krishan.pdf" download>Download CV</a>
                    </div>
                    <div className="contact-right">
                        <form>
                            <input type="text" name="Name" placeholder="Your Name" required/>
                            <input type="email" name="Email" placeholder="Your Email" required/>
                            <input name="Message" rows="6" placeholder="Your Message"/>
                            <button type="submit">Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;