export default function Hero() {
  return (
    <section className="pt-48 pb-32 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 leading-snug mb-6">


            Reliable Manpower & Facility Solutions
            <span className="block mt-2 text-gray-800">
              for Government & Corporate Organizations
            </span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            We solve manpower and compliance challenges by delivering
            structured, ISO-certified and legally compliant workforce
            solutions across India.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition shadow-md">
              Request a Consultation
            </button>

            <button className="border border-blue-900 text-blue-900 px-8 py-3 rounded-md hover:bg-blue-50 transition">
              Download Company Profile
            </button>
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
              src="/images/meeting.png"
              alt="Manpower Services"
              className="w-full h-[450px] object-cover"
            />
          </div>

          {/* Subtle decorative box */}
          <div className="absolute -bottom-6 -left-6 bg-blue-900 w-32 h-32 rounded-xl opacity-10"></div>
        </div>

      </div>
    </section>
  );
}
