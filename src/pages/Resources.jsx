import React, { useState } from "react";
import { 
  FileText, Video, BookOpen, Download, Newspaper, Calendar, 
  Search, ChevronRight, ArrowRight, PlayCircle, FileCheck, 
  TrendingUp, Mail, Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

// Reuse your high-quality images
import reportCover from '../assets/security.jpg';
import webinarThumb from '../assets/dashboard.jpg';
import caseStudyImg from '../assets/NVIDIA.jpg';
import cloudGuide from '../assets/ai-security.jpg';

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
            id: 1,
            type: "whitepaper",
            title: "2025 Global Threat Landscape Report",
            desc: "Exclusive research on emerging attack vectors, ransomware trends, and AI-powered threats across 40+ countries.",
            date: "Jan 2025",
            readTime: "42 min",
            downloads: "12.4K",
            image: reportCover,
            featured: true,
            link: "/resources/2025-threat-report"
        },
        {
            id: 2,
            type: "video",
            title: "Zero Trust in 20 Minutes: From Strategy to Deployment",
            desc: "Watch our CISO break down real-world zero trust implementation with live dashboard walkthrough.",
            date: "Dec 2024",
            duration: "22 min",
            views: "28K",
            image: webinarThumb,
            link: "/resources/zero-trust-video"
        },
        {
            id: 3,
            type: "case-study",
            title: "How HSBC Blocked $127M in Real-Time Fraud",
            desc: "Deep dive into AI-driven behavioral analytics that stopped 1.2M fraudulent transactions in 90 days.",
            date: "Nov 2024",
            readTime: "18 min",
            image: caseStudyImg,
            link: "/resources/hsbc-case-study"
        },
        {
            id: 4,
            type: "webinar",
            title: "Ransomware Resilience: Lessons from 500+ Breaches",
            desc: "Live session with former FBI cyber agent — Feb 18, 2025",
            date: "Feb 18, 2025",
            duration: "60 min",
            registered: "1,847",
            image: cloudGuide,
            upcoming: true,
            link: "/webinars/ransomware-2025"
        },
        {
            id: 5,
            type: "datasheet",
            title: "Spark Enterprise Security – Technical Overview",
            desc: "Complete feature matrix, deployment options, and integration capabilities.",
            date: "Jan 2025",
            format: "PDF · 12 pages",
            image: reportCover,
            link: "/resources/spark-datasheet"
        },
        {
            id: 6,
            type: "whitepaper",
            title: "The CIO's Guide to Cloud-Native Security",
            desc: "Framework for securing Kubernetes, serverless, and multi-cloud at scale.",
            date: "Dec 2024",
            readTime: "35 min",
            downloads: "9.2K",
            image: cloudGuide,
            link: "/resources/cloud-native-guide"
        }
    ];

    const filteredResources = resources.filter(r =>
        (selectedType === "all" || r.type === selectedType) &&
        (searchTerm === "" || r.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="bg-white">
            {/* Hero - Identical to Home */}
            <section className="relative bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-50">
                    <div className="absolute inset-0 bg-linear-to-br from-teal-600/70 via-slate-900/90 to-purple-600/40"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 py-24">
                    <div className="text-center max-w-5xl mx-auto">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <Sparkles className="w-8 h-8 text-teal-400" />
                            <span className="text-teal-300 font-semibold tracking-wider">INSITECH KNOWLEDGE CENTER</span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                            Security Intelligence That Drives Decisions
                        </h1>
                        <p className="text-xl lg:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Research, guides, and real-world insights from the team protecting 500+ global enterprises.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Bar - Same as Products/Services */}
            <section className="border-b border-slate-200 bg-white sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
                        {resourceTypes.map((type) => {
                            const Icon = type.icon;
                            const isActive = selectedType === type.id;
                            return (
                                <button
                                    key={type.id}
                                    onClick={() => setSelectedType(type.id)}
                                    className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap ${
                                        isActive
                                            ? "bg-teal-600 text-white shadow-md"
                                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                    }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    {type.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Featured Resources Grid */}
            <section className="py-24 bg-linear-to-b from-white to-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider bg-teal-50 px-4 py-2 rounded-full">
                            Latest & Most Popular
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
                            Resources Security Leaders Trust
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredResources.map((resource) => (
                            <Link
                                key={resource.id}
                                to={resource.link}
                                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-teal-300 hover:shadow-2xl transition-all duration-500"
                            >
                                {/* Image */}
                                <div className="relative h-72 overflow-hidden">
                                    <img
                                        src={resource.image}
                                        alt={resource.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

                                    {/* Featured Badge */}
                                    {resource.featured && (
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-linear-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                                                <TrendingUp className="w-3 h-3" />
                                                TRENDING
                                            </span>
                                        </div>
                                    )}

                                    {/* Upcoming Badge */}
                                    {resource.upcoming && (
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-linear-to-r from-green-500 to-emerald-600 text-white text-xs font-bold rounded-full">
                                                LIVE SOON
                                            </span>
                                        </div>
                                    )}

                                    {/* Play Icon for Video */}
                                    {resource.type === "video" || resource.type === "webinar" ? (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                                                <PlayCircle className="w-10 h-10 text-teal-600 ml-1" />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="absolute top-4 right-4 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                                            {resource.type === "whitepaper" && <FileText className="w-7 h-7 text-teal-600" />}
                                            {resource.type === "case-study" && <FileCheck className="w-7 h-7 text-teal-600" />}
                                            {resource.type === "datasheet" && <Download className="w-7 h-7 text-teal-600" />}
                                        </div>
                                    )}

                                    {/* Type Tag */}
                                    <div className="absolute bottom-6 left-6 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-800 uppercase">
                                        {resource.type.replace("-", " ")}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                                        <span>{resource.date}</span>
                                        {resource.readTime && <><span>•</span><span>{resource.readTime}</span></>}
                                        {resource.duration && <><span>•</span><span>{resource.duration}</span></>}
                                        {resource.downloads && <><span>•</span><span className="text-teal-600 font-medium">{resource.downloads} downloads</span></>}
                                        {resource.views && <><span>•</span><span className="text-teal-600 font-medium">{resource.views} views</span></>}
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
                                        {resource.title}
                                    </h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">
                                        {resource.desc}
                                    </p>

                                    <div className="flex items-center gap-2 text-teal-600 font-bold">
                                        {resource.type === "video" || resource.type === "webinar" ? "Watch now" : "Download free"}
                                        <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>

                                {/* Bottom Accent */}
                                <div className="h-1 bg-linear-to-r from-teal-600 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <button className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-full hover:border-teal-600 hover:text-teal-600 hover:bg-teal-50 transition-all inline-flex items-center gap-3">
                            Load More Resources
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Topic Browser */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            Explore by Security Domain
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Deep-dive collections curated by our security research team
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            "Zero Trust Architecture",
                            "Cloud-Native Security",
                            "Ransomware Defense",
                            "AI & ML Security",
                            "Regulatory Compliance",
                            "Threat Hunting Playbooks"
                        ].map((topic) => (
                            <a
                                key={topic}
                                href="#"
                                className="group p-8 bg-slate-50 border-2 border-slate-200 rounded-2xl hover:border-teal-600 hover:shadow-xl transition-all duration-300 text-center"
                            >
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                                    {topic}
                                </h3>
                                <p className="text-sm text-slate-600 mb-4">
                                    12–28 resources · Updated weekly
                                </p>
                                <span className="text-teal-600 font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                                    Explore collection
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA - Matches Home */}
            <section className="py-24 bg-linear-to-r from-teal-600 to-teal-700 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <Mail className="w-16 h-16 mx-auto mb-6 text-teal-200" />
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        Never Miss a Threat Insight
                    </h2>
                    <p className="text-xl lg:text-2xl text-teal-100 mb-12">
                        Weekly digest: new research, zero-day alerts, and exclusive webinars
                    </p>
                    <div className="max-w-md mx-auto">
                        <div className="flex gap-4">
                            <input
                                type="email"
                                placeholder="name@company.com"
                                className="flex-1 px-8 py-5 rounded-full text-slate-900 text-lg outline-none"
                            />
                            <button className="px-10 py-5 bg-white text-teal-600 font-bold rounded-full hover:bg-slate-100 transition-all shadow-xl">
                                Subscribe Free
                            </button>
                        </div>
                        <p className="mt-4 text-teal-200 text-sm">
                            47,000+ security leaders · Unsubscribe anytime
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
