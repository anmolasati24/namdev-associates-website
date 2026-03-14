import { useState } from "react";
import { FaPhoneAlt, FaBriefcase, FaFileAlt, FaSearch, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

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
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-2 sm:gap-6 text-blue-900 text-xs sm:text-sm md:text-base px-3">

          <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-700 transition">
            <FaPhoneAlt />
            <span className="font-medium">Helpline</span>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-700 transition">
            <FaBriefcase />
            <span className="font-medium">Careers</span>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-700 transition">
            <FaFileAlt />
            <span className="font-medium">Tenders</span>
          </div>

          <div className="cursor-pointer hover:text-blue-700 transition">
            <FaSearch />
          </div>

        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8 py-3 md:py-4">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Namdev Associates Logo"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-wrap gap-3 lg:gap-8 font-medium text-gray-700 text-sm md:text-base">
          <NavLink to="/" className={navClass}>Home</NavLink>
          <NavLink to="/about" className={navClass}>About Us</NavLink>
          <NavLink to="/services" className={navClass}>Services</NavLink>
          <NavLink to="/compliance" className={navClass}>Compliance</NavLink>
          <NavLink to="/clients" className={navClass}>Clients</NavLink>
          <NavLink to="/contact" className={navClass}>Contact</NavLink>
        </nav>

        {/* ISO Badge */}
        <div className="hidden md:flex flex-col items-center border-l pl-6">
          <img
            src="/iso.jpg"
            alt="ISO Certified"
            className="h-14 w-auto object-contain"
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
          <img src="/logo.png" alt="logo" className="h-10" />
          <button className="text-2xl text-gray-700" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>
        </div>

        {/* Mobile Links */}
        <nav className="flex flex-col space-y-6 px-6 py-6 font-medium text-gray-700">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className={navClass}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} className={navClass}>About Us</NavLink>
          <NavLink to="/services" onClick={() => setMenuOpen(false)} className={navClass}>Services</NavLink>
          <NavLink to="/compliance" onClick={() => setMenuOpen(false)} className={navClass}>Compliance</NavLink>
          <NavLink to="/clients" onClick={() => setMenuOpen(false)} className={navClass}>Clients</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={navClass}>Contact</NavLink>
        </nav>

      </div>

      {/* Bottom Blue Line */}
      <div className="h-1 bg-blue-900"></div>

    </header>
  );
}