import { useState } from "react";
import { FaPhoneAlt, FaBriefcase, FaFileAlt, FaSearch } from "react-icons/fa";
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
        <div className="max-w-7xl mx-auto flex justify-center items-center space-x-10 text-blue-900 text-lg">

          <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-700 transition">
            <FaPhoneAlt />
            <span className="text-sm font-medium">Helpline</span>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-700 transition">
            <FaBriefcase />
            <span className="text-sm font-medium">Careers</span>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-700 transition">
            <FaFileAlt />
            <span className="text-sm font-medium">Tenders</span>
          </div>

          <div className="cursor-pointer hover:text-blue-700 transition">
            <FaSearch />
          </div>

        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Namdev Associates Logo"
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
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

        {/* ISO Badge */}
        <div className="hidden md:flex flex-col items-center border-l pl-6">
          <img
            src="/iso.jpg"
            alt="ISO Certified"
            className="h-16 w-auto object-contain"
          />
          <p className="text-xs text-gray-600 mt-1 font-medium">
            ISO 9001:2015 Certified
          </p>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
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
      <div className="h-1 bg-blue-900"></div>

    </header>
  );
}