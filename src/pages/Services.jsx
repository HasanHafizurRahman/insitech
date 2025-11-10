import React, { useState } from "react";
import {
    Briefcase, ShieldCheck, Cloud, Users, Zap, Calendar, Search,
    ChevronRight, ArrowRight, HeadphonesIcon, FileCheck, Brain, Lock
} from "lucide-react";
import { Link } from "react-router-dom";

// Import your actual service images (same folder as Home)
import securityAssessment from '../assets/security.jpg';
import cloudMigration from '../assets/server.jpg';
import aiConsulting from '../assets/ai.jpg';
import strategicIT from '../assets/dashboard.jpg';
import monitoring24 from '../assets/NVIDIA.jpg';
import zeroTrustImpl from '../assets/ai-security.jpg';

export default function Services() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const serviceCategories = [
        { id: "all", label: "All Services", icon: Briefcase },
        { id: "security", label: "Security Services", icon: ShieldCheck },
        { id: "cloud", label: "Cloud Services", icon: Cloud },
        { id: "ai", label: "AI & Innovation", icon: Zap },
        { id: "consulting", label: "Consulting", icon: Users },
        { id: "support", label: "Support & Maintenance", icon: Calendar }
    ];

    const services = [
        {
            id: 1,
            category: "security",
            title: "Enterprise Security Assessment",
            desc: "Comprehensive security audits, penetration testing, and compliance readiness across your entire infrastructure.",
            duration: "4–8 weeks",
            clients: "Global 2000",
            image: securityAssessment,
            icon: FileCheck,
            link: "/services/security-assessment"
        },
        {
            id: 2,
            category: "cloud",
            title: "Cloud Migration & Optimization",
            desc: "Zero-downtime migration to AWS, Azure, or hybrid cloud with continuous cost and performance optimization.",
            duration: "3–6 months",
            clients: "All sizes",
            image: cloudMigration,
            icon: Cloud,
            link: "/services/cloud-migration"
        },
        {
            id: 3,
            category: "ai",
            title: "AI Implementation Consulting",
            desc: "From proof-of-concept to production: deploy secure, scalable AI models with governance and monitoring.",
            duration: "2–4 months",
            clients: "Mid-to-Large",
            image: aiConsulting,
            icon: Brain,
            link: "/services/ai-consulting"
        },
        {
            id: 4,
            category: "consulting",
            title: "Strategic IT Consulting",
            desc: "C-level advisory on digital transformation, zero trust strategy, and AI-driven security architecture.",
            duration: "Ongoing retainer",
            clients: "Fortune 1000",
            image: strategicIT,
            icon: Users,
            link: "/services/strategic-consulting"
        },
        {
            id: 5,
            category: "support",
            title: "24/7 Security Operations Center",
            desc: "Tier-3 SOC with AI-powered threat hunting, incident response, and dedicated cybersecurity engineers.",
            duration: "Subscription",
            clients: "All industries",
            image: monitoring24,
            icon: HeadphonesIcon,
            link: "/services/soc"
        },
        {
            id: 6,
            category: "security",
            title: "Zero Trust Architecture Implementation",
            desc: "End-to-end zero trust deployment with identity, device, and network microsegmentation.",
            duration: "6–12 weeks",
            clients: "Enterprise & Government",
            image: zeroTrustImpl,
            icon: Lock,
            link: "/services/zero-trust"
        }
    ];

    const filteredServices = services.filter(s =>
        (selectedCategory === "all" || s.category === selectedCategory) &&
        (searchTerm === "" || s.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="bg-white">
            {/* Hero - Identical to Home/Products */}
            <section className="relative bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-purple-600/20"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                            Professional Services
                        </h1>
                        <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Expert guidance, implementation, and managed services — delivered by the team behind Insitech’s flagship platforms.
                        </p>

                        {/* Glass Search */}
                        <div className="max-w-2xl mx-auto">
                            <div className="bg-white/10 backdrop-blur-md rounded-full p-3 flex items-center gap-4 border border-white/20">
                                <Search className="w-5 h-5 text-white/70 ml-4" />
                                <input
                                    type="text"
                                    placeholder="Search services, industries, or outcomes..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="flex-1 bg-transparent text-white placeholder-white/60 outline-none text-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Filter - Same as Products */}
            <section className="border-b border-slate-200 bg-white sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
                        {serviceCategories.map((cat) => {
                            const Icon = cat.icon;
                            const isActive = selectedCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap ${isActive
                                            ? "bg-blue-600 text-white shadow-md"
                                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                        }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    {cat.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Featured Services Grid - 100% Home Match */}
            <section className="py-20 bg-gradient-to-b from-white to-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
                            Service Portfolio
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
                            Expertise that delivers results
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredServices.map((service) => {
                            const Icon = service.icon;
                            return (
                                <Link
                                    key={service.id}
                                    to={service.link}
                                    className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500"
                                >
                                    {/* Image */}
                                    <div className="relative h-72 overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                                        {/* Floating Icon */}
                                        <div className="absolute top-4 right-4 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                                            <Icon className="w-7 h-7 text-blue-600" />
                                        </div>

                                        {/* Category Tag */}
                                        <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-800 uppercase">
                                            {service.category}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8">
                                        <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
                                            <span className="font-medium">{service.duration}</span>
                                            <span>•</span>
                                            <span>{service.clients}</span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-600 mb-6 leading-relaxed">
                                            {service.desc}
                                        </p>

                                        <div className="flex items-center gap-2 text-blue-600 font-semibold">
                                            <span>Explore service</span>
                                            <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </div>

                                    {/* Bottom Blue Accent */}
                                    <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="text-center mt-16">
                        <button className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all inline-flex items-center gap-3">
                            View All Services
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Industry Focus */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            Industry-Specific Solutions
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Deep expertise across regulated and high-risk sectors
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Financial Services", "Healthcare", "Government & Defense",
                            "Critical Infrastructure", "Retail & E-commerce", "Manufacturing"
                        ].map((industry) => (
                            <a
                                key={industry}
                                href="#"
                                className="group p-8 bg-slate-50 border-2 border-slate-200 rounded-2xl hover:border-blue-600 hover:shadow-xl transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {industry}
                                </h3>
                                <p className="text-sm text-slate-600 mb-4">
                                    Compliance-ready solutions (PCI DSS, HIPAA, NIST 800-53, etc.)
                                </p>
                                <span className="text-blue-600 font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                                    Explore industry services
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Packages */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            Service Packages
                        </h2>
                        <p className="text-lg text-slate-600">
                            Predictable pricing. Faster time-to-value.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { name: "Foundation", price: "$15K / quarter", saving: "Most Popular" },
                            { name: "Enterprise", price: "Custom", saving: "Best Value" },
                            { name: "Global SOC", price: "Contact Sales", saving: "Mission Critical" }
                        ].map((pkg) => (
                            <div className="relative bg-white rounded-3xl p-10 border border-slate-200 shadow-xl hover:shadow-2xl transition-shadow">
                                {pkg.saving && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-full text-sm shadow-lg">
                                            {pkg.saving}
                                        </span>
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{pkg.name}</h3>
                                <p className="text-4xl font-bold text-blue-600 mb-8">{pkg.price}</p>
                                <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA - Matches Home */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                        Start Your Transformation Today
                    </h2>
                    <p className="text-xl text-blue-100 mb-10">
                        Free 60-minute consultation with a senior architect
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-slate-100 transition-colors shadow-lg"
                        >
                            Book Consultation
                        </Link>
                        <Link
                            to="/demo"
                            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
                        >
                            Watch Service Demo
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}