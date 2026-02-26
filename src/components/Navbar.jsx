function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#top" className="navbar__logo">
          <span>OTHNIEL JOHN</span>
        </a>

        <ul className="navbar__links">
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#projects">Case Studies</a>
          </li>

          <li>
            <a href="#experience">Experience</a>
          </li>

          <li>
            <a
              href="/Othniel-John-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__resume"
            >
              Resume
            </a>
          </li>

          <li>
            <a href="#contact" className="navbar__cta">
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;