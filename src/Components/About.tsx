import React from 'react';
import aboutImage from '../assets/about2.jpg';

const About: React.FC = () => {
  return (
    <>
      <style>{`
        .about-section {
          padding: 100px 4rem;
          background-color: #C9C0BB;
          font-family: 'Libre Baskerville', serif;
          overflow: hidden;
        }

        .about-header {
          text-align: center;
          margin-bottom: 80px;
          animation: fadeInUp 1s ease-out forwards;
        }

        .about-header p {
          color: #607D8B;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 0.98rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .about-header h2 {
          color: #0f0f0f;
          font-size: 2.8rem;
          margin: 0;
          position: relative;
          display: inline-block;
        }

        .about-header h2::after {
          content: '';
          position: absolute;
          width: 60px;
          height: 2px;
          background-color: #607D8B;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
        }

        .about-content {
          display: flex;
          align-items: center;
          gap: 80px;
          animation: fadeInUp 1s ease-out 0.3s forwards;
          opacity: 0;
        }

        .about-image-wrapper {
          flex: 1;
          position: relative;
        }

        .about-image {
          width: 100%;
          height: 600px;
          object-fit: cover;
          border-radius: 4px;
          transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .about-image:hover {
          transform: translate(-10px, -10px);
        }

        .about-text {
          flex: 1.2;
        }

        .about-text p {
          color: #0f0f0f;
          font-size: 1.15rem;
          line-height: 1.9;
          margin-bottom: 2rem;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1024px) {
          .about-content {
            flex-direction: column;
            gap: 40px;
          }
          .about-section {
            padding: 60px 2rem;
          }
          .about-image {
            height: 400px;
          }
          .about-header h2 {
            font-size: 2.2rem;
          }
          .about-text { text-align: left; }
        }

        @media (max-width: 480px) {
          .about-header h2 { font-size: 1.8rem; }
          .about-text p { font-size: 1.05rem; }
        }
      `}</style>
      <section className="about-section" id="about">
        <div className="about-header">
          <p>Our Philosophy</p>
          <h2>About Our Studio</h2>
        </div>

        <div className="about-content">
          <div className="about-image-wrapper">
            <img 
              src={aboutImage} 
              alt="Modern living room styled by Jag Property Styling" 
              className="about-image" 
            />
          </div>

          <div className="about-text">
            <p>
              At <span className="highlight">Jag Property Styling</span>, we understand that first impressions are everything. We specialize in transforming residential spaces into high-end, aspirational environments that capture the imagination of potential buyers and maximize market value.
            </p>
            <p>
              Our approach blends timeless elegance with contemporary trends. By carefully selecting artisanal furniture, original artwork, and bespoke textiles, we create a cohesive narrative for every home. We don't just "stage" properties; we curate experiences that invite people to see their future lives within the walls.
            </p>
            <p>
              With years of experience in the Melbourne property market, our stylists bring a keen eye for architectural detail and spatial flow, ensuring every room we touch feels balanced, luxurious, and uniquely welcoming.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;