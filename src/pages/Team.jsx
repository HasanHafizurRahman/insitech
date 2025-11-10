import React from "react";
import { Users, Linkedin, Twitter, ChevronRight } from "lucide-react";

export default function Team() {
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
                            Our Team
                        </h1>
                        <p className="text-xl text-slate-200 mb-8">
                            Meet the experts driving innovation in cybersecurity and AI.
                        </p>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            Leadership
                        </h2>
                        <p className="text-lg text-slate-600">
                            Our executive team guiding the company's vision
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                name: "John Doe",
                                position: "CEO & Founder",
                                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                                image: "ceo"
                            },
                            {
                                name: "Jane Smith",
                                position: "CTO",
                                desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                                image: "cto"
                            },
                            {
                                name: "Mike Johnson",
                                position: "CFO",
                                desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                                image: "cfo"
                            },
                            {
                                name: "Sarah Williams",
                                position: "COO",
                                desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                image: "coo"
                            }
                        ].map((member, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl transition-all">
                                <div className="relative h-64 bg-linear-to-br from-blue-600 to-blue-900 flex items-center justify-center">
                                    <Users className="w-32 h-32 text-white opacity-50" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                                    <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">{member.desc}</p>
                                    <div className="flex gap-4">
                                        <a href="#" className="text-slate-600 hover:text-blue-600">
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                        <a href="#" className="text-slate-600 hover:text-blue-600">
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Culture */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                        Our Culture
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="flex justify-center">
                        <a href="/careers" className="px-6 py-3 text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                            Join Our Team
                            <ChevronRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                        Work With Us
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Become part of the Insitech family
                    </p>
                    <a href="/contact" className="px-8 py-3 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors inline-flex items-center gap-2">
                        Get in Touch
                        <ChevronRight className="w-5 h-5" />
                    </a>
                </div>
            </section>
        </div>
    );
}