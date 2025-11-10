import React from "react";

export default function Solutions() {
    return (
        <section className="container mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold">Solutions</h2>
            <p className="mt-2 text-slate-600">Explore our Cisco-inspired solution categories (lorem ipsum).</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded shadow">
                    <h3 className="font-semibold">Enterprise Network Security</h3>
                    <p className="mt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="p-6 bg-white rounded shadow">
                    <h3 className="font-semibold">Cloud & Infrastructure Protection</h3>
                    <p className="mt-2 text-sm">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
            </div>
        </section>
    );
}
