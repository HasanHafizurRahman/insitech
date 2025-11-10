import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-slate-800 text-slate-200">
            <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <h3 className="text-xl font-bold">Insitech</h3>
                    <p className="mt-2 text-sm">Cybersecurity services · Static marketing site</p>
                </div>
                <div>
                    <h4 className="font-semibold">Explore</h4>
                    <ul className="mt-2 space-y-1 text-sm">
                        <li><Link to="/solutions">Solutions</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/services">Services</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold">Contact</h4>
                    <p className="mt-2 text-sm">hello@insitech.example</p>
                    <p className="text-sm">© {new Date().getFullYear()} Insitech</p>
                </div>
            </div>
        </footer>
    );
}
