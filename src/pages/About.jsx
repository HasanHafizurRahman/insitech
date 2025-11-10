import React from "react";
import { Users, Award, Globe, ChevronRight } from "lucide-react";

export default function About() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                            About Insitech
                        </h1>
                        <p className="text-xl text-slate-200 mb-8">
                            Pioneering the future of cybersecurity and AI at the edge.
                        </p>
                    </div>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                        Our Story
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="flex justify-center">
                        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* Mission and Values */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            Mission & Values
                        </h2>
                        <p className="text-lg text-slate-600">
                            Driving innovation in the AI era
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Globe,
                                title: "Global Impact",
                                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            },
                            {
                                icon: Award,
                                title: "Excellence",
                                desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            },
                            {
                                icon: Users,
                                title: "Collaboration",
                                desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                            }
                        ].map((value, idx) => (
                            <div key={idx} className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow text-center">
                                <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                        Our Journey
                    </h2>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
                        {[
                            { year: "2010", desc: "Founded as a cybersecurity startup. Lorem ipsum dolor sit amet." },
                            { year: "2015", desc: "Expanded into AI and edge computing. Consectetur adipiscing elit." },
                            { year: "2020", desc: "Launched flagship products. Sed do eiusmod tempor incididunt." },
                            { year: "2025", desc: "Global leader in AI security. Ut enim ad minim veniam." }
                        ].map((event, idx) => (
                            <div key={idx} className={`flex items-center mb-12 ${idx % 2 === 0 ? 'justify-start' : 'justify-end'} text-${idx % 2 === 0 ? 'left' : 'right'}`}>
                                <div className={`w-1/2 p-4 bg-white rounded-lg shadow-md ${idx % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                                    <h3 className="text-xl font-bold text-slate-900">{event.year}</h3>
                                    <p className="text-slate-600">{event.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                        Join Our Journey
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Discover how Insitech can empower your organization
                    </p>
                    <a href="/contact" className="px-8 py-3 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors inline-flex items-center gap-2">
                        Contact Us
                        <ChevronRight className="w-5 h-5" />
                    </a>
                </div>
            </section>
        </div>
    );
}