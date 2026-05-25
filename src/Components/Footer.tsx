import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <style>{`
        .footer {
          background-color: #D3D3D3;
          color: #ECE6DF;
          font-family: 'Playfair Display';
          padding: 80px 4rem 30px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 60px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-section h3 {
          color: #070707;
          font-size: 1.2rem;
          margin-bottom: 25px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .footer-brand p {
          line-height: 1.8;
          font-size: 0.95rem;
          color: #070707;
          max-width: 400px;
        }

        .footer-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 15px;
        }

        .footer-links a {
          text-decoration: none;
          color: #070707;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .footer-links a:hover {
          color: #CDAF91;
          transform: translateX(5px);
        }

        .contact-info p {
          margin-bottom: 15px;
          font-size: 0.9rem;
          color: #070707;
        }

        .social-links {
          display: flex;
          gap: 15px;
          margin-top: 25px;
        }

        .social-links a {
          color: #070707;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border: 1px solid #CDAF91;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .social-links svg {
          width: 20px;
          height: 20px;
          fill: currentColor;
        }

        .social-links a:hover {
          background-color: #CDAF91;
          color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(205, 175, 145, 0.3);
        }

        .footer-bottom {
          border-top: 1px solid #5A5A5A;
          margin-top: 60px;
          padding-top: 30px;
          text-align: center;
          font-size: 0.8rem;
          color: #070707;
          letter-spacing: 1px;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer {
            padding: 60px 2rem 30px;
          }
          .footer-section { text-align: left; }
        }
      `}</style>
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-section footer-brand">
            <h3>Jag Property Styling</h3>
            <p>
              Transforming houses into homes through sophisticated design. 
              Our expert styling services enhance the natural beauty of your property, 
              ensuring it stands out in today's market.
            </p>
          </div>

          <div className="footer-section footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/our-process">Our Process</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section contact-info">
            <h3>Contact Us</h3>
            <p>Email: hello@jagpropertystyling.com.au</p>
            <p>Phone: +61 400 000 000</p>
            <p>Melbourne, Victoria</p>
            <div className="social-links">
              <a href="https://www.instagram.com/jagpropertystyling/?hl=en" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 3.656 11.127 8.812 13.223v-9.357H5.408v-3.866h3.404V9.808c0-3.359 1.999-5.212 5.059-5.212 1.465 0 2.998.261 2.998.261v3.298h-1.69c-1.665 0-2.183 1.034-2.183 2.094v2.52h3.717l-.594 3.866h-3.123v9.357C20.344 23.2 24 18.063 24 12.073z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.646 1.174-1.326 2.417-1.326 3.544 0 4.194 2.333 4.194 5.364v6.853zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} JAG PROPERTY STYLING. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;