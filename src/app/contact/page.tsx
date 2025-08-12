'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert('Form submitted!');
  };

  return (
    <div className="grid md:grid-cols-2 gap-4 p-4">
      <div>
        <h2 className="text-xl font-bold">Contact Details</h2>
        <p>📍 Address: Example Street, City</p>
        <p>📞 Phone: +91 9999999999</p>
        <p>✉ Email: info@example.com</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input type="text" placeholder="Name" className="border p-2"
          onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input type="email" placeholder="Email" className="border p-2"
          onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <textarea placeholder="Message" className="border p-2"
          onChange={(e) => setForm({ ...form, message: e.target.value })} />
        <button type="submit" className="bg-blue-600 text-white py-2">Send</button>
      </form>
    </div>
  );
}
