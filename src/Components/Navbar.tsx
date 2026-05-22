import React from 'react';

const Navbar: React.FC = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

        body {
          margin: 0;
        }

        .navbar {
          font-family: 'Libre Baskerville', serif;
          background-color: #CDAF91;
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
          color: #080808;
          font-size: 0.85rem;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-item:hover {
          color: #CDAF91;
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
      `}</style>
      <nav className="navbar">
        <a href="/" className="nav-logo">Jag Property Styling</a>
        <ul className="nav-links">
          <li><a href="/our-process" className="nav-item">Our Process</a></li>
          <li><a href="/faq" className="nav-item">FAQ</a></li>
          <li><a href="/gallery" className="nav-item">Gallery</a></li>
          <li><a href="/contact" className="nav-item">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;