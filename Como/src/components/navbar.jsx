import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="px-8 flex justify-between items-center h-36 w-full">
        <div>
            <img src="../images/como-logo.png" width={112} height={100} alt="logo" />
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Services</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Home</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">About</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Services</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
