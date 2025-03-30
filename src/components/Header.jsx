import '../css/Header.css';
import { useState, useEffect, useRef } from 'react';

function Header() {
    const [openMenu, setOpenMenu] = useState(["false"]);
    const ulRef = useRef(null);
    useEffect(() => {
        if (openMenu === "true") {
            if (ulRef.current) {
                ulRef.current.style.right = "0px";
            }
        }
        else {
            if (ulRef.current) {
                ulRef.current.style.right = "-200px";
            }
        }
    }, [openMenu]);
    return (
        <header>
            <section id="home">
                <div className="container">
                    <nav>
                        <img src={`${process.env.PUBLIC_URL}/images/logo_blue.png`} alt="My Logo" className="logo"/>
                        <ul ref={ulRef}>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#experiences">Experience</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <div className="menu">
                                <img src={`${process.env.PUBLIC_URL}/images/close-icon.svg`} onClick={() => {setOpenMenu("false");}} alt="Close"/>
                            </div>
                        </ul>
                        <div className="menu">
                            <img src={`${process.env.PUBLIC_URL}/images/menu-icon.svg`} onClick={() => {setOpenMenu("true");}} alt="Menu"/>
                        </div>
                    </nav>
                    <div className="header-text">
                        <p>Software Developer</p>
                        <h1>Hi, I'm <span>Krishan Nair</span><br/> from India</h1>
                    </div>
                </div>
            </section>
        </header>
    );
}

export default Header;