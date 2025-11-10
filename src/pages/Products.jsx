import React, { useState } from "react";
import { Cpu, Shield, Cloud, Network, Zap, Search, ChevronRight, ArrowRight, Package } from "lucide-react";

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
            desc: "AI-powered SecOps platform with SIEM, SOAR, XDR, and threat intelligence.",
            type: "Platform",
            deployment: "Cloud/On-prem",
            image: "security"
        },
        {
            category: "networking",
            title: "Nexus Dashboard",
            desc: "Unified management for data center networks across hardware, software, and cloud.",
            type: "Management",
            deployment: "Cloud",
            image: "dashboard"
        },
        {
            category: "cloud",
            title: "Unified Edge",
            desc: "Full-stack compute platform for AI-ready architecture and app deployment.",
            type: "Hardware",
            deployment: "Edge",
            image: "edge"
        },
        {
            category: "ai",
            title: "Secure AI Factory",
            desc: "Scalable AI infrastructure with NVIDIA for training and inferencing.",
            type: "Solution",
            deployment: "On-prem/Cloud",
            image: "ai-factory"
        },
        {
            category: "software",
            title: "AI Defense",
            desc: "Network-based security for AI applications and threat detection.",
            type: "Software",
            deployment: "Cloud",
            image: "defense"
        },
        {
            category: "security",
            title: "Zero Trust Suite",
            desc: "Comprehensive zero trust architecture implementation tools.",
            type: "Suite",
            deployment: "Hybrid",
            image: "zero-trust"
        }
    ];

    const filteredProducts = products.filter(p =>
        (selectedCategory === "all" || p.category === selectedCategory) &&
        (searchTerm === "" || p.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const featuredUseCases = [
        "Data Center",
        "Edge Computing",
        "Hybrid Cloud",
        "AI/ML Workloads",
        "Remote Work",
        "IoT Security"
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
                            Our Products
                        </h1>
                        <p className="text-xl text-slate-200 mb-8">
                            Discover Insitech's innovative solutions for cybersecurity, networking, and AI.
                        </p>

                        {/* Search Bar */}
                        <div className="bg-white rounded-full p-2 flex items-center gap-2 max-w-2xl">
                            <Search className="w-5 h-5 text-slate-400 ml-2" />
                            <input
                                type="text"
                                placeholder="Search products, features, categories..."
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

            {/* Product Category Filter */}
            <section className="bg-white border-b border-slate-200 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex items-center gap-4 overflow-x-auto">
                        {productCategories.map((category) => (
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

            {/* Featured Products */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            Featured Products
                        </h2>
                        <p className="text-lg text-slate-600">
                            Our latest and most popular product offerings
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map((product, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl transition-all group">
                                {/* Product Image/Icon Area */}
                                <div className="relative h-48 bg-linear-to-br from-blue-600 to-blue-900 flex items-center justify-center">
                                    {product.category === "security" && <Shield className="w-16 h-16 text-white" />}
                                    {product.category === "networking" && <Network className="w-16 h-16 text-white" />}
                                    {product.category === "cloud" && <Cloud className="w-16 h-16 text-white" />}
                                    {product.category === "ai" && <Zap className="w-16 h-16 text-white" />}
                                    {product.category === "software" && <Cpu className="w-16 h-16 text-white" />}

                                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-900 uppercase">
                                        {product.category}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                                        <span>{product.type}</span>
                                        <span>•</span>
                                        <span>{product.deployment}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">{product.title}</h3>
                                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">{product.desc}</p>

                                    <div className="flex gap-3">
                                        <button className="flex-1 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm">
                                            View Details
                                        </button>
                                        <button className="px-4 py-2 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors text-sm">
                                            Demo
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <button className="px-8 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-full hover:bg-slate-50 transition-colors inline-flex items-center gap-2">
                            Load More Products
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Browse by Use Case */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            Browse by Use Case
                        </h2>
                        <p className="text-lg text-slate-600">
                            Find products tailored to your specific needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredUseCases.map((useCase, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="p-6 bg-slate-50 border border-slate-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all group"
                            >
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{useCase}</h3>
                                <p className="text-sm text-slate-600 mb-4">
                                    {Math.floor(Math.random() * 10) + 3} related products
                                </p>
                                <span className="text-blue-600 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all text-sm">
                                    Explore products
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Bundles */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            Product Bundles
                        </h2>
                        <p className="text-lg text-slate-600">
                            Integrated solutions for comprehensive coverage
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Security Essentials Bundle",
                                level: "Basic",
                                products: 4,
                                price: "Contact Sales"
                            },
                            {
                                title: "AI Infrastructure Suite",
                                level: "Advanced",
                                products: 6,
                                price: "Custom Quote"
                            },
                            {
                                title: "Enterprise Networking Package",
                                level: "Premium",
                                products: 8,
                                price: "Starting at $10K"
                            }
                        ].map((bundle, idx) => (
                            <div key={idx} className="bg-white border-b-4 border-blue-600 rounded-lg p-8 hover:shadow-lg transition-shadow">
                                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-4">
                                    {bundle.level}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{bundle.title}</h3>
                                <div className="flex items-center gap-4 text-sm text-slate-600 mb-6">
                                    <div className="flex items-center gap-1">
                                        <Package className="w-4 h-4" />
                                        <span>{bundle.products} products</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Cpu className="w-4 h-4" />
                                        <span>{bundle.price}</span>
                                    </div>
                                </div>
                                <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Demo Request */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                        See Our Products in Action
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Schedule a personalized demo today
                    </p>
                    <div className="max-w-md mx-auto">
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-3 rounded-full text-slate-900 outline-none"
                            />
                            <button className="px-8 py-3 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors">
                                Request Demo
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}