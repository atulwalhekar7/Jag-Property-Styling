import React from 'react';
import bannerImage from '../assets/banner1.webp';

const Banner: React.FC = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

        .furniture-banner {
          font-family: 'Libre Baskerville', serif;
          background-color: #ECE6DF;
          display: flex;
          align-items: stretch;
          justify-content: space-between;
          padding: 0;
          min-height: 500px;
          overflow: hidden;
          position: relative;
          border: 1px solid #EAE3DD;
          border-radius: 8px;
        }

        .banner-content {
          flex: 1;
          padding: 60px;
          z-index: 2;
          animation: slideInLeft 1s ease-out;
        }

        .banner-content h4 {
          color: #CDAF91;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 0.9rem;
          margin-bottom: 10px;
        }

        .banner-content h1 {
          color: #4A4A4A;
          font-size: 3.5rem;
          line-height: 1.2;
          margin: 0 0 20px 0;
        }

        .banner-content p {
          color: #6D6D6D;
          font-size: 1.1rem;
          max-width: 450px;
          margin-bottom: 30px;
        }

        .shop-button {
          background-color: #CDAF91;
          color: white;
          border: none;
          padding: 15px 40px;
          font-family: 'Libre Baskerville', serif;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(205, 175, 145, 0.3);
        }

        .shop-button:hover {
          background-color: #D9CBBF;
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(205, 175, 145, 0.4);
        }

        .banner-visual {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          background-image: url(${bannerImage});
          background-size: cover;
          background-position: center;
          animation: fadeIn 1.5s ease-in;
        }

        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes morphing {
          0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; background-color: #E2D5C9; }
          50% { border-radius: 70% 30% 50% 50% / 30% 60% 40% 70%; background-color: #D9CBBF; }
          100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; background-color: #E2D5C9; }
        }
      `}</style>
      <section className="furniture-banner">
        <div className="banner-content">
          <h4>New Collection 2024</h4>
          <h1>Elegance in Every Detail</h1>
          <p>
            Discover our curated selection of artisanal furniture designed to 
            bring timeless sophistication and comfort to your living space.
          </p>
          <button className="shop-button">Explore Collection</button>
        </div>
        <div className="banner-visual">
          <div className="abstract-shape"></div>
        </div>
      </section>
    </>
  );
};

export default Banner;