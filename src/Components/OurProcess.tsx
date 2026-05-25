import React, { useEffect, useRef } from 'react';
// Replace these with your actual image paths in src/assets/
import step1 from '../assets/ourprocess.jpg';
import step2 from '../assets/ourprocess3.jpg';
import step3 from '../assets/ourprocess4.webp';
import step4 from '../assets/banner.avif';

const OurProcess: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: "1",
      title: "Initial Consultation",
      description: "We begin with a personalized on-site walkthrough. Our experts analyze natural light, architectural flow, and target buyer demographics to develop a tailored styling strategy and quote that maximizes your property's appeal.",
      image: step1
    },
    {
      number: "2",
      title: "Design & Curation",
      description: "Our stylists dive into our exclusive warehouse collection to select furniture, original art, and bespoke textiles. Every piece is chosen to create a cohesive narrative that resonates with the character of your home.",
      image: step2
    },
    {
      number: "3",
      title: "Seamless Installation",
      description: "On the day of staging, our professional team handles all logistics. We meticulously place every item and style the finishing touches, transforming the space into an aspirational environment in just a few hours.",
      image: step3
    },
    {
      number: "4",
      title: "Success & De-staging",
      description: "Your property is now market-ready for professional photography and inspections. Once you've achieved a successful sale, our team returns to discreetly and efficiently remove all styling elements.",
      image: step4
    }
  ];

  useEffect(() => {
    /* ── Intersection Observer for scroll-reveal ── */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.15 }
    );

    const targets = sectionRef.current?.querySelectorAll(
      '.process-header, .step-card'
    );
    targets?.forEach((el) => observer.observe(el));

    /* ── Animated number counter ── */
    const numberEls = sectionRef.current?.querySelectorAll<HTMLElement>('.step-number');
    const numObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = parseInt(el.dataset.target || '0', 10);
          // Start counting from 1 to avoid showing 0
          const startValue = 1;
          const duration = 800;
          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            const value = Math.round(startValue + (eased * (target - startValue)));
            el.textContent = String(value);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          numObserver.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    numberEls?.forEach((el) => numObserver.observe(el));

    return () => {
      observer.disconnect();
      numObserver.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        /* ── Reset / base ── */
        .process-section {
          padding: 100px 4rem;
          background-color: #eaefd9;
          font-family: 'Libre Baskerville', serif;
          overflow: hidden;
        }

        /* ── Header reveal ── */
        .process-header {
          text-align: center;
          margin-bottom: 100px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .process-header.is-visible {
          opacity: 1;
          transform: translateY(0);
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
          color: #060606;
          margin: 0;
        }

        /* ── Steps container ── */
        .steps-container {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 120px;
        }

        /* ── Card base (hidden state) ── */
        .step-card {
          display: flex;
          align-items: center;
          gap: 100px;
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* slide-in direction per side */
        .step-card .step-image-wrapper  { transform: translateX(-40px); transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1); }
        .step-card .step-content        { transform: translateX(40px);  transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.9s ease; opacity: 0; }

        /* even cards: flip directions */
        .step-card:nth-child(even) .step-image-wrapper { transform: translateX(40px); }
        .step-card:nth-child(even) .step-content       { transform: translateX(-40px); }

        /* ── Card visible state ── */
        .step-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .step-card.is-visible .step-image-wrapper,
        .step-card.is-visible .step-content {
          transform: translateX(0);
          opacity: 1;
        }

        /* staggered delays so image arrives first */
        .step-card.is-visible .step-image-wrapper { transition-delay: 0.1s; }
        .step-card.is-visible .step-content       { transition-delay: 0.25s; }

        /* ── Even card layout ── */
        .step-card:nth-child(even) {
          flex-direction: row-reverse;
        }

        /* ── Image wrapper + decorative border ── */
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
          transition: transform 0.5s ease;
        }
        .step-card:hover .step-image-wrapper::before {
          transform: translate(-10px, -10px);
        }

        /* ── Image scale-on-hover ── */
        .step-image-overflow {
          overflow: hidden;
        }
        .step-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          display: block;
          transform: scale(1.05);
          transition: transform 1s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .step-card.is-visible .step-image {
          transform: scale(1);
        }
        .step-card:hover .step-image {
          transform: scale(1.03);
        }

        /* ── Content ── */
        .step-content {
          flex: 1;
          position: relative;
        }

        .step-header {
          display: flex;
          align-items: baseline;
          gap: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .step-number {
          font-size: 4.5rem;
          color: #795548;
          font-weight: 700;
          line-height: 1;
          transition: color 0.3s ease;
        }
        .step-title {
          font-size: 2.2rem;
          color: #4A4A4A;
          margin: 0;
        }
        .step-description {
          color: #6D6D6D;
          line-height: 1.9;
          font-size: 1.1rem;
          position: relative;
          z-index: 1;
        }

        /* ── Divider line that draws itself ── */
        .step-divider {
          display: block;
          height: 2px;
          background: #CDAF91;
          margin: 1.2rem 0 1.5rem;
          position: relative;
          z-index: 1;
          transform-origin: left center;
          transform: scaleX(0);
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .step-card.is-visible .step-divider {
          transform: scaleX(1);
          transition-delay: 0.5s;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .step-card,
          .step-card:nth-child(even) {
            flex-direction: column;
            gap: 40px;
            text-align: center;
          }
          .step-card .step-image-wrapper,
          .step-card .step-content,
          .step-card:nth-child(even) .step-image-wrapper,
          .step-card:nth-child(even) .step-content {
            transform: translateX(0) translateY(30px);
          }
          .step-card.is-visible .step-image-wrapper,
          .step-card.is-visible .step-content {
            transform: translateX(0) translateY(0);
          }
          .process-section { padding: 80px 2rem; }
          .step-image { height: 350px; }
          .step-number {
            font-size: 4rem;
          }
          .step-header {
            justify-content: center;
          }
          .step-divider { transform-origin: center center; }
        }
        @media (max-width: 480px) {
          .step-title { font-size: 1.6rem; }
        }
      `}</style>

      <section className="process-section" id="our-process" ref={sectionRef}>
        <div className="process-header" ref={headerRef}>
          <span className="subtitle">The Styling Journey</span>
          <h2>How We Work</h2>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-image-wrapper">
                <div className="step-image-overflow">
                  <img src={step.image} alt={step.title} className="step-image" />
                </div>
              </div>
              <div className="step-content">
                <div className="step-header">
                  <span
                    className="step-number"
                    data-target={parseInt(step.number, 10)}
                  >
                    {step.number}
                  </span>
                  <h3 className="step-title">{step.title}</h3>
                </div>
                <span className="step-divider" aria-hidden="true" />
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