'use client';
import { useState } from 'react';
import Image from 'next/image';

const imgs = [
  'slider/1.jpg',
  'slider/2.jpg',
  'slider/3.jpg',
  'slider/4.jpg',
  'slider/5.jpg',
  'slider/6.jpg'
];

export default function ImageSliderGrid() {
  const [start, setStart] = useState(0);

  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () => setStart((s) => Math.min(imgs.length - 1, s + 1));

  return (
    <section className="py-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Image Gallery</h3>
          <div className="space-x-3">
            <button 
              onClick={prev} 
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
              disabled={start === 0}
            >
              Previous
            </button>
            <button 
              onClick={next} 
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
              disabled={start >= imgs.length - 3}
            >
              Next
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl shadow-lg bg-white p-1">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${start * (100 / Math.min(imgs.length, 3))}%)` }}
          >
            {imgs.map((src, idx) => (
              <div key={idx} className="min-w-[33.333%] p-2">
                <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
                  <Image 
                    src={`/${src}`} 
                    alt={`Gallery image ${idx + 1}`} 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-4 space-x-2">
          {imgs.slice(0, imgs.length - 2).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setStart(idx)}
              className={`w-3 h-3 rounded-full ${
                start === idx ? 'bg-indigo-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}