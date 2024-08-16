import Link from 'next/link';

export default function Footer() {
    return (
    //     <footer className="bg-gray-800 text-white py-6">
    //   <div className="container mx-auto text-center">
    //     <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
    //     <div className="mt-4">
    //       <a href="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
    //       <a href="#" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
    //       <a href="#" className="text-gray-400 hover:text-white mx-2">Contact Us</a>
    //     </div>
    //   </div>
    // </footer>
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul>
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white">About Us</Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-400 hover:text-white">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul>
            <li>
              <Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link>
            </li>
            <li>
              <Link href="/support" className="text-gray-400 hover:text-white">Support Center</Link>
            </li>
            <li>
              <Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
            </li>
            <li>
              <Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-4">Connect with Us</h4>
          <div className="flex justify-center md:justify-start">
            <a href="https://facebook.com" className="text-gray-400 hover:text-white mx-2">Facebook</a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white mx-2">Twitter</a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white mx-2">Instagram</a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white mx-2">LinkedIn</a>
          </div>
          <h4 className="text-lg font-semibold mt-4">Contact Us</h4>
          <p className="text-gray-400">1234 Street Name, City, State, 56789</p>
          <p className="text-gray-400">Email: contact@yourcompany.com</p>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
    );
}
