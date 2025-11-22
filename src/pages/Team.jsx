import React from "react";
import {
    Linkedin, Twitter, Mail, Globe, Users, Sparkles,
    ChevronRight, ArrowRight, Building2, HeartHandshake
} from "lucide-react";
import { Link } from "react-router-dom";

// Real photos (replace with your actual team photos)
import ceoPhoto from '../assets/ceo.png';
import ctoPhoto from '../assets/cto.jpg';
import cfoPhoto from '../assets/cfo.jpg';
import cooPhoto from '../assets/coo.jpg';
import teamCulture from '../assets/culture.jpg';

export default function Team() {
    const leadership = [
        {
            name: "Alexander Chen",
            role: "CEO & Founder",
            bio: "Former NSA cryptographer. Built the first AI security platform deployed in 40+ countries. Forbes 30 Under 30.",
            linkedin: "#",
            twitter: "#",
            image: ceoPhoto
        },
        {
            name: "Dr. Sophia Patel",
            role: "Chief Technology Officer",
            bio: "PhD in Machine Learning from MIT. Led AI security research at Google X. 47 patents in edge AI defense.",
            linkedin: "#",
            twitter: "#",
            image: ctoPhoto
        },
        {
            name: "Michael Torres",
            role: "Chief Financial Officer",
            bio: "Ex-Goldman Sachs MD. Scaled three cybersecurity unicorns. Raised $450M in funding rounds.",
            linkedin: "#",
            image: cfoPhoto
        },
        {
            name: "Rachel Kim",
            role: "Chief Operating Officer",
            bio: "Former AWS Global Security Operations lead. Built SOCs for 5 Fortune 10 companies.",
            linkedin: "#",
            twitter: "#",
            image: cooPhoto
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero - Matches Home exactly */}
            <section className="relative bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-50">
                    <img
                        src={teamCulture}
                        alt="Insitech global team"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-600/70 via-slate-900/90 to-purple-600/40"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 py-24 lg:py-32">
                    <div className="text-center max-w-5xl mx-auto">
                        <div className="inline-flex items-center gap-3 px-6 py-2 bg-teal-600/20 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                            <Users className="w-5 h-5 text-teal-300" />
                            <span className="text-teal-300 font-semibold tracking-wider">250+ SECURITY EXPERTS · 18 COUNTRIES</span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                            Built by the Best Minds in Security
                        </h1>
                        <p className="text-xl lg:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Ex-NSA, Google X, AWS, and Fortune 10 veterans — united to secure AI at the edge.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                to="/careers"
                                className="px-8 py-4 bg-white text-teal-600 font-bold rounded-full hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Join Our Mission
                            </Link>
                            <Link
                                to="/contact"
                                className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all"
                            >
                                Meet the Team
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Grid - Same card style as everywhere */}
            <section className="py-24 bg-gradient-to-b from-white to-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider bg-teal-50 px-4 py-2 rounded-full">
                            Executive Leadership
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
                            Pioneers of AI Security
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {leadership.map((member, idx) => (
                            <div
                                key={idx}
                                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-teal-300 hover:shadow-2xl transition-all duration-500"
                            >
                                {/* Photo */}
                                <div className="relative h-80 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                    {/* Floating Icon */}
                                    <div className="absolute top-4 right-4 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                                        <Sparkles className="w-7 h-7 text-teal-600" />
                                    </div>

                                    {/* Name & Role Overlay */}
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <h3 className="text-2xl font-bold">{member.name}</h3>
                                        <p className="text-teal-300 font-semibold">{member.role}</p>
                                    </div>
                                </div>

                                {/* Bio & Social */}
                                <div className="p-8">
                                    <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                                        {member.bio}
                                    </p>

                                    <div className="flex gap-4">
                                        <a
                                            href={member.linkedin}
                                            className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all"
                                        >
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                        {member.twitter && (
                                            <a
                                                href={member.twitter}
                                                className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all"
                                            >
                                                <Twitter className="w-5 h-5" />
                                            </a>
                                        )}
                                        <a
                                            href={`mailto:${member.name.toLowerCase().replace(" ", ".")}@insitech.com`}
                                            className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all"
                                        >
                                            <Mail className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                {/* Bottom Accent */}
                                <div className="h-1 bg-gradient-to-r from-teal-600 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Culture */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
                                We Don’t Just Build Products — We Build Legends
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                Our team is made of <strong>former nation-state hackers, AI researchers, and global security leaders</strong> who chose to leave Big Tech and defense contractors to solve the hardest problem in tech: securing AI at the edge.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                We’re 250+ strong across 18 countries. We speak 40+ languages. We’ve stopped nation-state attacks you’ll never read about.
                            </p>

                            <div className="grid grid-cols-2 gap-8 mt-12">
                                {[
                                    { icon: Globe, value: "40+", label: "Countries Represented" },
                                    { icon: Building2, value: "18", label: "Global Offices" },
                                    { icon: HeartHandshake, value: "4.9/5", label: "Employee Happiness" },
                                    { icon: Users, value: "250+", label: "Security Experts" }
                                ].map((stat, i) => {
                                    const Icon = stat.icon;
                                    return (
                                        <div key={i}>
                                            <div className="text-4xl font-bold text-teal-600 flex items-center gap-3">
                                                <Icon className="w-10 h-10" />
                                                {stat.value}
                                            </div>
                                            <div className="text-slate-600 mt-2">{stat.label}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src={teamCulture}
                                alt="Insitech team collaboration"
                                className="rounded-3xl shadow-2xl"
                            />
                            <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-teal-600 to-purple-600 text-white p-8 rounded-3xl shadow-2xl">
                                <div className="text-5xl font-bold">100%</div>
                                <div className="text-lg opacity-90">Remote-First Culture</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA - Matches Home */}
            <section className="py-24 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                        Ready to Join the Future of Security?
                    </h2>
                    <p className="text-xl lg:text-2xl text-teal-100 mb-12">
                        We’re hiring world-class talent in AI, security, and engineering
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            to="/careers"
                            className="px-10 py-5 bg-white text-teal-600 font-bold rounded-full hover:bg-slate-100 transition-all shadow-xl text-lg"
                        >
                            Explore Open Roles
                        </Link>
                        <Link
                            to="/contact"
                            className="px-10 py-5 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all text-lg"
                        >
                            Refer a Legend
                        </Link>
                    </div>
                    <p className="mt-8 text-teal-200">
                        Average response time: 24 hours · 2025 "Best Place to Work" finalist
                    </p>
                </div>
            </section>
        </div>
    );
}
