export default function TailwindDemo() {
    return (
      <div className="bg-gray-100 font-sans">
        {/* Navbar */}
        <nav className="bg-white shadow-lg p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">My Tailwind Site</h1>
          <ul className="hidden md:flex gap-6 text-gray-700">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li className="hover:text-blue-500 cursor-pointer">Services</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
          </ul>
        </nav>
  
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center p-10">
          <h2 className="text-4xl font-bold mb-4 animate-bounce">
            Welcome to My Tailwind Project
          </h2>
          <p className="mb-6">
            Learning Tailwind from Beginner to Advanced in one go 🚀
          </p>
          <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold shadow-md hover:scale-105 transform transition duration-300">
            Get Started
          </button>
        </section>
  
        {/* Features Section */}
        <section className="p-10">
          <h3 className="text-3xl font-bold text-center mb-8">Our Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h4 className="text-xl font-bold mb-2">Fast Development</h4>
              <p className="text-gray-600 mb-4">
                Tailwind helps you build modern designs quickly with pre-built
                classes.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                Learn More
              </button>
            </div>
  
            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h4 className="text-xl font-bold mb-2">Responsive Design</h4>
              <p className="text-gray-600 mb-4">
                Your designs look great on all devices without writing extra CSS.
              </p>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
                Learn More
              </button>
            </div>
  
            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h4 className="text-xl font-bold mb-2">Customizable</h4>
              <p className="text-gray-600 mb-4">
                Easily customize styles with config or inline classes.
              </p>
              <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700">
                Learn More
              </button>
            </div>
          </div>
        </section>
  
        {/* Call to Action */}
        <section className="bg-blue-600 text-white text-center p-10 mt-10">
          <h3 className="text-3xl font-bold mb-4">Ready to start your project?</h3>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transform transition duration-300">
            Contact Us
          </button>
        </section>
  
        {/* Footer */}
        <footer className="bg-gray-800 text-gray-300 text-center p-4">
          <p>&copy; 2025 My Tailwind Site. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  