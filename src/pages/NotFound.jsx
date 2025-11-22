import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="container mx-auto px-4 py-28 text-center">
            <h2 className="text-4xl font-bold">404 — Page not found</h2>
            <p className="mt-4 text-slate-600">Sorry, we couldn't find that page.</p>
            <Link to="/" className="mt-6 inline-block px-5 py-3 bg-teal-600 text-white rounded-md">Go home</Link>
        </div>
    );
}
