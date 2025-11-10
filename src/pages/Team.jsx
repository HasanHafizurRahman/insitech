import React from "react";

const members = [
    { name: "Ayesha Rahman", role: "CEO" },
    { name: "Imran Hossain", role: "Head of Engineering" },
    { name: "Fatima Khan", role: "Head of Product" },
];

export default function Team() {
    return (
        <section className="container mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold">Team</h2>
            <p className="mt-2 text-slate-600">Meet the people behind Insitech (lorem ipsum)</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {members.map((m) => (
                    <div key={m.name} className="p-6 bg-white rounded shadow">
                        <div className="h-32 w-32 bg-slate-100 rounded-full flex items-center justify-center text-xl font-semibold">
                            {m.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <h3 className="mt-4 font-semibold">{m.name}</h3>
                        <p className="text-sm text-slate-600">{m.role}</p>
                        <p className="mt-3 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
