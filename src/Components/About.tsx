import React from 'react';
import aboutImage from '../assets/about2.jpg';
import aboutImage2 from '../assets/img1.jpg';
import aboutImage3 from '../assets/img3.jpg';

const About: React.FC = () => {
  return (
    <>
      <style>{`
        .about-section {
          background-color: #C9C0BB;
          font-family: 'Playfair Display', serif;
          overflow: hidden;
          padding: 80px 4rem;
        }

        .about-content {
          display: flex;
          align-items: center;
          gap: 60px;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ── Left: stacked image collage ── */
        .about-image-collage {
          flex: 1.1;
          position: relative;
          height: 480px;
          min-width: 0;
        }

        /* Small portrait card – top-left */
        .img-card-sm {
          position: absolute;
          top: 0;
          left: 0;
          width: 42%;
          height: 55%;
          z-index: 1;
          border-radius: 2px;
          border: 6px solid #fff;
          transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, z-index 0s;
          box-shadow: 0 4px 20px rgba(0,0,0,0.12);
          overflow: hidden;
        }

        /* Large landscape card – center / right, taller */
        .img-card-lg {
          position: absolute;
          top: 40px;
          left: 30%;
          right: 0;
          height: 90%;
          z-index: 2;
          border-radius: 2px;
          border: 6px solid #fff;
          transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, z-index 0s;
          box-shadow: 0 8px 32px rgba(0,0,0,0.15);
          overflow: hidden;
        }

        /* Small landscape card – bottom-left, partially behind large */
        .img-card-xs {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 38%;
          height: 38%;
          z-index: 3;
          border-radius: 2px;
          border: 6px solid #fff;
          transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, z-index 0s;
          box-shadow: 0 4px 20px rgba(0,0,0,0.12);
          overflow: hidden;
        }

        /* Pop out animation on hover */
        .img-card-sm:hover, .img-card-lg:hover, .img-card-xs:hover {
          transform: scale(1.08) translateY(-15px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          z-index: 10;
        }

        .about-image-collage img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        /* ── Right: text block ── */
        .about-text {
          flex: 1;
          padding-left: 20px;
        }

        .about-text h2 {
          color: #0f0f0f;
          font-size: 2.4rem;
          font-weight: 700;
          margin: 0 0 1.5rem 0;
          line-height: 1.2;
        }

        .about-text p {
          color: #0c0c0c;
          font-size: 20px;
          line-height: 1.85;
          margin-bottom: 2rem;
          font-family: 'Georgia', serif;
        }

        .about-btn {
          display: inline-block;
          padding: 12px 32px;
          border: 1.5px solid #0f0f0f;
          color: #0f0f0f;
          background: transparent;
          font-family: 'Playfair Display', serif;
          font-size: 0.95rem;
          letter-spacing: 1px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.25s, color 0.25s;
          border-radius: 1px;
        }

        .about-btn:hover {
          background: #0f0f0f;
          color: #fff;
        }

        /* ── Animations ── */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .about-image-collage {
          animation: fadeInUp 0.9s ease-out forwards;
        }

        .about-text {
          animation: fadeInUp 0.9s ease-out 0.2s both;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .about-content {
            flex-direction: column;
            gap: 40px;
          }
          .about-section { padding: 60px 2rem; }
          .about-image-collage { width: 100%; height: 360px; }
          .about-text { padding-left: 0; }
        }

        @media (max-width: 480px) {
          .about-text h2 { font-size: 1.8rem; }
          .about-image-collage { height: 280px; }
        }
      `}</style>

      <section className="about-section" id="about">
        <div className="about-content">

          {/* ── Image collage ── */}
          <div className="about-image-collage">
            {/* Top-left small image */}
            <div className="img-card-sm">
              <img src={aboutImage2} alt="Styled interior detail" />
            </div>

            {/* Center-right large image */}
            <div className="img-card-lg">
              <img src={aboutImage} alt="Modern living room styled by Jag Property Styling" />
            </div>

            {/* Bottom-left small image */}
            <div className="img-card-xs">
              <img src={aboutImage3} alt="Interior styling accent" />
            </div>
          </div>

          {/* ── Text block ── */}
          <div className="about-text">
            <h2>About Our Studio</h2>
            <p>
              At <strong>Jag Property Styling</strong>, we understand that first impressions are everything.
              We specialize in transforming residential spaces into high-end, aspirational environments
              that capture the imagination of potential buyers and maximize market value.
            </p>
            <p>
              Our approach blends timeless elegance with contemporary trends. By carefully selecting
              artisanal furniture, original artwork, and bespoke textiles, we create a cohesive
              narrative for every home — inviting people to see their future lives within the walls.
            </p>
            
          </div>

        </div>
      </section>
    </>
  );
};

export default About;
