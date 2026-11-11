
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav>
      <div className="nav-left">
        <Link to="/lineup">ARTISTS</Link>
        <Link to="/schedule">SCHEDULE</Link>
      </div>

      <Link to="/" className="nav-logo">FQ</Link>
      <button className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="hamburger"></span>
      </button>

      {isMenuOpen && (
        <div className="nav-menu">
             <Link to="/lineup" onClick={() => setIsMenuOpen(false)}>ARTISTS</Link>
          <Link to="/schedule" onClick={() => setIsMenuOpen(false)}>SCHEDULE</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
          <Link to="/tickets" onClick={() => setIsMenuOpen(false)}>TICKETS</Link>
       
        </div>
      )}
      <div className="nav-right">
        <Link to="/about">ABOUT</Link>
        <Link to="/tickets">TICKETS</Link>
      </div>
    </nav>
  );
}

export default NavBar;
