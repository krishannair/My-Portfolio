import '../css/Header.css';

function Header() {
    return (
        <header>
            <div className="container">
                <nav>
                    <img src="images/logo.png" class="logo"/>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="header-text">
                    <p>Software Developer</p>
                    <h1>Hi, I'm <span>Krishan Nair</span><br/> from India</h1>
                </div>

            </div>
        </header>
    );
}

export default Header;