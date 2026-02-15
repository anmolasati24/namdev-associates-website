export default function Clients() {
  const clients = [
    { name: "NPCIL", logo: "/images/npcil.png" },
    { name: "Ordnance Factory", logo: "/images/ordnance.jpg" },
    { name: "Linde", logo: "/images/linde.png" },
    { name: "Indian Army", logo: "/images/indian army.png" },
  ];

  return (
    <section className="py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Small Heading */}
        <p className="uppercase tracking-widest text-gray-500 text-sm mb-4">
          Trusted by Industry Leaders
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Major Clients & Partners
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          Supporting Government Ministries, Defence Units and Corporate
          Organizations with structured manpower and compliance excellence.
        </p>

        {/* Divider */}
        <div className="w-24 h-1 bg-blue-900 mx-auto mb-10"></div>

        {/* Government Badge */}
        <div className="mb-12">
          <span className="inline-block bg-blue-900 text-white px-8 py-3 rounded-full text-sm font-medium shadow-md">
            Government & PSU Approved Vendor
          </span>
        </div>

        {/* Contract Highlight */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-800">
            ₹ 8+ Crore Government Contracts Successfully Executed
          </h3>
          <p className="text-gray-600 mt-3">
            Proven track record under Ministry of Defence, Atomic Energy,
            and Central Government Departments.
          </p>
        </div>

        {/* Logo Marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-24 animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center opacity-70 hover:opacity-100 transition duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-20 md:h-24 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
