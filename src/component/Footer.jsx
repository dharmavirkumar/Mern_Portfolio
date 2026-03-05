import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-10">
        
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              BlindTech
            </h2>
            <p className="text-sm">
              Building modern web experiences using React and Tailwind CSS.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
                
              <li><a href="#" className="hover:text-white"><Link to='/'>Home</Link></a></li>
              <li><a href="#" className="hover:text-white"><Link to='/about'>About</Link></a></li>
              <li><a href="#" className="hover:text-white"><Link to='/service'>Services</Link></a></li>
              <li><a href="#" className="hover:text-white"><Link to='/contact'>Contact</Link></a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">Facebook</a>
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">Instagram</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          © {new Date().getFullYear()} MyBrand. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;