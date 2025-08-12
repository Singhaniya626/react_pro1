'use client';
import { useState } from 'react';

const imgs = [
  'https://source.unsplash.com/600x600/?nature,1',
  'https://source.unsplash.com/600x600/?nature,2',
  'https://source.unsplash.com/600x600/?nature,3',
  'https://source.unsplash.com/600x600/?nature,4',
  'https://source.unsplash.com/600x600/?nature,5'
];

export default function ImageSliderGrid(): JSX.Element {
  const [start, setStart] = useState(0);

  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () => setStart((s) => Math.min(imgs.length - 1, s + 1));

  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Gallery</h3>
          <div className="space-x-2">
            <button onClick={prev} className="px-3 py-1 bg-gray-200 rounded">Prev</button>
            <button onClick={next} className="px-3 py-1 bg-gray-200 rounded">Next</button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${start * (100 / Math.min(imgs.length, 3))}%)` }}
          >
            {imgs.map((src, idx) => (
              <div key={idx} className="min-w-[33.333%] p-2">
                <div className="aspect-square bg-gray-100">
                  <img src={src} alt={`img-${idx}`} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
