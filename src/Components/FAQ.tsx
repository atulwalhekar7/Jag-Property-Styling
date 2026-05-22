import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is property styling and why is it important?",
      answer: "Property styling, or home staging, is the art of preparing a home for sale by enhancing its presentation. It's crucial because first impressions are lasting; a well-styled home helps potential buyers visualize their future lifestyle in the space, often leading to a faster sale and a higher market price."
    },
    {
      question: "How long does the styling process take?",
      answer: "A typical installation is completed in just one day, usually within 4 to 6 hours. However, the planning phase—including the consultation and curation of furniture from our warehouse—generally begins 1-2 weeks before the installation date."
    },
    {
      question: "What is the standard rental period for styled furniture?",
      answer: "Our standard rental period is 6 weeks. This timeline is designed to cover your professional photography, the typical 4-week auction or private sale campaign, and the finalization of the contract. Extensions are available upon request."
    },
    {
      question: "Can you style a home that is currently occupied?",
      answer: "Absolutely. While we love working with empty spaces, we are experts at 'partial styling.' We can work with your existing key pieces and supplement them with our high-end accessories, artwork, and furniture to elevate the overall look."
    },
    {
      question: "What areas of Melbourne do you service?",
      answer: "We service the greater Melbourne metropolitan area and surrounding suburbs. If you are unsure if we cover your location, please reach out to us for a quick confirmation."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <style>{`
        .faq-section {
          padding: 100px 4rem;
          background-color: #F9F7F2;
          font-family: 'Libre Baskerville', serif;
        }

        .faq-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .faq-header .subtitle {
          color: #CDAF91;
          text-transform: uppercase;
          letter-spacing: 4px;
          font-size: 0.98rem;
          font-weight: 700;
          display: block;
          margin-bottom: 1rem;
        }

        .faq-header h2 {
          font-size: 2.8rem;
          color: #060606;
          margin: 0;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .faq-item {
          background: white;
          border: 1px solid #EAE3DD;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUpFAQ 0.6s ease-out forwards;
        }

        @keyframes fadeInUpFAQ {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* staggered delays for animation */
        .faq-item:nth-child(1) { animation-delay: 0.1s; }
        .faq-item:nth-child(2) { animation-delay: 0.2s; }
        .faq-item:nth-child(3) { animation-delay: 0.3s; }
        .faq-item:nth-child(4) { animation-delay: 0.4s; }
        .faq-item:nth-child(5) { animation-delay: 0.5s; }

        .faq-item:hover {
          border-color: #CDAF91;
          box-shadow: 0 10px 20px rgba(205, 175, 145, 0.1);
        }

        .faq-question {
          width: 100%;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: none;
          border: none;
          text-align: left;
          font-family: 'Libre Baskerville', serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #4A4A4A;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .faq-item.active .faq-question {
          color: #CDAF91;
        }

        .faq-icon {
          width: 20px;
          height: 20px;
          position: relative;
          transition: transform 0.4s ease;
        }

        .faq-item.active .faq-icon {
          transform: rotate(45deg);
        }

        .faq-icon::before, .faq-icon::after {
          content: '';
          position: absolute;
          background-color: #CDAF91;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .faq-icon::before {
          width: 100%;
          height: 2px;
        }

        .faq-icon::after {
          width: 2px;
          height: 100%;
        }

        .faq-answer-wrapper {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .faq-item.active .faq-answer-wrapper {
          grid-template-rows: 1fr;
        }

        .faq-answer {
          overflow: hidden;
        }

        .faq-answer p {
          padding: 0 2rem 1.5rem;
          margin: 0;
          color: #6D6D6D;
          line-height: 1.8;
          font-size: 1.05rem;
        }

        @media (max-width: 768px) {
          .faq-section {
            padding: 80px 1.5rem;
          }
          .faq-header h2 {
            font-size: 2.2rem;
          }
          .faq-question {
            padding: 1.2rem 1.5rem;
            font-size: 1.1rem;
          }
        }
      `}</style>

      <section className="faq-section" id="faq">
        <div className="faq-container">
          <div className="faq-header">
            <span className="subtitle">Got Questions?</span>
            <h2>Common Inquiries</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <button 
                  className="faq-question" 
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  {faq.question}
                  <div className="faq-icon"></div>
                </button>
                <div className="faq-answer-wrapper">
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;