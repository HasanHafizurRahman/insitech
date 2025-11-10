import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="font-bold text-xl text-white mb-4">
                            <span className="text-blue-400">Insi</span>tech
                        </div>
                        <p className="text-sm text-gray-400">
                            Enterprise cybersecurity solutions for the modern digital landscape.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-3">Solutions</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#network" className="hover:text-blue-400">Network Security</a></li>
                            <li><a href="#cloud" className="hover:text-blue-400">Cloud Security</a></li>
                            <li><a href="#data" className="hover:text-blue-400">Data Protection</a></li>
                            <li><a href="#zero" className="hover:text-blue-400">Zero Trust</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-3">Resources</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#docs" className="hover:text-blue-400">Documentation</a></li>
                            <li><a href="#cases" className="hover:text-blue-400">Case Studies</a></li>
                            <li><a href="#papers" className="hover:text-blue-400">Whitepapers</a></li>
                            <li><a href="#blog" className="hover:text-blue-400">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-3">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#about" className="hover:text-blue-400">About Us</a></li>
                            <li><a href="#careers" className="hover:text-blue-400">Careers</a></li>
                            <li><a href="#partners" className="hover:text-blue-400">Partners</a></li>
                            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 text-center">
                    © 2025 Insitech. All rights reserved. | Privacy Policy | Terms of Service
                </div>
            </div>
        </footer>
    );
}
