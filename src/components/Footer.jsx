import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, ChevronUp } from "lucide-react"; // Assuming lucide-react icons are available; install if needed

export default function Footer() {
    return (
        <footer className="bg-linear-to-b from-gray-900 to-gray-800 text-gray-300 py-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('/path/to/subtle-circuit-pattern.svg')] bg-repeat"></div> {/* Optional subtle background pattern for tech feel */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="font-bold text-2xl text-white mb-4 flex items-center">
                            <span className="text-blue-400">Insi</span>tech
                           
                        </div>
                        <p className="text-sm text-gray-400 mb-6">
                            Enterprise cybersecurity solutions for the modern digital landscape.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-4 text-lg">Solutions</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link to="/network" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                                    Network Security
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/cloud" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                                    Cloud Security
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/data" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                                    Data Protection
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/zero-trust" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                                    Zero Trust
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-4 text-lg">Resources</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link to="/docs" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                                    Documentation
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/case-studies" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                                    Case Studies
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/whitepapers" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                                    Whitepapers
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                                    Blog
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-4 text-lg">Company</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link to="/about" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                                    About Us
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/careers" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                                    Careers
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/partners" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                                    Partners
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                                    Contact
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-12 pt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
                    <div>© 2025 Insitech. All rights reserved.</div>
                    <div className="space-x-4 mt-4 md:mt-0">
                        <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
                        <span>|</span>
                        <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
            {/* Back to top button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-20"
            >
                <ChevronUp className="w-5 h-5" />
            </button>
        </footer>
    );
}