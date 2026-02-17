export default function About() {
  return (
    <div className="pt-40 bg-white">

      {/*  Banner Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Namdev Associates
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-blue-100 leading-relaxed">
            Delivering structured, compliant and performance-driven manpower
            and facility management solutions across India.
          </p>
        </div>
      </section>

      {/*Stats Section  */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {[
              { number: "15+", label: "Years of Experience" },
              { number: "120+", label: "Government Contracts" },
              { number: "5000+", label: "Workforce Deployed" },
              { number: "PAN India", label: "Operational Presence" }
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-800"></div>

                <h3 className="text-3xl md:text-4xl font-bold text-blue-900 group-hover:text-blue-700 transition">
                  {item.number}
                </h3>

                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  {item.label}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>


      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-16">

          {/*Sidebar  */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-xl shadow-md sticky top-40 overflow-hidden">

              <div className="bg-blue-900 text-white px-6 py-4">
                <h4 className="font-semibold text-lg">About Section</h4>
              </div>

              <div className="divide-y divide-gray-200">

                {[
                  "Who We Are",
                  "Vision & Mission",
                  "Our Leadership",
                  "Compliance & Certifications"
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group flex justify-between items-center px-6 py-4 hover:bg-blue-50 cursor-pointer transition relative"
                  >
                    <span className="text-gray-700 group-hover:text-blue-900 transition">
                      {item}
                    </span>
                    <span className="text-gray-400 group-hover:text-blue-700 group-hover:translate-x-1 transition">
                      →
                    </span>
                  </div>
                ))}

              </div>

              <div className="p-6">
                <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg transition">
                  Download Company Profile
                </button>
              </div>

            </div>
          </div>

          <div className="lg:col-span-3">

            {/* Section Label */}
            <div className="flex items-center mb-4">
              <div className="w-10 h-1 bg-blue-800 mr-4"></div>
              <span className="text-sm font-semibold text-blue-800 uppercase tracking-wider">
                About Company
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Who We Are
            </h2>

            {/* Content Box */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm mb-12">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Namdev Associates is an ISO 9001:2015 certified manpower and facility
                management organization delivering structured workforce outsourcing
                solutions to Government and Corporate institutions across India.
              </p>

              <p className="text-gray-600 leading-relaxed">
                With extensive experience in statutory compliance, contract execution,
                and workforce governance, we function as a trusted operational partner
                ensuring service excellence, transparency, and full regulatory adherence.
              </p>
            </div>

            {/* Image Section */}
            <div className="relative rounded-xl overflow-hidden shadow-xl group mb-16">
              <img
                src="/images/office-meeting.jpg"
                alt="Company Overview"
                className="w-full h-[420px] object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-semibold">
                  Building Trust Through Compliance & Excellence
                </p>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-10">

              <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-800"></div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To become a nationally recognized manpower and facility
                  management organization known for integrity, compliance
                  excellence and sustainable partnerships.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-800"></div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To deliver legally compliant, efficient and performance-driven
                  workforce solutions that enhance operational productivity
                  across diverse sectors.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>


      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold text-blue-900 mb-16">
            Why Choose Namdev Associates
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            {[
              {
                title: "Statutory Compliance",
                desc: "Full adherence to labor laws, PF, ESIC, and statutory norms."
              },
              {
                title: "Skilled & Verified Staff",
                desc: "Thoroughly screened and performance-monitored workforce."
              },
              {
                title: "Government Expertise",
                desc: "Successful execution of government and PSU contracts."
              },
              {
                title: "Nationwide Operations",
                desc: "Strong presence across multiple Indian states."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <h4 className="font-semibold text-lg mb-3 text-gray-800">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
}
