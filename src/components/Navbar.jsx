import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="./assets/spyxfamilylogo.png" alt="Spy x Family Logo" />
      </div>

      <div
        className={`menu-icon ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/trailer" onClick={closeMenu}>Trailer</Link></li>
        <li><Link to="/characters" onClick={closeMenu}>Characters</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;