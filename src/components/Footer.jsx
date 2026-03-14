import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaArrowUp,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-24 pb-10 relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">

          {/* WHO WE ARE */}
          <div>
            <h3 className="text-white font-semibold mb-4 border-b border-blue-500 inline-block pb-1">
              WHO WE ARE
            </h3>

            <ul className="space-y-3 text-sm mt-4">
              <li className="hover:text-white cursor-pointer transition">About Us</li>
              <li className="hover:text-white cursor-pointer transition">Vision & Mission</li>
              <li className="hover:text-white cursor-pointer transition">Leadership</li>
              <li className="hover:text-white cursor-pointer transition">Our Team</li>
              <li className="hover:text-white cursor-pointer transition">Compliance</li>
            </ul>
          </div>

          {/* WHAT WE DO */}
          <div>
            <h3 className="text-white font-semibold mb-4 border-b border-blue-500 inline-block pb-1">
              WHAT WE DO
            </h3>

            <ul className="space-y-3 text-sm mt-4">
              <li className="hover:text-white cursor-pointer transition">Manpower Outsourcing</li>
              <li className="hover:text-white cursor-pointer transition">Security Services</li>
              <li className="hover:text-white cursor-pointer transition">Housekeeping</li>
              <li className="hover:text-white cursor-pointer transition">HR Consultancy</li>
              <li className="hover:text-white cursor-pointer transition">ISO Consultancy</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-4 border-b border-blue-500 inline-block pb-1">
              CONTACT
            </h3>

            <div className="space-y-4 text-sm mt-4">

              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-blue-500 mt-1" />
                <p>
                  3/290, Vipul Khand, Gomti Nagar  
                  <br />
                  Lucknow – 226010, UP
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-blue-500" />
                <p>+91 XXXXX XXXXX</p>
              </div>

              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-500" />
                <p>info@namdevassociates.com</p>
              </div>

            </div>
          </div>

          {/* SOCIAL + MAP */}
          <div>
            <h3 className="text-white font-semibold mb-4 border-b border-blue-500 inline-block pb-1">
              CONNECT WITH US
            </h3>

            <div className="flex space-x-4 mt-4">

              <a href="#" className="bg-blue-900 p-3 rounded-full hover:scale-110 hover:bg-blue-700 transition transform duration-300 shadow-md">
                <FaFacebookF size={16} />
              </a>

              <a href="#" className="bg-red-600 p-3 rounded-full hover:scale-110 hover:bg-red-500 transition transform duration-300 shadow-md">
                <FaYoutube size={16} />
              </a>

              <a href="#" className="bg-blue-500 p-3 rounded-full hover:scale-110 hover:bg-blue-400 transition transform duration-300 shadow-md">
                <FaTwitter size={16} />
              </a>

              <a href="#" className="bg-[#0A66C2] p-3 rounded-full hover:scale-110 hover:bg-[#004182] transition transform duration-300 shadow-md">
                <FaLinkedinIn size={16} />
              </a>

            </div>

            {/* Google Map */}
            <div className="mt-6 rounded-lg overflow-hidden shadow-md">
              <iframe
                title="Location"
                src="https://www.google.com/maps?q=Gomti+Nagar+Lucknow&output=embed"
                width="100%"
                height="180"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-16 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Namdev Associates. All Rights Reserved.
        </div>

      </div>

      {/* Back To Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-500 hover:scale-110 transition transform duration-300"
      >
        <FaArrowUp size={16} />
      </button>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-400 hover:scale-110 transition transform duration-300"
      >
        <FaWhatsapp size={20} />
      </a>

    </footer>
  );
}
