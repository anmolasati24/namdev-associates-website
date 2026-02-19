export default function Contact() {
  return (
    <div className="pt-40 bg-gray-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Get in Touch
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-blue-100">
          We’d love to hear from you. Reach out today and our team will assist you with tailored manpower and recruitment solutions.
        </p>
      </section>


      {/* CONTACT SECTION FIRST */}
      <section className="bg-white py-20 rounded-t-[60px] shadow-inner">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Let’s Discuss Your Manpower Needs
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Whether you're looking for skilled workforce solutions, staffing support,
              or long-term recruitment partnerships — our experienced team is here to guide you.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              We specialize in connecting businesses with qualified professionals
              while ensuring efficiency, reliability, and long-term value.
              Let’s build your workforce together.
            </p>

            {/* Contact Info */}
            <div className="space-y-5 mb-8">
              <div className="flex gap-4">
                <div className="bg-blue-900 text-white p-3 rounded-full">📍</div>
                <p>3/290, Vipul Khand, Gomti Nagar, Lucknow – 226010</p>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-900 text-white p-3 rounded-full">📞</div>
                <p>+91-84232-15047</p>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-900 text-white p-3 rounded-full">✉️</div>
                <p>namdevassociateslko@gmail.com</p>
              </div>
            </div>

            {/* Compact Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-200 rounded-full hover:bg-blue-900 hover:text-white transition">
                f
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-200 rounded-full hover:bg-blue-900 hover:text-white transition">
                in
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-200 rounded-full hover:bg-blue-900 hover:text-white transition">
                ig
              </a>
            </div>
          </div>


          {/* FORM */}
          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="px-5 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-600 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-5 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="px-5 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-600 outline-none"
                />
                <select className="px-5 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-600 outline-none">
                  <option>What are your needs?</option>
                  <option>Recruitment</option>
                  <option>Consulting</option>
                  <option>Staffing</option>
                </select>
              </div>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="px-5 py-4 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-blue-600 outline-none w-full"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-blue-900 to-blue-700 text-white font-semibold hover:scale-105 transition"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>
      </section>


      {/* OFFICES SECTION */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-12">Our Offices</h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Lucknow */}
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-3 transition">
              <img
                src="https://s7ap1.scene7.com/is/image/incredibleindia/lucknow%20railway%20station-lucknow-uttar%20pradesh-hero?qlt=82&ts=1742160337309"
                alt="Lucknow"
                className="w-full h-48 object-cover rounded-xl mb-5"
              />
              <h3 className="text-2xl font-bold">Lucknow</h3>
              <p className="tracking-widest text-gray-500 text-sm mt-2">HEADQUARTERS</p>
              <div className="w-16 h-[2px] bg-black mx-auto my-4"></div>

              <p className="text-gray-600">
                3/290, Vipul Khand, Gomti Nagar, Lucknow – 226010
              </p>
              <p className="mt-3 font-medium">+91-84232-15047</p>
              <p className="mt-2 text-gray-600">namdevassociateslko@gmail.com</p>
              <p className="mt-2 text-gray-500">Working Hours: 07am to 5pm</p>
            </div>

            {/* Delhi with Image */}
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-3 transition">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS2LwtOEMg3O3cSmue2qSuOJQYcHjY67NxWQ&s"
                alt="Delhi"
                className="w-full h-48 object-cover rounded-xl mb-5"
              />
              <h3 className="text-2xl font-bold">Delhi</h3>
              <p className="tracking-widest text-gray-500 text-sm mt-2">BRANCH OFFICE</p>
              <div className="w-16 h-[2px] bg-black mx-auto my-4"></div>

              <p className="text-gray-600">Regional Office, Delhi</p>
              <p className="mt-3 font-medium">+91-84232-15047</p>
              <p className="mt-2 text-gray-600">namdevassociateslko@gmail.com</p>
              <p className="mt-2 text-gray-500">Working Hours: 07am to 5pm</p>
            </div>

            {/* Bhopal with Image */}
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-3 transition">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyxcA_AOL3Bmq2C6AX7-Hj9ZdPHoF-Uei4qA&s"
                alt="Bhopal"
                className="w-full h-48 object-cover rounded-xl mb-5"
              />
              <h3 className="text-2xl font-bold">Bhopal</h3>
              <p className="tracking-widest text-gray-500 text-sm mt-2">BRANCH OFFICE</p>
              <div className="w-16 h-[2px] bg-black mx-auto my-4"></div>

              <p className="text-gray-600">Regional Office, Bhopal</p>
              <p className="mt-3 font-medium">+91-84232-15047</p>
              <p className="mt-2 text-gray-600">namdevassociateslko@gmail.com</p>
              <p className="mt-2 text-gray-500">Working Hours: 07am to 5pm</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
