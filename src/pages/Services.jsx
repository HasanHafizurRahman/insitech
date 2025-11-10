import React, { useState } from "react";
import { Briefcase, ShieldCheck, Cloud, Users, Zap, Search, ChevronRight, ArrowRight, Calendar } from "lucide-react";

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
            category: "security",
            title: "Enterprise Security Assessment",
            desc: "Comprehensive security audits and vulnerability assessments to identify and mitigate risks.",
            duration: "Custom",
            clients: "Enterprise",
            image: "assessment"
        },
        {
            category: "cloud",
            title: "Cloud Migration & Optimization",
            desc: "Seamless migration to cloud platforms with ongoing optimization for performance and cost.",
            duration: "3-6 months",
            clients: "All sizes",
            image: "cloud"
        },
        {
            category: "ai",
            title: "AI Implementation Consulting",
            desc: "Expert guidance on integrating AI into your infrastructure for enhanced security and efficiency.",
            duration: "2-4 months",
            clients: "Mid-large",
            image: "ai"
        },
        {
            category: "consulting",
            title: "Strategic IT Consulting",
            desc: "Tailored strategies for digital transformation and cybersecurity posture improvement.",
            duration: "Ongoing",
            clients: "Global",
            image: "consulting"
        },
        {
            category: "support",
            title: "24/7 Security Monitoring",
            desc: "Round-the-clock monitoring and incident response services.",
            duration: "Subscription",
            clients: "All",
            image: "monitoring"
        },
        {
            category: "security",
            title: "Zero Trust Implementation",
            desc: "Design and deploy zero trust architecture tailored to your organization.",
            duration: "4-8 weeks",
            clients: "Enterprise",
            image: "zero-trust"
        }
    ];

    const filteredServices = services.filter(s =>
        (selectedCategory === "all" || s.category === selectedCategory) &&
        (searchTerm === "" || s.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const featuredIndustries = [
        "Financial Services",
        "Healthcare",
        "Manufacturing",
        "Government",
        "Retail",
        "Technology"
    ];

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
                            Professional Services & Solutions
                        </h1>
                        <p className="text-xl text-slate-200 mb-8">
                            Leverage our expertise in cybersecurity, AI, and networking to transform your business.
                        </p>

                        {/* Search Bar */}
                        <div className="bg-white rounded-full p-2 flex items-center gap-2 max-w-2xl">
                            <Search className="w-5 h-5 text-slate-400 ml-2" />
                            <input
                                type="text"
                                placeholder="Search services, industries, solutions..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="flex-1 px-2 py-2 text-slate-900 outline-none"
                            />
                            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Category Filter */}
            <section className="bg-white border-b border-slate-200 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex items-center gap-4 overflow-x-auto">
                        {serviceCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center gap-2 px-4 py-2 font-semibold rounded-lg whitespace-nowrap transition-colors ${selectedCategory === category.id
                                        ? "bg-blue-600 text-white"
                                        : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                                    }`}
                            >
                                <category.icon className="w-4 h-4" />
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Services */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            Featured Services
                        </h2>
                        <p className="text-lg text-slate-600">
                            Our most popular and innovative service offerings
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredServices.map((service, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl transition-all group">
                                {/* Service Image/Icon Area */}
                                <div className="relative h-48 bg-linear-to-br from-blue-600 to-blue-900 flex items-center justify-center">
                                    {service.category === "security" && <ShieldCheck className="w-16 h-16 text-white" />}
                                    {service.category === "cloud" && <Cloud className="w-16 h-16 text-white" />}
                                    {service.category === "ai" && <Zap className="w-16 h-16 text-white" />}
                                    {service.category === "consulting" && <Users className="w-16 h-16 text-white" />}
                                    {service.category === "support" && <Calendar className="w-16 h-16 text-white" />}

                                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-900 uppercase">
                                        {service.category}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                                        <span>{service.duration}</span>
                                        <span>•</span>
                                        <span>{service.clients} clients</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">{service.title}</h3>
                                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">{service.desc}</p>

                                    <div className="flex gap-3">
                                        <button className="flex-1 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm">
                                            Learn More
                                        </button>
                                        <button className="px-4 py-2 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors text-sm">
                                            Quote
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <button className="px-8 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-full hover:bg-slate-50 transition-colors inline-flex items-center gap-2">
                            Load More Services
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Browse by Industry */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            Browse by Industry
                        </h2>
                        <p className="text-lg text-slate-600">
                            Tailored services for specific industry needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredIndustries.map((industry, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="p-6 bg-slate-50 border border-slate-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all group"
                            >
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{industry}</h3>
                                <p className="text-sm text-slate-600 mb-4">
                                    {Math.floor(Math.random() * 10) + 3} specialized services
                                </p>
                                <span className="text-blue-600 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all text-sm">
                                    Explore services
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
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            Service Packages
                        </h2>
                        <p className="text-lg text-slate-600">
                            Pre-bundled solutions for common needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Essential Security Package",
                                level: "Basic",
                                services: 5,
                                price: "Starting at $5K/mo"
                            },
                            {
                                title: "Enterprise Protection Suite",
                                level: "Professional",
                                services: 10,
                                price: "Custom Quote"
                            },
                            {
                                title: "AI-Enhanced Security Bundle",
                                level: "Premium",
                                services: 15,
                                price: "Contact Sales"
                            }
                        ].map((pkg, idx) => (
                            <div key={idx} className="bg-white border-b-4 border-blue-600 rounded-lg p-8 hover:shadow-lg transition-shadow">
                                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-4">
                                    {pkg.level}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{pkg.title}</h3>
                                <div className="flex items-center gap-4 text-sm text-slate-600 mb-6">
                                    <div className="flex items-center gap-1">
                                        <Briefcase className="w-4 h-4" />
                                        <span>{pkg.services} services</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>{pkg.price}</span>
                                    </div>
                                </div>
                                <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Request Consultation */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                        Ready to Transform Your Security?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Schedule a free consultation with our experts
                    </p>
                    <div className="max-w-md mx-auto">
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-3 rounded-full text-slate-900 outline-none"
                            />
                            <button className="px-8 py-3 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors">
                                Request
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}