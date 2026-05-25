import React, { useRef, useState, useEffect } from 'react';
import Image1 from '../assets/img2.avif'
import Image2 from '../assets/bedroom.jpg';
import Image3 from '../assets/Dining area.avif';
import Image4 from '../assets/Study room.jpg';
import Image5 from '../assets/Luxury bathroom.jpg';
import Image6 from '../assets/Outdoor space.jpg';
import Image7 from '../assets/Minimal interior.jpg';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  label?: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, src: Image1, alt: 'Living room sofa', label: 'Living Spaces' },
  { id: 2, src: Image2, alt: 'Modern bedroom', label: 'Bedrooms' },
  { id: 3, src: Image3, alt: 'Dining area', label: 'Dining' },
  { id: 4, src: Image4, alt: 'Study room', label: 'Study & Office' },
  { id: 5, src: Image5, alt: 'Luxury bathroom', label: 'Bathrooms' },
  { id: 6, src: Image6, alt: 'Outdoor space', label: 'Outdoor' },
  { id: 7, src: Image7, alt: 'Minimal interior', label: 'Minimal' },
];

const Gallery: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef(0);
  const scrollStart = useRef(0);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const checkScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  // Auto-scroll every 15 seconds
  const startAutoScroll = () => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 10;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: el.clientWidth * 0.75, behavior: 'smooth' });
      }
    }, 15000);
  };

  useEffect(() => {
    startAutoScroll();
    return () => { if (autoScrollRef.current) clearInterval(autoScrollRef.current); };
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.75;
    el.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' });
    startAutoScroll(); // reset timer on manual nav
  };

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = e.pageX;
    scrollStart.current = trackRef.current?.scrollLeft ?? 0;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    trackRef.current.scrollLeft = scrollStart.current + (dragStart.current - e.pageX);
  };

  const onMouseUp = () => {
    if (isDragging) startAutoScroll(); // reset timer after drag
    setIsDragging(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');

        .gallery-section {
          background-color: #C9C0BB;
          padding: 80px 0 80px;
          font-family: 'Playfair Display', serif;
          overflow: hidden;
        }

        /* ── Centered header ── */
        .gallery-header {
          padding: 0 4rem;
          margin-bottom: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          animation: galleryFadeUp 0.8s ease both;
        }

        .gallery-header p {
          color: #607D8B;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
        }

        .gallery-header h2 {
          color: #0f0f0f;
          font-size: 2.6rem;
          margin: 0;
          position: relative;
          display: inline-block;
        }

        .gallery-header h2::after {
          content: '';
          position: absolute;
          width: 50px;
          height: 2px;
          background: #607D8B;
          bottom: -14px;
          left: 50%;
          transform: translateX(-50%);
        }

        .gallery-view-all {
          margin-top: 28px;
          font-size: 0.88rem;
          color: #607D8B;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          border-bottom: 1px solid #607D8B;
          padding-bottom: 2px;
          transition: color 0.3s ease;
          text-decoration: none;
        }

        .gallery-view-all:hover {
          color: #0f0f0f;
          border-color: #0f0f0f;
        }

        /* ── Carousel ── */
        .gallery-carousel-wrapper {
          position: relative;
        }

        .gallery-track {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding: 20px 4rem 20px;
          cursor: grab;
          user-select: none;
          align-items: flex-end;
        }

        .gallery-track::-webkit-scrollbar { display: none; }
        .gallery-track.dragging { cursor: grabbing; }

        /* ── Cards ── */
        .gallery-card {
          flex: 0 0 auto;
          width: 260px;
          height: 400px;
          border-radius: 6px;
          overflow: hidden;
          position: relative;
          scroll-snap-align: start;
          box-shadow: 0 4px 20px rgba(0,0,0,0.12);
          transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease;
          animation: galleryFadeUp 0.7s ease both;
        }

        .gallery-card:nth-child(even) { height: 460px; }

        .gallery-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 16px 40px rgba(0,0,0,0.2);
        }

        .gallery-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .gallery-card:hover img { transform: scale(1.07); }

        .gallery-card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 40px 18px 18px;
          background: linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .gallery-card:hover .gallery-card-overlay { opacity: 1; }

        .gallery-card-overlay span {
          color: #fff;
          font-size: 1rem;
          letter-spacing: 1px;
          font-family: 'Playfair Display', serif;
        }

        .gallery-card-watermark {
          position: absolute;
          top: 14px;
          right: 14px;
          color: rgba(255,255,255,0.75);
          font-size: 0.7rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          font-family: 'Playfair Display', serif;
          pointer-events: none;
        }

        /* ── Nav buttons ── */
        .gallery-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #fff;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
          transition: background 0.25s, box-shadow 0.25s, opacity 0.25s;
          z-index: 10;
          opacity: 0.9;
        }

        .gallery-nav:hover { background: #0f0f0f; box-shadow: 0 6px 20px rgba(0,0,0,0.25); }
        .gallery-nav:hover svg { stroke: #fff; }
        .gallery-nav:disabled { opacity: 0.3; cursor: default; }

        .gallery-nav svg {
          width: 18px;
          height: 18px;
          stroke: #0f0f0f;
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          transition: stroke 0.25s;
        }

        .gallery-nav-left  { left: 16px; }
        .gallery-nav-right { right: 16px; }

        /* ── Staggered entrance ── */
        @keyframes galleryFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .gallery-card:nth-child(1) { animation-delay: 0.05s; }
        .gallery-card:nth-child(2) { animation-delay: 0.12s; }
        .gallery-card:nth-child(3) { animation-delay: 0.19s; }
        .gallery-card:nth-child(4) { animation-delay: 0.26s; }
        .gallery-card:nth-child(5) { animation-delay: 0.33s; }
        .gallery-card:nth-child(6) { animation-delay: 0.40s; }
        .gallery-card:nth-child(7) { animation-delay: 0.47s; }

        @media (max-width: 768px) {
          .gallery-header { padding: 0 1.5rem; }
          .gallery-track  { padding: 20px 1.5rem; gap: 12px; }
          .gallery-card   { width: 200px; height: 320px; }
          .gallery-card:nth-child(even) { height: 370px; }
          .gallery-header h2 { font-size: 2rem; }
          .gallery-nav { display: none; }
        }
      `}</style>

      <section className="gallery-section" id="gallery">
        <div className="gallery-header">
          <p>Our Work</p>
          <h2>Gallery</h2>
          
        </div>

        <div className="gallery-carousel-wrapper">
          <button
            className="gallery-nav gallery-nav-left"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
          </button>

          <div
            ref={trackRef}
            className={`gallery-track${isDragging ? ' dragging' : ''}`}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            {galleryItems.map((item) => (
              <div key={item.id} className="gallery-card">
                <img src={item.src} alt={item.alt} draggable={false} />
                <span className="gallery-card-watermark">Jag Property Styling</span>
                <div className="gallery-card-overlay">
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>

          <button
            className="gallery-nav gallery-nav-right"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
      </section>
    </>
  );
};

export default Gallery;