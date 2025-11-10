import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-extrabold text-sky-700">Insitech</div>
          <div className="hidden md:flex items-center gap-6">
            {links.slice(1,4).map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  isActive ? "text-sky-700 font-semibold" : "text-slate-700 hover:text-sky-600"
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                isActive
                  ? "text-sky-700 font-semibold"
                  : "text-slate-700 hover:text-sky-600"
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md border border-slate-200"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-sky-700 font-semibold" : "text-slate-700"
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
