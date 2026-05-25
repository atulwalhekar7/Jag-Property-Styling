import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <style>{`
        .footer {
          background-color: #D3D3D3;
          color: #ECE6DF;
          font-family: 'Libre Baskerville', serif;
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
          gap: 20px;
          margin-top: 25px;
        }

        .social-links a {
          color: #070707;
          text-decoration: none;
          font-size: 0.85rem;
          border: 1px solid #CDAF91;
          padding: 8px 15px;
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          background-color: #CDAF91;
          color: #4A4A4A;
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
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
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