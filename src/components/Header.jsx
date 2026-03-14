import { useState } from "react";
<<<<<<< HEAD
import { FaPhoneAlt, FaBriefcase, FaFileAlt, FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
=======
import { FaPhoneAlt, FaBriefcase, FaFileAlt, FaSearch, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
>>>>>>> 9b3dcc22a715c2278a70ef8ff274a1fea1b55c2f

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `relative pb-1 transition ${
      isActive
        ? "text-blue-900 border-b-2 border-blue-900"
        : "hover:text-blue-900 border-b-2 border-transparent"
    }`;

  return (
    <header className="w-full fixed top-0 z-50 bg-white shadow-sm">

      {/* Top Utility Bar */}
      <div className="bg-gray-100 py-3">
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto flex justify-center items-center space-x-10 text-blue-900 text-lg">

          <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-700 transition">
            <FaPhoneAlt />
            <span className="text-sm font-medium">Helpline</span>
=======
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-2 sm:gap-6 text-blue-900 text-xs sm:text-sm md:text-base px-3">

          <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-700 transition">
            <FaPhoneAlt />
            <span className="font-medium">Helpline</span>
>>>>>>> 9b3dcc22a715c2278a70ef8ff274a1fea1b55c2f
          </div>

          <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-700 transition">
            <FaBriefcase />
<<<<<<< HEAD
            <span className="text-sm font-medium">Careers</span>
=======
            <span className="font-medium">Careers</span>
>>>>>>> 9b3dcc22a715c2278a70ef8ff274a1fea1b55c2f
          </div>

          <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-700 transition">
            <FaFileAlt />
<<<<<<< HEAD
            <span className="text-sm font-medium">Tenders</span>
=======
            <span className="font-medium">Tenders</span>
>>>>>>> 9b3dcc22a715c2278a70ef8ff274a1fea1b55c2f
          </div>

          <div className="cursor-pointer hover:text-blue-700 transition">
            <FaSearch />
          </div>

        </div>
      </div>

      {/* Main Navigation */}
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
=======
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8 py-3 md:py-4">
>>>>>>> 9b3dcc22a715c2278a70ef8ff274a1fea1b55c2f

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Namdev Associates Logo"
<<<<<<< HEAD
            className="h-14 w-auto object-contain"
=======
            className="h-12 md:h-14 w-auto object-contain"
>>>>>>> 9b3dcc22a715c2278a70ef8ff274a1fea1b55c2f
          />
        </div>

        {/* Desktop Menu */}
<<<<<<< HEAD
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">

          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About Us
          </NavLink>

          <NavLink to="/services" className={navClass}>
            Services
          </NavLink>

          <NavLink to="/compliance" className={navClass}>
            Compliance
          </NavLink>

          <NavLink to="/clients" className={navClass}>
            Clients
          </NavLink>

          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>

        </nav>

=======
        <nav className="hidden md:flex flex-wrap gap-3 lg:gap-8 font-medium text-gray-700 text-sm md:text-base">

          <Link to="/" className="hover:text-blue-900 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-900 transition">About</Link>
          <Link to="/services" className="hover:text-blue-900 transition">Services</Link>
          <Link to="/compliance" className="hover:text-blue-900 transition">Compliance</Link>
          <Link to="/clients" className="hover:text-blue-900 transition">Clients</Link>
          <Link to="/contact" className="hover:text-blue-900 transition">Contact</Link>

        </nav>

>>>>>>> 9b3dcc22a715c2278a70ef8ff274a1fea1b55c2f
        {/* ISO Badge */}
        <div className="hidden md:flex flex-col items-center border-l pl-6">
          <img
            src="/iso.jpg"
            alt="ISO Certified"
<<<<<<< HEAD
            className="h-16 w-auto object-contain"
=======
            className="h-14 w-auto object-contain"
>>>>>>> 9b3dcc22a715c2278a70ef8ff274a1fea1b55c2f
          />
          <p className="text-xs text-gray-600 mt-1 font-medium">
            ISO 9001:2015 Certified
          </p>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Overlay */}
      {menuOpen && (
<<<<<<< HEAD
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md font-medium text-gray-700">

          <NavLink to="/" onClick={() => setMenuOpen(false)} className={navClass}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={() => setMenuOpen(false)} className={navClass}>
            About Us
          </NavLink>

          <NavLink to="/services" onClick={() => setMenuOpen(false)} className={navClass}>
            Services
          </NavLink>

          <NavLink to="/compliance" onClick={() => setMenuOpen(false)} className={navClass}>
            Compliance
          </NavLink>

          <NavLink to="/clients" onClick={() => setMenuOpen(false)} className={navClass}>
            Clients
          </NavLink>

          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={navClass}>
            Contact
          </NavLink>

        </div>
      )}

      {/* Bottom Blue Line */}
=======
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* Close Button */}
        <div className="flex justify-between items-center px-6 py-5 border-b">

          <img
            src="/logo.png"
            alt="logo"
            className="h-10"
          />

          <button
            className="text-2xl text-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>

        </div>

        {/* Mobile Links */}
        <nav className="flex flex-col space-y-6 px-6 py-6 font-medium text-gray-700">

          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-900">Home</Link>

          <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-blue-900">About Us</Link>

          <Link to="/services" onClick={() => setMenuOpen(false)} className="hover:text-blue-900">Services</Link>

          <Link to="/compliance" onClick={() => setMenuOpen(false)} className="hover:text-blue-900">Compliance</Link>

          <Link to="/clients" onClick={() => setMenuOpen(false)} className="hover:text-blue-900">Clients</Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-900">Contact</Link>

        </nav>

      </div>

      {/* Bottom Line */}
>>>>>>> 9b3dcc22a715c2278a70ef8ff274a1fea1b55c2f
      <div className="h-1 bg-blue-900"></div>

    </header>
  );
}