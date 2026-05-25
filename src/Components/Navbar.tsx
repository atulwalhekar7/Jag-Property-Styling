import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

        body {
          margin: 0;
        }

        .navbar {
          font-family: 'Libre Baskerville', serif;
          background-color: #D3D3D3;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 4rem;
          border-bottom: 1px solid #EAE3DD;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .nav-logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #4A4A4A;
          text-decoration: none;
          letter-spacing: -0.5px;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-item {
          text-decoration: none;
          color: #4A4A4A;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-item:hover {
          color: black;
        }

        .nav-item::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -4px;
          left: 0;
          background-color: #CDAF91;
          transition: width 0.3s ease;
        }

        .nav-item:hover::after {
          width: 100%;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          background: none;
          border: none;
          gap: 5px;
          padding: 5px;
          z-index: 1001;
        }

        .bar {
          display: block;
          width: 25px;
          height: 2px;
          background-color: #4A4A4A;
          transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 1rem 1.5rem;
            flex-direction: row;
            justify-content: space-between;
          }

          .hamburger {
            display: flex;
          }

          /* Hamburger Animation */
          .hamburger.active .bar:nth-child(1) {
            transform: translateY(7px) rotate(45deg);
          }
          .hamburger.active .bar:nth-child(2) {
            opacity: 0;
          }
          .hamburger.active .bar:nth-child(3) {
            transform: translateY(-7px) rotate(-45deg);
          }

          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: #D3D3D3;
            flex-direction: column;
            gap: 0;
            padding: 0;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border-top: 1px solid #EAE3DD;
            box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          }

          .nav-links.active {
            max-height: 400px;
          }

          .nav-links li {
            width: 100%;
            border-bottom: 1px solid #EAE3DD;
          }

          .nav-item {
            display: block;
            padding: 1.2rem;
            text-align: center;
            font-size: 0.8rem;
          }
          .nav-item::after {
            display: none;
          }
        }
      `}</style>
      <nav className="navbar">
        <a href="/" className="nav-logo">Jag Property Styling</a>

        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="/our-process" className="nav-item" onClick={() => setIsOpen(false)}>Our Process</a></li>
          <li><a href="/faq" className="nav-item" onClick={() => setIsOpen(false)}>FAQ</a></li>
          <li><a href="/gallery" className="nav-item" onClick={() => setIsOpen(false)}>Gallery</a></li>
          <li><a href="/contact" className="nav-item" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;