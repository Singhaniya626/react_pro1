'use client';
import { useEffect, useState } from 'react';

const data = [
  { name: 'Rahul', text: 'Great service, highly recommend!' },
  { name: 'Sita', text: 'Very professional and fast.' },
  { name: 'Aman', text: 'Loved the result.' }
];

export default function Testimonials(){
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % data.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-xl font-semibold">Testimonials</h3>
        <div className="mt-6">
          <blockquote className="italic text-gray-700">“{data[i].text}”</blockquote>
          <p className="mt-3 font-medium">— {data[i].name}</p>
        </div>
      </div>
    </section>
  );
}
