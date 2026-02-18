function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#top" className="navbar__logo">
          <span>Neil</span>
        </a>

        <ul className="navbar__links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact" className="navbar__cta">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
