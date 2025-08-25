export default function Footer(){
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center">
        <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
      </div>
    </footer>
  );
}
