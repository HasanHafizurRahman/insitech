import React from "react";
import {
    Globe, Award, Users, Shield, Cpu, Sparkles,
    ChevronRight, ArrowRight, Building2, Handshake,
    Rocket, CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";

// Reuse your hero-quality images
import aboutHero from '../assets/banner.jpg';
import timelineImg from '../assets/server.jpg';
import leadershipImg from '../assets/dashboard.jpg';

export default function About() {
    return (
        <div className="bg-white">
            {/* Hero - Matches Home exactly */}
            <section className="relative bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-50">
                    <img
                        src={aboutHero}
                        alt="Insitech global headquarters and data centers"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 via-slate-900/90 to-purple-600/40"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 py-24 lg:py-32">
                    <div className="text-center max-w-5xl mx-auto">
                        <div className="inline-flex items-center gap-3 px-6 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                            <Sparkles className="w-5 h-5 text-blue-300" />
                            <span className="text-blue-300 font-semibold tracking-wider">SINCE 2010 · 500+ ENTERPRISES · 40+ COUNTRIES</span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                            Securing the Future at the Edge
                        </h1>
                        <p className="text-xl lg:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed">
                            From a cybersecurity startup to a global leader in AI-powered edge security — trusted by banks, governments, and Fortune 100 companies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Partner with Us
                            </Link>
                            <Link
                                to="/careers"
                                className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all"
                            >
                                Join Our Team
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-24 bg-gradient-to-b from-white to-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
                                Our Foundation
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-6 mb-8">
                                Built for the AI Era
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                Founded in 2010 by former NSA cryptographers and Cisco engineers, Insitech was born from a simple belief: <strong>the future of security isn’t in the data center — it’s at the edge.</strong>
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                Today, we protect over <strong>500 global enterprises</strong> across finance, healthcare, manufacturing, and government — securing AI workloads running on everything from factory floors to 5G towers.
                            </p>
                            <div className="grid grid-cols-3 gap-8 mt-12">
                                {[
                                    { icon: Building2, label: "Global Offices", value: "18" },
                                    { icon: Shield, label: "Patents", value: "47" },
                                    { icon: Handshake, label: "Partners", value: "200+" }
                                ].map((stat, i) => {
                                    const Icon = stat.icon;
                                    return (
                                        <div key={i} className="text-center">
                                            <Icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                                            <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                                            <div className="text-sm text-slate-600">{stat.label}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src={leadershipImg}
                                alt="Insitech leadership team"
                                className="rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
                                <div className="text-4xl font-bold">15+</div>
                                <div className="text-sm opacity-90">Years of Innovation</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values - Same card style */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
                            Our North Star
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
                            Mission, Vision & Values
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: Rocket,
                                title: "Mission",
                                desc: "To make AI at the edge secure, seamless, and accessible — protecting organizations while accelerating innovation.",
                                gradient: "from-blue-500 to-cyan-500"
                            },
                            {
                                icon: Globe,
                                title: "Vision",
                                desc: "A world where every connected device is inherently secure, and AI drives progress without compromise.",
                                gradient: "from-purple-500 to-pink-500"
                            },
                            {
                                icon: Award,
                                title: "Values",
                                desc: "Integrity · Innovation · Customer Obsession · Global Citizenship · Relentless Execution",
                                gradient: "from-green-500 to-emerald-500"
                            }
                        ].map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute top-6 left-6 w-16 h-16 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                                            <Icon className="w-8 h-8 text-blue-600" />
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div className={`h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Timeline - Modernized */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            Our Journey
                        </h2>
                        <p className="text-xl text-slate-600">From garage to global leader</p>
                    </div>

                    <div className="relative">
                        <img
                            src={timelineImg}
                            alt="Insitech timeline"
                            className="w-full rounded-3xl shadow-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-3xl"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {[
                                    { year: "2010", milestone: "Founded in Silicon Valley" },
                                    { year: "2018", milestone: "First AI Security Patent" },
                                    { year: "2022", milestone: "NVIDIA Inception Partner" },
                                    { year: "2025", milestone: "500+ Enterprise Customers" }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="text-4xl font-bold text-blue-400">{item.year}</div>
                                        <div className="text-sm mt-2 opacity-90">{item.milestone}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Recognition */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            Recognized Globally
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            "Gartner Magic Quadrant Leader 2024",
                            "Forbes Cloud 100 2025",
                            "CRN Security 100 2025"
                        ].map((award, i) => (
                            <div key={i} className="text-center">
                                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                <p className="text-lg font-semibold text-slate-900">{award}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA - Matches Home */}
            <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                        Ready to Write the Next Chapter Together?
                    </h2>
                    <p className="text-xl lg:text-2xl text-blue-100 mb-12">
                        Partner with the team securing tomorrow’s AI infrastructure
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            to="/contact"
                            className="px-10 py-5 bg-white text-blue-600 font-bold rounded-full hover:bg-slate-100 transition-all shadow-xl text-lg"
                        >
                            Start a Partnership
                        </Link>
                        <Link
                            to="/careers"
                            className="px-10 py-5 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all text-lg"
                        >
                            View Open Roles
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}