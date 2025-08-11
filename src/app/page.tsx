export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-indigo-600">MyWebsite</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-indigo-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">About</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">Services</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">Contact</a>
          </nav>
          <button className="md:hidden p-2 text-gray-600 hover:text-indigo-600">
            ☰
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to MyWebsite</h2>
          <p className="text-lg sm:text-xl mb-6">
            This is a fully responsive Tailwind CSS demo page in Next.js 🚀
          </p>
          <a
            href="#"
            className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Our Features</h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Fast Performance", desc: "Lightning fast loading speed for better UX." },
              { title: "Responsive Design", desc: "Looks perfect on mobile, tablet, and desktop." },
              { title: "Easy Customization", desc: "Easily adaptable to your needs." },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition"
              >
                <div className="text-indigo-600 text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
