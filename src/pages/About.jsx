import React from "react";

export default function About() {
    return (
        <section className="container mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold">About Insitech</h2>
            <p className="mt-4 text-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded shadow">
                    <h3 className="font-semibold">Our Mission</h3>
                    <p className="mt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="p-6 bg-white rounded shadow">
                    <h3 className="font-semibold">Our Vision</h3>
                    <p className="mt-2 text-sm">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
                <div className="p-6 bg-white rounded shadow">
                    <h3 className="font-semibold">Our Values</h3>
                    <p className="mt-2 text-sm">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
                </div>
            </div>
        </section>
    );
}
