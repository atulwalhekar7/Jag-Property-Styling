import React, { useEffect, useRef, useState } from 'react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .contact-section {
          padding: 120px 4rem;
          background-color: #F9F0FB;
          font-family: 'Libre Baskerville', serif;
          position: relative;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 100px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease-out, transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .contact-container.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-info-panel {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .contact-label {
          color: #cd9e6e;
          text-transform: uppercase;
          letter-spacing: 5px;
          font-size: 0.98rem;
          font-weight: 700;
          display: block;
          margin-bottom: 1.5rem;
        }

        .contact-title {
          font-size: 3.8rem;
          color: #1a1a1a;
          line-height: 1.1;
          margin: 0 0 2.5rem 0;
        }

        .contact-description {
          font-size: 1.15rem;
          color: #666;
          line-height: 1.9;
          margin-bottom: 4rem;
          max-width: 440px;
        }

        .contact-methods {
          display: grid;
          gap: 3.5rem;
        }

        .method-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          opacity: 0;
          transform: translateX(-20px);
          transition: all 0.8s ease-out;
        }

        .contact-container.visible .method-item:nth-child(1) { transition-delay: 0.4s; opacity: 1; transform: translateX(0); }
        .contact-container.visible .method-item:nth-child(2) { transition-delay: 0.6s; opacity: 1; transform: translateX(0); }
        .contact-container.visible .method-item:nth-child(3) { transition-delay: 0.8s; opacity: 1; transform: translateX(0); }

        .method-item h3 {
          font-size: 0.9rem;
          color: #CDAF91;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
          margin: 0;
        }

        .method-item p, .method-item a {
          font-size: 1.35rem;
          color: #1a1a1a;
          text-decoration: none;
          margin: 0;
          transition: all 0.3s ease;
        }

        .method-item a:hover {
          color: #CDAF91;
          padding-left: 5px;
        }

        .contact-form-panel {
          background-color: #FDFBF7;
          padding: 6rem;
          border-radius: 4px;
          border: 1px solid #F3EDE6;
          box-shadow: 20px 20px 0px rgba(205, 175, 145, 0.05);
        }

        .form-group {
          position: relative;
          margin-bottom: 4rem;
        }

        .form-input, .form-textarea {
          width: 100%;
          padding: 0.8rem 0;
          background: transparent;
          border: none;
          border-bottom: 1px solid #D3D3D3;
          font-family: inherit;
          font-size: 1.1rem;
          color: #1a1a1a;
          transition: all 0.4s ease;
          outline: none;
        }

        .form-input:focus, .form-textarea:focus {
          border-bottom-color: #CDAF91;
        }

        .form-label {
          position: absolute;
          top: 0.8rem;
          left: 0;
          color: #999;
          pointer-events: none;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          font-size: 1.1rem;
        }

        .form-input:focus + .form-label,
        .form-input:not(:placeholder-shown) + .form-label,
        .form-textarea:focus + .form-label,
        .form-textarea:not(:placeholder-shown) + .form-label {
          top: -1.8rem;
          font-size: 0.8rem;
          color: #CDAF91;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 600;
        }

        .form-textarea {
          resize: none;
          min-height: 120px;
        }

        .submit-btn {
          background-color: #1a1a1a;
          color: #fff;
          border: none;
          padding: 1.6rem 3rem;
          width: 100%;
          font-family: 'Libre Baskerville', serif;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 5px;
          cursor: pointer;
          transition: all 0.4s ease;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .submit-btn:hover {
          background-color: #CDAF91;
          transform: translateY(-4px);
          box-shadow: 0 15px 30px rgba(205, 175, 145, 0.2);
        }

        @media (max-width: 1024px) {
          .contact-container { grid-template-columns: 1fr; }
          .contact-info-panel { order: 2; }
          .contact-form-panel { order: 1; padding: 3rem 2rem; }
        }

        @media (max-width: 768px) {
          .contact-section { padding: 80px 1.5rem; }
          .contact-header h2 { font-size: 2.6rem; }
        }

        @media (max-width: 480px) {
          .contact-title { font-size: 2.4rem; }
          .form-group { margin-bottom: 2.5rem; }
          .contact-form-panel { padding: 2rem 1.5rem; }
        }
      `}</style>

      <section className="contact-section" id="contact" ref={sectionRef}>
        <div className={`contact-container ${isVisible ? 'visible' : ''}`}>
          <div className="contact-info-panel">
            <span className="contact-label">Get in touch</span>
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-description">
              Ready to elevate your property's potential? Reach out to our Melbourne studio for a personalized consultation.
            </p>
            
            <div className="contact-methods">
              <div className="method-item">
                <h3>The Studio</h3>
                <p>102 St Kilda Road, Melbourne VIC 3004</p>
              </div>
              <div className="method-item">
                <h3>Email Enquiries</h3>
                <a href="mailto:hello@jagpropertystyling.com.au">hello@jagstyling.com.au</a>
              </div>
              <div className="method-item">
                <h3>Direct Call</h3>
                <a href="tel:+61390000000">+61 3 9000 0000</a>
              </div>
            </div>
          </div>

          <div className="contact-form-panel">
            <form className="jag-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" id="user_name" className="form-input" placeholder=" " required />
                <label htmlFor="user_name" className="form-label">Your Name</label>
              </div>
              
              <div className="form-group">
                <input type="email" id="user_email" className="form-input" placeholder=" " required />
                <label htmlFor="user_email" className="form-label">Email Address</label>
              </div>

              <div className="form-group">
                <textarea id="user_message" className="form-textarea" placeholder=" " required></textarea>
                <label htmlFor="user_message" className="form-label">Tell us about your project</label>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
                <span className="arrow">→</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;