import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <h1 className="text-2xl font-bold text-indigo-600">
            BlindTech
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-indigo-600 transition"><Link to="/">Home</Link></a>
            <a href="/about" className="hover:text-indigo-600 transition"><Link to="/about">About</Link></a>
            <a href="/service" className="hover:text-indigo-600 transition"><Link to="/service">Services</Link></a>
            <a href="/contact" className="hover:text-indigo-600 transition"><Link to="/contact">Contact</Link></a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col p-4 space-y-4">
            <a href="#" className="hover:text-indigo-600">Home</a>
            <a href="#" className="hover:text-indigo-600">About</a>
            <a href="#" className="hover:text-indigo-600">Services</a>
            <a href="#" className="hover:text-indigo-600">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;