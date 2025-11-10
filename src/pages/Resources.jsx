import React, { useState } from "react";
import { FileText, Video, BookOpen, Download, Newspaper, Calendar, Search, ArrowRight, ChevronRight } from "lucide-react";

export default function Resources() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedType, setSelectedType] = useState("all");

    const resourceTypes = [
        { id: "all", label: "All Resources", icon: BookOpen },
        { id: "whitepaper", label: "Whitepapers", icon: FileText },
        { id: "video", label: "Videos", icon: Video },
        { id: "case-study", label: "Case Studies", icon: Newspaper },
        { id: "webinar", label: "Webinars", icon: Calendar },
        { id: "datasheet", label: "Datasheets", icon: Download }
    ];

    const resources = [
        {
            type: "whitepaper",
            title: "2025 Cybersecurity Threat Landscape Report",
            desc: "Comprehensive analysis of emerging threats and attack vectors across industries.",
            date: "Jan 2025",
            duration: "45 min read",
            image: "report"
        },
        {
            type: "video",
            title: "Zero Trust Architecture Implementation Guide",
            desc: "Step-by-step video guide to implementing zero trust in your organization.",
            date: "Dec 2024",
            duration: "28 min",
            image: "video"
        },
        {
            type: "case-study",
            title: "How Global Bank Prevented $50M in Fraud",
            desc: "Real-world case study of enterprise security implementation.",
            date: "Nov 2024",
            duration: "15 min read",
            image: "case"
        },
        {
            type: "webinar",
            title: "AI-Powered Threat Detection Webinar",
            desc: "Live webinar on leveraging AI and ML for advanced threat detection.",
            date: "Upcoming",
            duration: "60 min",
            image: "webinar"
        },
        {
            type: "datasheet",
            title: "SecureGuard Pro Technical Specifications",
            desc: "Detailed technical specifications and deployment requirements.",
            date: "Jan 2025",
            duration: "PDF",
            image: "datasheet"
        },
        {
            type: "whitepaper",
            title: "Cloud Security Best Practices Guide",
            desc: "Essential strategies for securing multi-cloud environments.",
            date: "Dec 2024",
            duration: "32 min read",
            image: "guide"
        }
    ];

    const filteredResources = resources.filter(r => 
        (selectedType === "all" || r.type === selectedType) &&
        (searchTerm === "" || r.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const featuredTopics = [
        "Zero Trust Security",
        "Cloud Security",
        "Ransomware Protection",
        "Compliance & Governance",
        "Incident Response",
        "Security Operations"
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
                            Security Resources & Knowledge Hub
                        </h1>
                        <p className="text-xl text-slate-200 mb-8">
                            Access expert insights, technical guides, and industry research to strengthen your security posture.
                        </p>
                        
                        {/* Search Bar */}
                        <div className="bg-white rounded-full p-2 flex items-center gap-2 max-w-2xl">
                            <Search className="w-5 h-5 text-slate-400 ml-2" />
                            <input
                                type="text"
                                placeholder="Search resources, topics, products..."
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

            {/* Resource Type Filter */}
            <section className="bg-white border-b border-slate-200 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex items-center gap-4 overflow-x-auto">
                        {resourceTypes.map((type) => (
                            <button
                                key={type.id}
                                onClick={() => setSelectedType(type.id)}
                                className={`flex items-center gap-2 px-4 py-2 font-semibold rounded-lg whitespace-nowrap transition-colors ${
                                    selectedType === type.id
                                        ? "bg-blue-600 text-white"
                                        : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                                }`}
                            >
                                <type.icon className="w-4 h-4" />
                                {type.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Resources */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            Featured Resources
                        </h2>
                        <p className="text-lg text-slate-600">
                            Most popular and recently updated resources
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredResources.map((resource, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl transition-all group">
                                {/* Resource Image/Icon Area */}
                                <div className="relative h-48 bg-linear-to-br from-blue-600 to-blue-900 flex items-center justify-center">
                                    {resource.type === "video" && <Video className="w-16 h-16 text-white" />}
                                    {resource.type === "whitepaper" && <FileText className="w-16 h-16 text-white" />}
                                    {resource.type === "case-study" && <Newspaper className="w-16 h-16 text-white" />}
                                    {resource.type === "webinar" && <Calendar className="w-16 h-16 text-white" />}
                                    {resource.type === "datasheet" && <Download className="w-16 h-16 text-white" />}
                                    
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-900 uppercase">
                                        {resource.type.replace("-", " ")}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                                        <span>{resource.date}</span>
                                        <span>•</span>
                                        <span>{resource.duration}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">{resource.title}</h3>
                                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">{resource.desc}</p>
                                    
                                    <div className="flex gap-3">
                                        <button className="flex-1 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm">
                                            {resource.type === "video" || resource.type === "webinar" ? "Watch Now" : "Download"}
                                        </button>
                                        <button className="px-4 py-2 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors text-sm">
                                            Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <button className="px-8 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-full hover:bg-slate-50 transition-colors inline-flex items-center gap-2">
                            Load More Resources
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Browse by Topic */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            Browse by Topic
                        </h2>
                        <p className="text-lg text-slate-600">
                            Explore resources organized by security topics
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredTopics.map((topic, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="p-6 bg-slate-50 border border-slate-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all group"
                            >
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{topic}</h3>
                                <p className="text-sm text-slate-600 mb-4">
                                    {Math.floor(Math.random() * 20) + 5} resources available
                                </p>
                                <span className="text-blue-600 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all text-sm">
                                    Explore topic
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learning Paths */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            Recommended Learning Paths
                        </h2>
                        <p className="text-lg text-slate-600">
                            Curated collections to help you master specific security domains
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Security Fundamentals",
                                level: "Beginner",
                                resources: 8,
                                duration: "4 hours"
                            },
                            {
                                title: "Cloud Security Mastery",
                                level: "Intermediate",
                                resources: 12,
                                duration: "8 hours"
                            },
                            {
                                title: "Advanced Threat Hunting",
                                level: "Advanced",
                                resources: 15,
                                duration: "12 hours"
                            }
                        ].map((path, idx) => (
                            <div key={idx} className="bg-white border-b-4 border-blue-600 rounded-lg p-8 hover:shadow-lg transition-shadow">
                                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-4">
                                    {path.level}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{path.title}</h3>
                                <div className="flex items-center gap-4 text-sm text-slate-600 mb-6">
                                    <div className="flex items-center gap-1">
                                        <FileText className="w-4 h-4" />
                                        <span>{path.resources} resources</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>{path.duration}</span>
                                    </div>
                                </div>
                                <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                                    Start Learning
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                        Stay Updated with Latest Resources
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Get weekly digest of new resources, threat intelligence, and security insights
                    </p>
                    <div className="max-w-md mx-auto">
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-3 rounded-full text-slate-900 outline-none"
                            />
                            <button className="px-8 py-3 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}