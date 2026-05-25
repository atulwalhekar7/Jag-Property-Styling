import React from 'react';
import displayImage from '../assets/image3.avif';

const Image2: React.FC = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

        .image2-container {
          position: relative; /* Keep relative for overlay positioning */
          width: 100%; /* Ensure it takes full width */
          height: clamp(250px, 45vw, 500px); /* Fluid height based on width */
          overflow: hidden;
          font-family: 'Playfair Display';
          
        }

        .image2-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1); /* Initial state for zoom */
          animation: imageZoom 10s infinite alternate ease-in-out; /* Subtle continuous zoom */
        }

        @keyframes imageZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
        .image2-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5); /* Black shadow overlay */
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 0 2rem;
        }

        .image2-text {
          color: #ffffff;
        }

        .image2-text h3 {
          font-size: clamp(1.15rem, 5vw, 2.2rem);
          margin-bottom: 0;
          letter-spacing: clamp(1px, 0.4vw, 3px);
          line-height: 1.4;
          max-width: 900px;
        }

        .image2-text p {
          font-size: 1.25rem;
          max-width: 800px;
          line-height: 1.8;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .image2-container { height: clamp(300px, 60vh, 500px); }
          .image2-text h3 br { display: none; } /* Remove manual breaks on mobile */
        }

        @keyframes textFadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="image2-container">
        <img src={displayImage} alt="Jag Property Styling Narrative" className="image2-img" />
        <div className="image2-overlay">
          <div className="image2-text">
            <h3>Transform Your Property Into A Beautifully Styled Luxury Space <br />
            That Buyers Instantly Fall In Love With From The First Impression</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Image2;