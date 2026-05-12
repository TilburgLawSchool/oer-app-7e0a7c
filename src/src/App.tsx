import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#0c2340] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Tilburg University</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-[#b46b2a]">Home</a></li>
              <li><a href="#" className="hover:text-[#b46b2a]">OER</a></li>
              <li><a href="#" className="hover:text-[#b46b2a]">About</a></li>
              <li><a href="#" className="hover:text-[#b46b2a]">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#008fc7] text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Open Educational Resources</h2>
          <p className="text-xl mb-8">Explore our collection of free educational materials</p>
          <button className="bg-[#b46b2a] hover:bg-[#a05a25] text-white font-bold py-2 px-4 rounded">Browse Resources</button>
        </div>
      </section>

      {/* Content Sections */}
      <main className="container mx-auto py-12">
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-[#0c2340] mb-4">Featured Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#f0f4e9] p-6 rounded-lg">
              <h4 className="text-xl font-bold text-[#0c2340] mb-2">Resource 1</h4>
              <p className="text-[#0c2340]">Description of resource 1</p>
            </div>
            <div className="bg-[#f0f4e9] p-6 rounded-lg">
              <h4 className="text-xl font-bold text-[#0c2340] mb-2">Resource 2</h4>
              <p className="text-[#0c2340]">Description of resource 2</p>
            </div>
            <div className="bg-[#f0f4e9] p-6 rounded-lg">
              <h4 className="text-xl font-bold text-[#0c2340] mb-2">Resource 3</h4>
              <p className="text-[#0c2340]">Description of resource 3</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-[#0c2340] mb-4">About OER</h3>
          <p className="text-[#0c2340]">Open Educational Resources (OER) are teaching, learning, and research materials in any medium, digital or otherwise, that reside in the public domain or have been released under an open license that permits no-cost access, use, adaptation, and redistribution.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0c2340] text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Tilburg University. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;