import React from 'react';
import displayImage from '../assets/image2.jpg';

const Image1: React.FC = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

        .image1-container {
          position: relative;
          width: 100%;
          height: 500px;
          overflow: hidden;
          font-family: 'Playfair Display';
        }
        @keyframes imageZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }

        .image1-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1); /* Initial state for zoom */
          animation: imageZoom 10s infinite alternate ease-in-out; /* Subtle continuous zoom */
        }

        @keyframes textFadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .image1-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);/* Black shadow overlay */
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 0 2rem;
        }

        .image1-text {
          color: #ffffff;
        }

        .image1-text h3 {
          font-size: 30px;
          margin-bottom: 1.5rem;
          letter-spacing: 3px;
         
          
        }

        .image1-text p {
          font-size: 1.25rem;
          max-width: 700px;
          line-height: 1.8;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .image1-container { height: 400px; }
          .image1-text h3 { font-size: 2rem; } /* Changed from h2 to h3 as per previous request */
          .image1-text p { font-size: 1rem; }
        }
      `}</style>

      <div className="image1-container">
        <img src={displayImage} alt="Jag Property Styling Showcase" className="image1-img" />
        <div className="image1-overlay">
          <div className="image1-text">
            <h3>Creating Luxury Home Experiences Through Thoughtful Styling <br />
            Elegant Furniture And Carefully Curated Interior Design Details</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Image1;