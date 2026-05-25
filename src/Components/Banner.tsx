import React from 'react';
import bannerVideo from '../assets/banner-video2.mp4';

const Banner: React.FC = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

        .furniture-banner {
          font-family: 'Playfair Display';
          background-color: #ECE6DF;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          min-height: 500px;
          overflow: hidden;
          position: relative;
          border: 1px solid #EAE3DD;
          border-radius: 8px;
        }

        .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.45);
          z-index: 1;
        }

        .banner-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .banner-content {
          position: relative;
          max-width: 800px;
          padding: 80px 40px;
          padding: 60px 40px;
          z-index: 2;
          animation: fadeIn 1.2s ease-out;
          animation: fadeInUp 1.2s cubic-bezier(0.22, 1, 0.36, 1);
          text-align: center;
          margin: 20px;
        }

        .banner-content h4 {
          color: #CDAF91;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 0.9rem;
          margin-bottom: 10px;
        }

        .banner-content h1 {
          color: #ffffff;
          font-size: 3.5rem;
          line-height: 1.2;
          margin: 0 0 20px 0;
          text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
        }

        .banner-content p {
          color: #ffffff;
          font-size: 1.1rem;
          max-width: 550px;
          margin-bottom: 30px;
          margin-left: auto;
          margin-right: auto;
        }

        .shop-button {
          background-color: #3e2723b8;
          color: white;
          border: none;
          padding: 15px 40px;
          font-family: 'Libre Baskerville', serif;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          animation: heartbeat 1.5s ease-in-out infinite;
          box-shadow: 0 4px 15px rgba(205, 175, 145, 0.3);
        }

        .shop-button:hover {
          background-color: #D9CBBF;
          transform: translateY(-3px);
          animation: none;
          box-shadow: 0 6px 20px rgba(205, 175, 145, 0.4);
        }

        @keyframes heartbeat {
          0% { transform: scale(1); }
          14% { transform: scale(1.05); }
          28% { transform: scale(1); }
          42% { transform: scale(1.05); }
          70% { transform: scale(1); }
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

        @media (max-width: 1024px) {
          .banner-content h1 { font-size: 2.8rem; }
          .banner-content h1 { font-size: 3.2rem; }
        }

        @media (max-width: 768px) {
          .banner-content {
            padding: 60px 20px;
          }
          .banner-content h1 { font-size: 2.2rem; }
          .banner-content h1 { font-size: 2.4rem; }
          .banner-content p { font-size: 1.1rem; }
        }
      `}</style>
      <section className="furniture-banner">
        <div className="banner-overlay"></div>
        <video className="banner-video" autoPlay loop muted playsInline>
          <source src={bannerVideo} type="video/mp4" />
        </video>
        <div className="banner-content">
          
          
          <h1>Elegance in Every Detail</h1>
          <p>
            Discover our curated selection of artisanal furniture designed to 
            bring timeless sophistication and comfort to your living space.
          </p>
          <button className="shop-button">Explore Collection</button>
        </div>
      </section>
    </>
  );
};

export default Banner;