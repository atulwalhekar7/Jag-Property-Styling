import React from 'react';
import displayImage from '../assets/image3.avif';

const Image2: React.FC = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

        .image2-container {
          position: relative;
          width: 100%;
          height: 500px;
          overflow: hidden;
          font-family: 'Libre Baskerville', serif;
          
        }

        .image2-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
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
          font-size: 30px;
          margin-bottom: 1.5rem;
          letter-spacing: 3px;
          
        }

        .image2-text p {
          font-size: 1.25rem;
          max-width: 800px;
          line-height: 1.8;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .image2-container { height: 400px; }
          .image2-text h3 { font-size: 2rem; }
          .image2-text p { font-size: 1rem; }
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