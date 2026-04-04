import { useState } from "react";
import { motion } from "framer-motion";

export default function About() {

    const [activeSection, setActiveSection] = useState("who");

    const fadeUp = {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="pt-36 md:pt-44 bg-white">

            {/* Banner */}
            <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 py-16 md:py-20 text-white overflow-hidden">

                <div className="absolute inset-0 opacity-10 bg-[url('/assets/pattern.png')]"></div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                >

                    <h1 className="text-5xl font-bold mb-6 tracking-tight">
                        About Namdev Associates
                    </h1>

                    <p className="max-w-3xl mx-auto text-lg text-blue-100 leading-relaxed">
                        Delivering structured, compliant and performance-driven manpower
                        and facility management solutions across India.
                    </p>

                </motion.div>
            </section>


            {/* Stats */}
            <section className="py-14 sm:py-16 bg-gray-50">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

                    {[
                        { number: "7+", label: "Years Experience" },
                        { number: "13+", label: "Government Contracts" },
                        { number: "500+", label: "Workforce Deployed" },
                        { number: "PAN India", label: "Operational Presence" }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            className="bg-white p-10 rounded-xl shadow-lg text-center border hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
                        >

                            <h3 className="text-4xl font-bold text-blue-900">
                                {item.number}
                            </h3>

                            <p className="text-gray-600 mt-3">
                                {item.label}
                            </p>

                        </motion.div>
                    ))}

                </div>
            </section>


            {/* Main Layout */}
            <section className="py-16 sm:py-20">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-16">

                    {/* Sidebar */}
                    <div className="lg:col-span-1">

                        <div className="sticky top-40 bg-white border rounded-xl shadow-lg overflow-hidden">

                            <div className="bg-blue-900 text-white px-6 py-4 font-semibold">
                                About Section
                            </div>

                            {[
                                { key: "who", label: "Who We Are" },
                                { key: "vision", label: "Vision & Mission" },
                                { key: "leadership", label: "Our Leadership" },
                                { key: "certificate", label: "Certifications" }
                            ].map((item) => (
                                <div
                                    key={item.key}
                                    onClick={() => setActiveSection(item.key)}
                                    className={`px-6 py-4 cursor-pointer transition 
${activeSection === item.key
                                            ? "bg-blue-100 text-blue-900 font-medium"
                                            : "hover:bg-gray-50 text-gray-700"}`}
                                >
                                    {item.label}
                                </div>
                            ))}

                        </div>
                    </div>


                    {/* Content */}
                    <div className="lg:col-span-3">

                        <motion.div
                            key={activeSection}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >

                            {/* Who */}
                            {activeSection === "who" && (
                                <div>

                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 md:mb-6">
                                        Who We Are
                                    </h2>

                                    <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
                                        Namdev Associates is an ISO 9001:2015 certified manpower and facility
                                        management organization delivering structured workforce outsourcing
                                        solutions to Government and Corporate institutions across India.
                                    </p>

                                    <p className="text-gray-600 mb-10">
                                        With extensive experience in statutory compliance, contract execution,
                                        and workforce governance, we function as a trusted operational partner
                                        ensuring service excellence and transparency.
                                    </p>

                                    <div className="overflow-hidden rounded-xl shadow-xl">
                                        <img
                                            src="/assets/em.jpeg"
                                            className="w-full h-[420px] object-cover hover:scale-105 transition duration-500"
                                        />
                                    </div>

                                </div>
                            )}


                            {/* Vision */}
                            {activeSection === "vision" && (

                                <div>

                                    <h2 className="text-4xl font-bold text-blue-900 mb-10">
                                        Vision & Mission
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

                                        <div className="p-10 rounded-xl border bg-white shadow hover:shadow-xl transition">

                                            <h3 className="text-xl font-semibold text-blue-900 mb-4">
                                                Our Vision
                                            </h3>

                                            <p className="text-gray-600">
                                                To become a nationally recognized manpower and facility
                                                management organization known for integrity and compliance.
                                            </p>

                                        </div>

                                        <div className="p-10 rounded-xl border bg-white shadow hover:shadow-xl transition">

                                            <h3 className="text-xl font-semibold text-blue-900 mb-4">
                                                Our Mission
                                            </h3>

                                            <p className="text-gray-600">
                                                To deliver efficient and performance-driven workforce
                                                solutions that enhance operational productivity.
                                            </p>

                                        </div>

                                    </div>
                                </div>
                            )}


                            {/* Leadership */}
                            {activeSection === "leadership" && (

                                <div>

                                    <h2 className="text-4xl font-bold text-blue-900 mb-10">
                                        Our Leadership
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

                                        {[
                                            {
                                                name: "Mr Rohit Namdev",
                                                role: "Founder & Managing Director",
                                                phone: "+91 8423215047",
                                                email: "namdevassociateslko@gmail.com",
                                                image: "/assets/RNM.png"
                                            },

                                            {
                                                name: "Mr Tarun Parihar",
                                                role: "Operational Manager",
                                                phone: "+91 8423215047",
                                                email: "namdevassociateslko@gmail.com",
                                                image: "/assets/TPR.jpeg"
                                            },

                                            {
                                                name: "Mr Garvesh Namdev",
                                                role: "HR Coordinator",
                                                phone: "+91 8423215047",
                                                email: "namdevassociateslko@gmail.com",
                                                image: "/assets/GNM.jpeg"
                                            },

                                            {
                                                name: "Miss Sonali Verma",
                                                role: "HR Coordinator",
                                                phone: "+91 8423215047",
                                                email: "namdevassociateslko@gmail.com",
                                                image: "/assets/svv.jpeg"
                                            },
                                            {
                                                name: "Miss Sweta Maurya",
                                                role: "HR Coordinator",
                                                phone: "+91 8423215047",
                                                email: "namdevassociateslko@gmail.com",
                                                image: "/assets/Sweta.jpg"
                                            }

                                        ].map((p, i) => (

                                            <div
                                                key={i}
                                                className="text-center p-8 rounded-xl border shadow hover:shadow-2xl hover:-translate-y-3 transition"
                                            >

                                                <img
                                                    src={p.image}
                                                    className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-blue-100"
                                                />

                                                <h4 className="font-semibold text-lg">
                                                    {p.name}
                                                </h4>

                                                <p className="text-gray-500 text-sm mb-2">
                                                    {p.role}
                                                </p>

                                                <p className="text-sm text-gray-600">
                                                    📞 {p.phone}
                                                </p>

                                                <p className="text-sm text-gray-600">
                                                    ✉ {p.email}
                                                </p>

                                            </div>

                                        ))}

                                    </div>


                                </div>
                            )}


                            {/* Certificate */}
                            {activeSection === "certificate" && (

                                <div className="text-center">

                                    <h2 className="text-4xl font-bold text-blue-900 mb-10">
                                        Compliance & Certifications
                                    </h2>

                                    <div className="bg-gray-50 p-10 rounded-xl shadow">

                                        <img
                                            src="/assets/iso11.jpg"
                                            className="mx-auto mb-6 rounded-lg shadow-lg"
                                        />

                                        <p className="text-gray-600 max-w-xl mx-auto">
                                            ISO 9001:2015 certification ensuring quality management
                                            standards across all manpower operations.
                                        </p>

                                    </div>

                                </div>
                            )}

                        </motion.div>

                    </div>
                </div>
            </section>


            {/* Why Choose */}
            <section className="bg-gray-50 py-24">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <h2 className="text-4xl font-semibold text-blue-900 mb-16">
                        Why Choose Namdev Associates
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">

                        {[
                            "Statutory Compliance",
                            "Skilled Workforce",
                            "Government Expertise",
                            "Nationwide Operations"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white p-6 sm:p-7 rounded-xl shadow hover:shadow-2xl transition"
                            >

                                <h4 className="font-semibold text-lg mb-3 text-gray-800">
                                    {item}
                                </h4>

                                <p className="text-gray-600 text-sm">
                                    Professional manpower solutions with strict regulatory compliance.
                                </p>

                            </motion.div>
                        ))}

                    </div>
                </div>
            </section>

        </div>
    );
}