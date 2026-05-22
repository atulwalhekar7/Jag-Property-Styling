import React from 'react';
// Replace these with your actual image paths in src/assets/
import step1 from '../assets/ourprocess.jpg';
import step2 from '../assets/ourprocess3.jpg';
import step3 from '../assets/ourprocess4.webp';
import step4 from '../assets/banner.avif';

const OurProcess: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We begin with a personalized on-site walkthrough. Our experts analyze natural light, architectural flow, and target buyer demographics to develop a tailored styling strategy and quote that maximizes your property's appeal.",
      image: step1
    },
    {
      number: "02",
      title: "Design & Curation",
      description: "Our stylists dive into our exclusive warehouse collection to select furniture, original art, and bespoke textiles. Every piece is chosen to create a cohesive narrative that resonates with the character of your home.",
      image: step2
    },
    {
      number: "03",
      title: "Seamless Installation",
      description: "On the day of staging, our professional team handles all logistics. We meticulously place every item and style the finishing touches, transforming the space into an aspirational environment in just a few hours.",
      image: step3
    },
    {
      number: "04",
      title: "Success & De-staging",
      description: "Your property is now market-ready for professional photography and inspections. Once you've achieved a successful sale, our team returns to discreetly and efficiently remove all styling elements.",
      image: step4
    }
  ];

  return (
    <>
      <style>{`
        .process-section {
          padding: 100px 4rem;
          background-color: #eaefd9;
          font-family: 'Libre Baskerville', serif;
          overflow: hidden;
        }

        .process-header {
          text-align: center;
          margin-bottom: 100px;
        }

        .process-header .subtitle {
          color: #795548;
          text-transform: uppercase;
          letter-spacing: 5px;
          font-size: 0.98rem;
          font-weight: 700;
          margin-bottom: 1rem;
          display: block;
        }

        .process-header h2 {
          font-size: 3rem;
          color: #4A4A4A;
          margin: 0;
        }

        .steps-container {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 120px;
        }

        .step-card {
          display: flex;
          align-items: center;
          gap: 100px;
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s ease-out;
          animation: fadeInProcess 1s ease-out forwards;
        }

        @keyframes fadeInProcess {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .step-card:nth-child(even) {
          flex-direction: row-reverse;
        }

        .step-image-wrapper {
          flex: 1;
          position: relative;
          z-index: 1;
        }

        .step-image-wrapper::before {
          content: '';
          position: absolute;
          top: 20px;
          left: 20px;
          right: -20px;
          bottom: -20px;
          border: 1px solid #CDAF91;
          z-index: -1;
          transition: all 0.5s ease;
        }

        .step-card:hover .step-image-wrapper::before {
          transform: translate(-10px, -10px);
        }

        .step-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          display: block;
        }

        .step-content {
          flex: 1;
          position: relative;
        }

        .step-number {
          font-size: 6rem;
          color: #795548;
          font-weight: 700;
          position: absolute;
          top: -60px;
          left: -20px;
          z-index: 0;
        }

        .step-title {
          font-size: 2.2rem;
          color: #4A4A4A;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .step-description {
          color: #6D6D6D;
          line-height: 1.9;
          font-size: 1.1rem;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 1024px) {
          .step-card, .step-card:nth-child(even) {
            flex-direction: column;
            gap: 40px;
            text-align: center;
          }
          .process-section {
            padding: 80px 2rem;
          }
          .step-image {
            height: 350px;
          }
          .step-number {
            position: relative;
            top: 0;
            left: 0;
            font-size: 4rem;
          }
        }

        /* staggered delays for animation */
        .step-card:nth-child(1) { animation-delay: 0.1s; }
        .step-card:nth-child(2) { animation-delay: 0.3s; }
        .step-card:nth-child(3) { animation-delay: 0.5s; }
        .step-card:nth-child(4) { animation-delay: 0.7s; }
      `}</style>

      <section className="process-section" id="our-process">
        <div className="process-header">
          <span className="subtitle">The Styling Journey</span>
          <h2>How We Work</h2>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-image-wrapper">
                <img src={step.image} alt={step.title} className="step-image" />
              </div>
              <div className="step-content">
                <span className="step-number">{step.number}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurProcess;