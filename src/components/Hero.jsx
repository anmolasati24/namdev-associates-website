import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
<<<<<<< HEAD

=======
>>>>>>> 9b3dcc22a715c2278a70ef8ff274a1fea1b55c2f
  return (
    <section className="pt-36 md:pt-44 pb-20 md:pb-28 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

<<<<<<< HEAD
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 leading-snug mb-6">
=======
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight md:leading-snug mb-5 md:mb-6">
>>>>>>> 9b3dcc22a715c2278a70ef8ff274a1fea1b55c2f
            Reliable Manpower & Facility Solutions
            <span className="block mt-2 text-gray-800 text-base md:text-lg">
              for Government & Corporate Organizations
            </span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            We solve manpower and compliance challenges by delivering
            structured, ISO-certified and legally compliant workforce
            solutions across India.
          </p>

          {/* Buttons */}
<<<<<<< HEAD
      
              <div className="flex flex-wrap gap-4 mb-8"> <button onClick={()=>navigate("/consultation")} className="bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition shadow-md"> Request a Consultation </button>
           
            <a href="/profile.pdf" target="_blank" rel="noopener noreferrer">
              <button className="border border-blue-900 text-blue-900 px-8 py-3 rounded-md hover:bg-blue-50 transition">
                Download Company Profile
              </button>
            </a>

=======
          <div className="flex flex-wrap gap-3 mb-6 md:mb-8">
            <button
              onClick={() => navigate("/consultation")}
              className="bg-blue-900 text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-md hover:bg-blue-800 transition shadow-md text-sm sm:text-base"
            >
              Request a Consultation
            </button>

            <button className="border border-blue-900 text-blue-900 px-4 py-2.5 sm:px-5 sm:py-3 rounded-md hover:bg-blue-50 transition text-sm sm:text-base">
              Download Company Profile
            </button>
>>>>>>> 9b3dcc22a715c2278a70ef8ff274a1fea1b55c2f
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <span>✔ ISO 9001:2015 Certified</span>
            <span>✔ Government Approved Vendor</span>
            <span>✔ PAN India Operations</span>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/assets/em.jpeg"
              alt="Manpower Services"
              className="w-full h-56 sm:h-72 md:h-80 lg:h-[450px] object-cover"
            />
          </div>
<<<<<<< HEAD

          <div className="absolute -bottom-6 -left-6 bg-blue-900 w-32 h-32 rounded-xl opacity-10"></div>
=======
>>>>>>> 9b3dcc22a715c2278a70ef8ff274a1fea1b55c2f
        </div>

      </div>
    </section>
  );
}