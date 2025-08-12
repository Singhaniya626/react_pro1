import Link from 'next/link';

export default function Header(): JSX.Element {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">
          {/* <Link href="/">LOGO</Link> */}
          <img 
              src="logo.png" 
              alt="Xiaomi"
              width={70} 
          />
        </div>

        <nav className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
          <Link href="/blog" className="text-gray-700 hover:text-gray-900">Blog</Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
