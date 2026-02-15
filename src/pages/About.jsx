export default function About() {
  return (
    <div className="pt-40 bg-white">

      {/* Hero Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            About Namdev Associates
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A trusted manpower and facility management partner delivering
            structured, compliant and performance-driven workforce solutions
            to Government and Corporate organizations across India.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <h2 className="text-3xl font-semibold text-blue-900 mb-6">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Namdev Associates is an ISO 9001:2015 certified organization
              specializing in manpower outsourcing, security services,
              facility management, and compliance consultancy.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              We work closely with Government departments, Defence units,
              Public Sector Undertakings, and Corporate enterprises to deliver
              workforce solutions that are legally compliant, operationally
              efficient, and performance-driven.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ ISO 9001:2015 Certified</li>
              <li>✔ Government Approved Vendor</li>
              <li>✔ PAN India Operations</li>
              <li>✔ Proven Government Contract Execution</li>
            </ul>
          </div>

          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/office-meeting.jpg"
              alt="About Namdev Associates"
              className="w-full h-[420px] object-cover"
            />
          </div>

        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <div className="bg-white p-10 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be a leading manpower and facility management organization
              recognized for integrity, compliance excellence, and long-term
              client partnerships across India.
            </p>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To provide structured, reliable and legally compliant workforce
              solutions that enhance operational efficiency while maintaining
              the highest standards of quality and governance.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold text-blue-900 mb-12">
            Why Choose Namdev Associates
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-3 text-gray-800">
                Regulatory Compliance
              </h4>
              <p className="text-gray-600 text-sm">
                Strict adherence to labor laws, statutory norms and government
                compliance frameworks.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-3 text-gray-800">
                Skilled Workforce
              </h4>
              <p className="text-gray-600 text-sm">
                Carefully screened, trained and performance-monitored personnel.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-3 text-gray-800">
                Government Experience
              </h4>
              <p className="text-gray-600 text-sm">
                Successful execution of high-value government contracts.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-3 text-gray-800">
                PAN India Reach
              </h4>
              <p className="text-gray-600 text-sm">
                Operational presence across multiple states and sectors.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
