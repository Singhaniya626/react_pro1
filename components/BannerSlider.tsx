'use client';
import { useEffect, useState } from 'react';

const slides = [
  {
    title: 'Welcome to Our Site',
    subtitle: 'High quality services',
    img: 'banner/banner-1.webp'
  },
  {
    title: 'Awesome Design',
    subtitle: 'Modern & Clean',
    img: 'banner/banner-2.webp'
  },
  {
    title: 'Fast & Reliable',
    subtitle: 'Built for performance',
    img: 'banner/banner-3.webp'
  }
];

export default function BannerSlider(){
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((p) => (p + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="h-[320px] md:h-[420px]">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            style={{
              backgroundImage: `url(${s.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="bg-black/40 h-full flex items-center">
              <div className="max-w-6xl mx-auto px-6 text-white">
                <h2 className="text-2xl md:text-4xl font-bold">{s.title}</h2>
                <p className="mt-2">{s.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* controls */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <button
          onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
          className="bg-white/80 p-2 rounded-full"
          aria-label="Previous"
        >
          ‹
        </button>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <button
          onClick={() => setIndex((i) => (i + 1) % slides.length)}
          className="bg-white/80 p-2 rounded-full"
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </section>
  );
}
