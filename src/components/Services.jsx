export default function Services() {
  const services = [
    {
      title: "Manpower Outsourcing",
      description:
        "Supplying skilled, semi-skilled and unskilled personnel to government and private clients with long-term and short-term contractual deployments.",
      image: "/images/manpower.avif",
    },
    {
      title: "Security Services",
      description:
        "Deployment of trained security guards and supervisory staff for institutional and industrial sites.",
      image: "/images/security.jpg",
    },
    {
      title: "Housekeeping & Sanitation",
      description:
        "Comprehensive housekeeping and sanitation support for offices, plants and institutions.",
      image: "/images/housekeeping.jpg",
    },
    {
      title: "HR Consultancy",
      description:
        "Advisory services on human resource policies, payroll management and regulatory compliance.",
      image: "/images/hr.jpg",
    },
    {
      title: "ISO Quality System Consultancy",
      description:
        "Implementation support for ISO certification and quality management systems.",
      image: "/images/iso11.jpg",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Our Core Services
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            We provide structured manpower and compliance-driven service
            solutions ensuring operational efficiency and regulatory adherence.
          </p>
          <div className="w-20 h-1 bg-blue-900 mx-auto mt-6"></div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-52 sm:h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-blue-900 transition">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                  {service.description}
                </p>

                <button className="text-blue-900 font-medium hover:text-blue-700 transition">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
