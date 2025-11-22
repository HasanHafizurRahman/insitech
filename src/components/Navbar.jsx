import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const links = [
    { to: "/", label: "Home" },
    { to: "/solutions", label: "Solutions" },
    { to: "/products", label: "Products" },
    { to: "/services", label: "Services" },
    { to: "/resources", label: "Resources" },
    { to: "/about", label: "About" },
    { to: "/team", label: "Team" },
    { to: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-lg"
                    : "bg-white shadow-sm"
                }`}
        >
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <NavLink to="/" className="flex items-center gap-2 group">
                      
                        <span className="text-2xl font-bold bg-linear-to-r from-teal-600 to-gray-500 bg-clip-text text-transparent">
                            Insitech
                        </span>
                        
                    </NavLink>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {links.map((l) => (
                            <NavLink
                                key={l.to}
                                to={l.to}
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                        ? "bg-teal-50 text-teal-700"
                                        : "text-slate-600 hover:text-teal-600 hover:bg-slate-50"
                                    }`
                                }
                            >
                                {l.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* CTA Button - Desktop */}
                    <div className="hidden lg:flex items-center gap-4">
                        <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">
                            Sign In
                        </button>
                        <button className="px-6 py-2.5 bg-linear-to-r from-teal-600 to-teal-600 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-screen" : "max-h-0"
                    }`}
            >
                <div className="border-t border-slate-100 bg-white/95 backdrop-blur-md">
                    <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
                        {links.map((l) => (
                            <NavLink
                                key={l.to}
                                to={l.to}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `px-4 py-3 rounded-lg text-base font-medium transition-all ${isActive
                                        ? "bg-teal-50 text-teal-700"
                                        : "text-slate-600 hover:bg-slate-50"
                                    }`
                                }
                            >
                                {l.label}
                            </NavLink>
                        ))}
                        <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col gap-2">
                            <button className="px-4 py-3 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
                                Sign In
                            </button>
                            <button className="px-4 py-3 bg-linear-to-r from-teal-600 to-teal-600 text-white text-base font-medium rounded-lg hover:shadow-lg transition-all">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
