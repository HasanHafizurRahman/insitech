import React, { useState } from "react";
import { 
  Shield, Network, Cloud, Zap, Cpu, Package, Search, ChevronRight, 
  ArrowRight, LayoutDashboard, Server, Lock, Brain
} from "lucide-react";
import { Link } from "react-router-dom";

// Import your actual product images (same style as homepage)
import sparkSecurity from '../assets/security.jpg';
import nexusDashboard from '../assets/dashboard.jpg';
import unifiedEdge from '../assets/server.jpg';
import aiFactory from '../assets/NVIDIA.jpg';
import aiSecurity from '../assets/ai-security.jpg';
import zeroTrust from '../assets/security.jpg'; 

export default function Products() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const productCategories = [
        { id: "all", label: "All Products", icon: Package },
        { id: "security", label: "Security", icon: Shield },
        { id: "networking", label: "Networking", icon: Network },
        { id: "cloud", label: "Cloud", icon: Cloud },
        { id: "ai", label: "AI & Compute", icon: Zap },
        { id: "software", label: "Software", icon: Cpu }
    ];

    const products = [
        {
            category: "security",
            title: "Spark Enterprise Security",
            desc: "AI-powered SecOps platform with SIEM, SOAR, XDR, and real-time threat intelligence.",
            type: "Platform",
            deployment: "Cloud / On-prem",
            image: sparkSecurity,
            icon: Shield,
            link: "/products/spark"
        },
        {
            category: "networking",
            title: "Nexus Dashboard",
            desc: "Unified management for data center networks across hardware, software, and cloud.",
            type: "Management",
            deployment: "Cloud",
            image: nexusDashboard,
            icon: LayoutDashboard,
            link: "/products/nexus"
        },
        {
            category: "cloud",
            title: "Unified Edge",
            desc: "Full-stack compute platform for AI-ready architecture and app deployment at the edge.",
            type: "Hardware + Software",
            deployment: "Edge",
            image: unifiedEdge,
            icon: Server,
            link: "/products/edge"
        },
        {
            category: "ai",
            title: "Secure AI Factory",
            desc: "Scalable AI infrastructure with NVIDIA for training, inferencing, and secure model deployment.",
            type: "Solution",
            deployment: "On-prem / Cloud",
            image: aiFactory,
            icon: Brain,
            link: "/products/ai-factory"
        },
        {
            category: "software",
            title: "AI Defense",
            desc: "Network-based security for AI applications with real-time threat detection and response.",
            type: "Software",
            deployment: "Cloud",
            image: aiSecurity,
            icon: Lock,
            link: "/products/ai-defense"
        },
        {
            category: "security",
            title: "Zero Trust Suite",
            desc: "Comprehensive zero trust architecture with continuous verification and microsegmentation.",
            type: "Suite",
            deployment: "Hybrid",
            image: zeroTrust,
            icon: Shield,
            link: "/products/zero-trust"
        }
    ];

    const filteredProducts = products.filter(p => 
        (selectedCategory === "all" || p.category === selectedCategory) &&
        (searchTerm === "" || p.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="bg-white">
            {/* Hero - Matches Homepage */}
            <section className="relative bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <div className="absolute inset-0 bg-linear-to-br from-blue-600/40 to-purple-600/20"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                            Our Products
                        </h1>
                        <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Enterprise-grade solutions for networking, security, cloud, and AI — built for the modern edge.
                        </p>

                        {/* Search - Same glass style */}
                        <div className="max-w-2xl mx-auto">
                            <div className="bg-white/10 backdrop-blur-md rounded-full p-3 flex items-center gap-4 border border-white/20">
                                <Search className="w-5 h-5 text-white/70 ml-4" />
                                <input
                                    type="text"
                                    placeholder="Search products, solutions, or use cases..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="flex-1 bg-transparent text-white placeholder-white/60 outline-none text-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Pills - Clean, Homepage Style */}
            <section className="border-b border-slate-200 bg-white sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
                        {productCategories.map((cat) => {
                            const Icon = cat.icon;
                            const isActive = selectedCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap ${
                                        isActive
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

            {/* Product Grid - 100% Homepage Match */}
            <section className="py-20 bg-linear-to-b from-white to-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
                            Product Portfolio
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
                            Solutions that power the future
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map((product, idx) => {
                            const Icon = product.icon;
                            return (
                                <Link
                                    key={idx}
                                    to={product.link}
                                    className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500"
                                >
                                    {/* Image */}
                                    <div className="relative h-72 overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

                                        {/* Floating Icon */}
                                        <div className="absolute top-4 right-4 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                                            <Icon className="w-7 h-7 text-blue-600" />
                                        </div>

                                        {/* Category Tag */}
                                        <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-800 uppercase">
                                            {product.category}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8">
                                        <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
                                            <span className="font-medium">{product.type}</span>
                                            <span>•</span>
                                            <span>{product.deployment}</span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                            {product.title}
                                        </h3>
                                        <p className="text-slate-600 mb-6 leading-relaxed">
                                            {product.desc}
                                        </p>

                                        <div className="flex items-center gap-2 text-blue-600 font-semibold">
                                            <span>Explore product</span>
                                            <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </div>

                                    {/* Bottom Accent */}
                                    <div className="h-1 bg-linear-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Load More */}
                    <div className="text-center mt-16">
                        <button className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all inline-flex items-center gap-3">
                            View All Products
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Final CTA - Matches Homepage */}
            <section className="py-20 bg-linear-to-r from-blue-600 to-blue-700 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                        Ready to secure the edge?
                    </h2>
                    <p className="text-xl text-blue-100 mb-10">
                        Talk to our experts and discover the right solution for your enterprise
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-slate-100 transition-colors shadow-lg"
                        >
                            Contact Sales
                        </Link>
                        <Link
                            to="/demo"
                            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
                        >
                            Request Demo
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}