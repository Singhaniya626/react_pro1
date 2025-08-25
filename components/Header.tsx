import Link from 'next/link';
import Image from 'next/image';


export default function Header(){
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">
          {/* <Link href="/">LOGO</Link> */}
            <Image 
              src="/logo.png" 
              alt="Xiaomi"
              width={70}
              height={70}
              priority={true}
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
